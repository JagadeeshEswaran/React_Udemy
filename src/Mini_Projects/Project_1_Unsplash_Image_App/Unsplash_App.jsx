/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Components/Navbar";
import { Unsplash_App_Context_Provider, useUnsplashContext } from "./context";
import Main_Section from "./Components/Main_Section";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

const Unsplash_App = () => {
	return (
		<>
			<Unsplash_App_Context_Provider>
				<QueryClientProvider client={queryClient}>
					<main
						className="card txtClr mx-auto"
						style={{ width: "95%", height: "86vh", maxHeight: "auto" }}>
						<article
							className="px-3 border rounded-2"
							style={{ height: "3.5rem" }}>
							<Navbar />
						</article>

						<Main_Section />

						{/* <article className="w-100 h-100 rounded-2"></article> */}
					</main>

					<ReactQueryDevtools initialIsOpen={false} />
				</QueryClientProvider>
			</Unsplash_App_Context_Provider>
		</>
	);
};

export default Unsplash_App;
