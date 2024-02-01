import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "react-toastify/dist/ReactToastify.css";
import AppContext from "./AppContext";
import "./styles/index.css";
// import { RouterProvider } from "react-router-dom";
// import { appRouter } from "./router/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
	<AppContext>
		<App />
	</AppContext>
);
