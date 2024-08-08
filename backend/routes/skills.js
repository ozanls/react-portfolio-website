import express from "express";
import db from "../db/connection.js";
import { ObjectId } from "mongodb";

const router = express.Router();

// Get an array of all the skills.
router.get("/", async (req, res) => {
  let collection = await db.collection("skills");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

export default router;