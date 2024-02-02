/* eslint-disable no-unused-vars */
import axios from "axios";
import {
	URL1,
	URL2,
} from "../components/Tools&Libraries/axios/Examples/Axios_Container";
// import { URL1 } from "../components/Tools&Libraries/axios/Examples/Axios_Container";

// Here We'll be creating a Global Instance for Axios in our App
export const globalAxiosInstance = axios.create({
	baseURL: "https://course-api.com",
	headers: {
		"Content-Type": "application/json",
	},
});

// let fetchData = async () => {
// 	let response = await globalAxiosInstance.get("/react-store-products");

// 	// console.log(response.data); // Refer Console to view the response data
// };

// fetchData();

export const customAxiosInstance1 = axios.create({
	baseURL: "https://course-api.com",
	headers: {
		Accept: "application/json",
	},
});
export const customAxiosInstance2 = axios.create({
	baseURL: "https://icanhazdadjoke.com/",
	headers: {
		Accept: "application/json",
	},
});
