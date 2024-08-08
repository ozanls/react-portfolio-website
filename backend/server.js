import express from "express";
import cors from "cors";
import projects from "./routes/projects.js";
import skills from "./routes/skills.js";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());

// Routes
app.use("/projects", projects);
app.use("/skills", skills);

// Start the Express server
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});