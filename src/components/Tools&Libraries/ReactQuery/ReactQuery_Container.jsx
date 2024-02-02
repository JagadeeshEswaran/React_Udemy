/* eslint-disable no-unused-vars */
import React from "react";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

const ReactQuery_Container = () => {
	return (
		<QueryClientProvider client={queryClient}>
			<App />
		</QueryClientProvider>
	);
};

export default ReactQuery_Container;
