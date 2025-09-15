import Entry from "../models/entryModel.js";
import isAuth from "../middleware/isAuth.js";

// Create entry
export const createEntry = async (req, res) => {
  try {
    const entry = new Entry({
      userId: req.userId,
      date: req.body.date,
      content: req.body.content,
    });
    await entry.save();
    res.status(201).json(entry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get all entries (sorted newest first)
export const allEntries = async (req, res) => {
  try {
    const entries = await Entry.find({ userId: req.userId })
      .sort({ date: -1 });
    res.json(entries);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update entry
export const changeEntry = async (req, res) => {
  try {
    const { id } = req.params;
    const { date, content } = req.body;

    // only update fields if they exist in req.body
    const updatedEntry = await Entry.updateOne(
      { _id: id, userId: req.userId },  // only allow user's own entries
      { date, content },
      { new: true } // return updated entry
    );

    if (!updatedEntry) {
      return res.status(404).json({ message: "Entry not found" });
    }

    res.json(updatedEntry);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Delete entry
export const deleteEntry = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedEntry = await Entry.findOneAndDelete({
      _id: id,
      userId: req.userId
    });

    if (!deletedEntry) {
      return res.status(404).json({ message: "Entry not found" });
    }

    res.json({ message: "Entry deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};
