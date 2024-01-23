import { createBrowserRouter } from "react-router-dom";
import UseState_Hook from "../components/React_Hooks/UseState_Hook/UseState_Hooks";
import UseEffect_Hook from "../components/React_Hooks/UseEffect_Hook/UseEffect_Hook";
import App from "../App";
import Main_React_Hooks from "../components/React_Hooks/Main_React_Hooks";

export const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "React_Hooks",
				element: <Main_React_Hooks />,
				children: [
					{
						path: "useState_Hook",
						element: <UseState_Hook />,
					},
					{
						path: "useEffect_Hook",
						element: <UseEffect_Hook />,
					},
				],
			},
		],
	},
]);
