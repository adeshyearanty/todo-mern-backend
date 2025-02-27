import { Todo } from "../db/model/Todo.js";

async function getAllTasks (req, res)  {
  try {
    const tasks = await Todo.find({});

    res.status(200).json({
      length: tasks.length,
      data: tasks,
    });
  } catch (error) {
    console.log(error);
  }
};

async function createTask (req, res) {
  try {
    const newTask = {
      title: req.body.title,
      description: req.body.description,
    };

    const task = await Todo.create(newTask);

    res.status(200).send(task);
  } catch (error) {
    console.log(error);
  }
};

async function getSingleTask (req, res) {
  try {
    const { id } = req.params;
    const task = await Todo.findById(id);
    res.status(200).json(task);
  } catch (error) {
    console.log(error);
  }
};

async function updateTask (req, res) {
  try {
    const task = req.body;
    const { id } = req.params;
    await Todo.findByIdAndUpdate(id, task);
    res.status(200).send("Successfully Updated");
  } catch (error) {
    console.log(error);
  }
};

async function deleteTask (req, res) {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(200).send("Successfully Deleted");
  } catch (error) {
    console.log(error);
  }
};

function helloWorld (req, res) {
  res.status(200).send("Hello..!!");
};

export { getAllTasks, createTask, getSingleTask, updateTask, deleteTask, helloWorld };