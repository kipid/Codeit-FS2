import express from "express";
import mockTasks from './data/mock.js';
import mongoose from 'mongoose';
import { DATABASE_URL } from "./env.js";
import Task from "./models/Task.js";

mongoose.connect(DATABASE_URL).then(() => console.log("Connected to DB."))

const HttpStatus = Object.freeze({
  SUCCESS: 200,
  CREATED: 201,
  ACCEPTED: 202,
  NON_AUTHORITATIVE_INFORMATION: 203,
	NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  SERVER_ERROR: 500,
});

const app = express();

app.use(express.json());

app.post("/tasks", async (req, res) => {
	const newTask = await Task.create(req.body);
	res.send(newTask);
});

app.get("/tasks", async (req, res) => {
	const sort = req.query.sort;
	const count = Number(req.query.count);
	const sortOption = { createdAt: sort === "oldest" ? "asc" : "desc" };

	const tasks = await Task.find().sort(sortOption).limit(count); // Full scan

	res.send(tasks);
});

app.get("/tasks/:id", async (req, res) => {
	const id = req.params.id;
	const task = await Task.findById(id);
	// console.log(id);
	if (task) {
		res.send(task);
	}
	else {
		res.status(HttpStatus.NOT_FOUND).send({message: "없습니다."});
	}
})

// PUT 전체, PATCH 일부만
app.patch("/tasks/:id", (req, res) => {
	const id = Number(req.params.id);
	const task = mockTasks.find(task => task.id === id);
	if (task) {
		Object.keys(req.body).forEach(key => {
			task[key] = req.body[key];
		});
		res.send(task);
	}
	else {
		res.status(HttpStatus.NOT_FOUND).send({"message": "없습니다."});
	}
});

app.delete("/tasks/:id", (req, res) => {
	const id = Number(req.params.id);
	const idx = mockTasks.findIndex(task => task.id === id);
	// 못찾으면 idx = -1
	if (idx >= 0) {
		mockTasks.splice(idx, 1);
		res.sendStatus(HttpStatus.NO_CONTENT);
	}
});

app.listen(3000, () => console.log("Server on"));
console.log("Hi!");
