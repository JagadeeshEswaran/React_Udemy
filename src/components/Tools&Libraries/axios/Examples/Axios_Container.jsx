import React from "react";
import First_Request from "./First_Request";
import About_Headers from "./About_Headers";
import Post_request from "./Post_request";
import Global_Instances from "./Global_Instances";
import Custom_Instances from "./Custom_Instances";
import Interceptors from "./Interceptors";

export const URL1 = "https://course-api.com/react-store-products";
export const URL2 = "https://icanhazdadjoke.com/";
export const URL3 = "https://course-api.com/axios-tutorial-post";

const Axios_Container = () => {
	return (
		<>
			<First_Request />

			<About_Headers />

			<Post_request />

			<Global_Instances />

			<Custom_Instances />

			<Interceptors />
		</>
	);
};

export default Axios_Container;
