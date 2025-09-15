import mongoose from "mongoose";

const entrySchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true,},
    date: { type: Date, required: true },
    content: { type: String, required: true },
  },
  { timestamps: true }
);

export default mongoose.model("Entry", entrySchema);
