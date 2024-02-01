/* eslint-disable no-unused-vars */
import "./styles/App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Main_React_Hooks from "./components/React_Hooks/Main_React_Hooks";
import UseState_Hooks from "./components/React_Hooks/UseState_Hook/UseState_Hooks";
import UseEffect_Hook from "./components/React_Hooks/UseEffect_Hook/UseEffect_Hook";
import Navbar from "./components/App_Components/Navbar_Comps/Navbar";
import Footer from "./components/App_Components/Footer_Components/Footer";
import Micro_Apps_Main from "./React_Micro_Projects/Micro_Apps_Main";
import Birthday_Reminder from "./React_Micro_Projects/01_Birthday_Reminder/Birthday_Reminder";
import Tours_App_Main from "./React_Micro_Projects/02_Tours_App/Tours_App_Main";
import Reviews_App_Main from "./React_Micro_Projects/03_Reviews_App/Reviews_App_Main";
import { Questions_App_Main } from "./React_Micro_Projects/04_Questions_App/Question_App_Main";
import Menu_App_Main from "./React_Micro_Projects/05_Menu_Items.js/Menu_App_Main";
import Jobs_App_Main from "./React_Micro_Projects/06_Jobs_App/Jobs_App_Main";
import Slider_App_Main from "./React_Micro_Projects/07_Slidee_App/Slider_App_Main";
import Hooks_Challenges from "./components/React_Hooks/Challenges/Hooks_Challenges";
import Lorem_App_Main from "./React_Micro_Projects/08_Lorem_Ipsum/Lorem_App_Main";
import Color_picker_Main from "./React_Micro_Projects/09_Color_Picker/Color_Picker_Main";
import { ToastContainer, toast } from "react-toastify";
import Grocery_Note_Main from "./React_Micro_Projects/10_Grocery_Note/Grocery_Note_Main";
import UseRef_Hook_Main from "./components/React_Hooks/UseRef_Hook/UseRef_Hook_Main";
import Navbar_App_Main from "./React_Micro_Projects/11_Navbar_App/Navbar_App_Main";
import Custom_Hooks_Main from "./components/React_Hooks/Custom_Hooks/Custom_Hooks_Main";
import UseToggle_Hook_Main from "./components/React_Hooks/Custom_Hooks/components/useToggle/UseToggle_Hook_Main";
import UseFetch_Hooks_Main from "./components/React_Hooks/Custom_Hooks/components/useFetch/UseFetch_Hook_Main";
import App_Main from "./components/React_Hooks/Custom_Hooks/components/useFetchAPI/App_Main";
import React_Fundamentals from "./components/React_Fundamentals/Books_Challenge/React_Fundamentals";
import RF_App_Container from "./components/React_Fundamentals/RF_App_Container";
import Context_API_Main from "./components/React_Fundamentals/Context_API/Context_API_Main";
import AppContext from "./AppContext";
import Sidebar_App_Main from "./React_Micro_Projects/12_Sidebar_Modal_App/Sidebar_App_Main";
import Strapi_App_Main from "./React_Micro_Projects/13_Strapi_Menubar/Strapi_App_Main";
import UseReducer_Hook_Main from "./components/React_Hooks/UseReducer_Hook/UserReducer_Hook_Main";
import Performance_Main from "./components/React_Fundamentals/Performance/Performance_Main";
import LowerState from "./components/React_Fundamentals/Performance/01_Lower_State/LowerState";
import ReactMemo_Main from "./components/React_Fundamentals/Performance/ReactMemo/ReactMemo_Main";
import UseCallback_Hook_Main from "./components/React_Fundamentals/Performance/03_useCallback_Hook/UseCallback_Hook_Main";
import USeMemo_Hook_main from "./components/React_Fundamentals/Performance/04_useMemo_Hook/USeMemo_Hook_main";
import UseTransition_Hook_main from "./components/React_Fundamentals/Performance/05_useTransition_Hook/UseTransition_Hook_main";
import TandL_Main from "./components/Tools&Libraries/TandL_Main";
import Axios_Main from "./components/Tools&Libraries/axios/Axios_Main";

const App = () => {
	return (
		<BrowserRouter>
			{/* NavBar Comes here */}
			<div
				className="shadow p-1 fixed-top navbar d-flex flex-lg-row flex-column justify-content-center rounded-bottom-3 rounded-top-0"
				style={{
					height: "7vh",
				}}>
				<Navbar />
			</div>

			<main>
				<div style={{ marginTop: "8vh" }}>
					<Routes className="container-fluid d-flex justify-content-center row m-0 w-100">
						<Route path="/" element={<Home />} />

						{/* *********************       React Fundamentals Route        ******************************* */}
						<Route path="/react_fundamentals" element={<RF_App_Container />} />

						{/* React Fundamentals - Context */}
						<Route
							path="/react_fundamentals/context_api"
							element={<Context_API_Main />}
						/>

						{/* React Fundamentals - Perf */}
						<Route
							path="/react_fundamentals/app_performance"
							element={<Performance_Main />}
						/>

						<Route
							path="/react_fundamentals/app_performance/lower_state"
							element={<LowerState />}
						/>

						<Route
							path="/react_fundamentals/app_performance/react_memo"
							element={<ReactMemo_Main />}
						/>

						<Route
							path="/react_fundamentals/app_performance/useCallback_hook"
							element={<UseCallback_Hook_Main />}
						/>

						<Route
							path="/react_fundamentals/app_performance/useMemo_hook"
							element={<USeMemo_Hook_main />}
						/>

						<Route
							path="/react_fundamentals/app_performance/useTransition_hook"
							element={<UseTransition_Hook_main />}
						/>

						{/* <Route path="/react_fundamentals" element={<Context_API_Main />} /> */}

						{/* *********************          React Hooks Route            ******************************* */}
						<Route path="/react_hooks" element={<Main_React_Hooks />} />

						{/* useState Hook */}
						<Route
							path="/react_hooks/useState_hook"
							element={<UseState_Hooks />}
						/>

						{/* useEffect Hook */}
						<Route
							path="/react_hooks/useEffect_hook"
							element={<UseEffect_Hook />}
						/>

						{/* useref Hook */}
						<Route
							path="/react_hooks/useRef_hook"
							element={<UseRef_Hook_Main />}
						/>

						{/* *********************          React Custom Hooks           ******************************* */}

						{/* Custom Hooks Route */}
						<Route
							path="/react_hooks/custom_hook"
							element={<Custom_Hooks_Main />}
						/>

						{/* useToggle Hook */}
						<Route
							path="/react_hooks/custom_hook/useToggle_hook"
							element={<UseToggle_Hook_Main />}
						/>

						{/* useFetch Hook */}
						<Route
							path="/react_hooks/custom_hook/useFetch_hook"
							element={<UseFetch_Hooks_Main />}
						/>

						{/* useFetchAPI Hook */}
						<Route
							path="/react_hooks/custom_hook/useFetchAPI_hook"
							element={<App_Main />}
						/>

						{/* useReducer Hook */}
						<Route
							path="/react_hooks/useReducer_hook"
							element={<UseReducer_Hook_Main />}
						/>

						{/* Hooks Challenges */}
						<Route
							path="/react_hooks/challenges"
							element={<Hooks_Challenges />}
						/>

						{/* *********************          React Micro Apps Route           ******************************* */}
						<Route path="/react_micro_apps" element={<Micro_Apps_Main />} />

						<Route
							path="/react_micro_apps/birthday_reminder"
							element={<Birthday_Reminder />}
						/>

						<Route
							path="/react_micro_apps/tours_app"
							element={<Tours_App_Main />}
						/>

						<Route
							path="/react_micro_apps/reviews_app"
							element={<Reviews_App_Main />}
						/>

						<Route
							path="/react_micro_apps/questions_app"
							element={<Questions_App_Main />}
						/>

						<Route
							path="/react_micro_apps/menu_app"
							element={<Menu_App_Main />}
						/>

						<Route
							path="/react_micro_apps/jobs_section"
							element={<Jobs_App_Main />}
						/>

						<Route
							path="/react_micro_apps/slider_app"
							element={<Slider_App_Main />}
						/>

						<Route
							path="/react_micro_apps/lorem_ipsum_app"
							element={<Lorem_App_Main />}
						/>

						<Route
							path="/react_micro_apps/color_picker_app"
							element={<Color_picker_Main />}
						/>

						<Route
							path="/react_micro_apps/grocery_note_app"
							element={<Grocery_Note_Main />}
						/>

						<Route
							path="/react_micro_apps/navbar_app"
							element={<Navbar_App_Main />}
						/>

						<Route
							path="/react_micro_apps/sidebar_modal_app"
							element={<Sidebar_App_Main />}
						/>

						<Route
							path="/react_micro_apps/strapi_submenu_app"
							element={<Strapi_App_Main />}
						/>

						{/* Exotic Landscapes Route
						<Route
							path="/exotic_landscapes"
							element={<Navigate to="https://exotic-landscapes.netlify.app/" />}
						/> */}

						{/* *********************          React Tools & Libraries            ******************************* */}
						<Route path="/tools&libraries" element={<TandL_Main />} />

						{/* Axios Library */}
						<Route path="/tools&libraries/axios" element={<Axios_Main />} />
					</Routes>
				</div>

				<ToastContainer
					position="bottom-right"
					autoClose={2000}
					hideProgressBar={false}
					newestOnTop={false}
					closeOnClick
					rtl={false}
					draggable
					pauseOnHover
					theme="light"
				/>
			</main>

			<div>
				{/* Footer Comes here */}
				<Footer />
			</div>
		</BrowserRouter>
	);
};

export default App;
