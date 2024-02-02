/* eslint-disable no-unused-vars */
import React from "react";
import Axios_Main from "./axios/Axios_Main";
import ReactQuery_main from "./ReactQuery/ReactQuery_main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const TandL_Container = () => {
	return (
		<>
			<Axios_Main />

			<ReactQuery_main />
		</>
	);
};

export default TandL_Container;
