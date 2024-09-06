import express from "express";
import tasks from './data/mock.js';

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

app.post("/tasks", (req, res) => {
	const newTask = req.body;
	const ids = tasks.map((task => task.id));
	newTask.id = Math.max(...ids) + 1;
	newTask.isComplete = false;
	newTask.createdAt = new Date();
	newTask.updatedAt = new Date();
	tasks.push(newTask);
	res.send(newTask);
});

app.get("/tasks", (req, res) => {
	const sort = req.query.sort;
	const count = Number(req.query.count);
	// console.log(sort, count);
	const compareFn = sort === "oldest"
		? (a, b) => a.createdAt - b.createdAt
		: (a, b) => b.createdAt - a.createdAt; // createdAt 오름차순
	let newTasks = tasks.sort(compareFn);

	if (count) {
		newTasks = newTasks.slice(0, count);
	}
	res.send(newTasks);
});

app.get("/tasks/:id", (req, res) => {
	const id = Number(req.params.id);
	const task = tasks.find(task => task.id === id);
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
	const task = tasks.find(task => task.id === id);
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
	const idx = tasks.findIndex(task => task.id === id);
	// 못찾으면 idx = -1
	if (idx >= 0) {
		tasks.splice(idx, 1);
		res.sendStatus(HttpStatus.NO_CONTENT);
	}
});

app.listen(3000, () => console.log("Server on"));
console.log("Hi!");
