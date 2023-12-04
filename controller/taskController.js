import { PrismaClient } from "@prisma/client";
import ObjectID from "bson-objectid";

const prisma = new PrismaClient();

//Get All Task

export const getAllTask = async (req, res) => {
  try {
    const task = await prisma.todo.findMany();
    res.json(task);
  } catch (error) {
    res.json(error);
  }
};

// Post: CreateTask

export const createTask = async (req, res) => {
  try {
    console.log("Incoming JSON data:", req.body);
    const task = await prisma.todo.create({
      data: {
        id: ObjectID(),
        task: req.body.task,
        isDone: false,
      },
    });
    res.json(task);
  } catch (error) {
    res.json(error);
  }
};

// Delete: DeleteTask

export const deleteTask = async (req, res) => {
  const { id } = req.params;
  try {
    const task = await prisma.todo.delete({
      where: {
        id: ObjectID(id),
      },
    });
    res.json(task);
  } catch (error) {
    res.json(error);
  }
};

export const updateTask = async (req, res) => {
  const { id } = req.params;
  try {
    const uptask = await prisma.todo.update({
      where: {
        id: ObjectID(id),
      },
      data: {
        task:req.body.task,
        isDone:req.body.isDone,
      },
    });
    res.json(uptask);
  } catch (error) {
    res.json(error);
  }
};
