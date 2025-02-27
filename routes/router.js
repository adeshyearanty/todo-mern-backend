import express from "express";
const router = express.Router();
import { getAllTasks, createTask, getSingleTask, updateTask, deleteTask, helloWorld } from "../controller/task-controller.js";

router.get("/tasks", getAllTasks);

router.post("/tasks", createTask);

router.get("/tasks/:id", getSingleTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTask);

router.get("/", helloWorld);

export default router;
