import axios from "axios";

export const task_buddy_custom_instances = axios.create({
	baseURL: "http://localhost:5000/api/tasks",
});
