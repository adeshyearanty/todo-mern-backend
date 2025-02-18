import express from 'express';
const router = express.Router();
import {Todo} from "./Todo.js"

router.get("/tasks", async (req, res) => {
    try {
        const tasks = await Todo.find({}); 

        res.status(200).json({
            length: tasks.length,
            data: tasks
        })
    } catch (error) {
        console.log(error);
    }
})

router.post("/tasks", async (req, res) => {
    try {
        const newTask = {
            title: req.body.title,
            description: req.body.description
        }

        const task = await Todo.create(newTask);

        res.status(200).send(task);
    } catch (error) {
        console.log(error);
    }
})

router.get("/tasks/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const task = await Todo.findById(id);
        res.status(200).json(task)
    } catch (error) {
        console.log(error)
    }
})

router.put("/tasks/:id", async (req, res) => {
    try {
        const task = req.body;
        const {id} = req.params;
        await Todo.findByIdAndUpdate(id, task);
        res.status(200).send("Successfully Updated")
    } catch (error) {
        console.log(error);
    }
})

router.delete("/tasks/:id", async (req, res) => {
    try {
        const {id} = req.params;
        await Todo.findByIdAndDelete(id);
        res.status(200).send("Successfully Deleted");
    } catch (error) {
        console.log(error);
    }
})

router.get("/", (req, res) => {
    res.status(200).send("Hello..!!");
})

export default router;