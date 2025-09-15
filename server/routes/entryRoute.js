import express from "express";
import { allEntries, changeEntry, createEntry, deleteEntry } from "../controllers/entryCOntroller.js";
import isAuth from "../middleware/isAuth.js";

const entryRouter = express.Router();

entryRouter.use(isAuth); // Apply authentication middleware to all entry routes

entryRouter.post('/addNewEntry', createEntry);
entryRouter.get('/all', allEntries);
entryRouter.patch('/:id', changeEntry);
entryRouter.delete('/:id', deleteEntry);


export default entryRouter;
