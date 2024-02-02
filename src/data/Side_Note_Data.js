export const useRef_Notes = [
	{
		id: 1,
		pointers: [
			"with useRef,",
			"=> Reduce re-renders as in useState triggers re-render all the time the state changes",
			"=> We could kind'a Optimize Apps in the means of Re-render",
			"====================",
			"Use Cases (Most Common & popular) :",
			"1. Using ref attribute",
			"=> Referencing the DOM Elements (As like JS)",
			"We could use .focus( ) on ref variable to focus at a desired DOM Node (Ex. Input Fields) on any point of time.",
			"-----------------------------------",
			"2. Storing / capturing Previous state values",
			"=> We can persist variables across renders, without re-render",
			"-----------------------------------",
			"3. clearInterval",
			"=> We can use refContainer to hold any Generic mutable values to be stored and mutated.",
		],
	},
];

export const context_api_Notes = [
	{
		id: 2,
		pointers: [
			"A. Global State Management : ",
			"\n To avoid prop-drilling & We can facilitate Global State Management. We can pass data across components within the App-Tree",
			"B. 'createContext' Functions :",
			"\n With this we can create new Context with meaningful name. And it takes Optional default value. It returns an Object with 'Provider' & 'Consumer' components (Or We can use useContext Hook).",
			"C. *.Provider",
			"We use Provider component to wrap the Component Tree, where we want to make the context or data available. We can use 'value' prop to represent the current context value or data.",
			"D. *.Consumer or useContext( ) Hook",
			"E. But we can Avoid using it for Small Apps",
			"Context API is Powerful tool, it may be an Overkill for small to moderately sized Apps",
		],
	},
];

export const useReducer_hook = [
	{
		id: 3,
		pointers: [
			"A. Global State Management : ",
			"\n To avoid prop-drilling & We can facilitate Global State Management. We can pass data across components within the App-Tree",
			"B. 'createContext' Functions :",
			"\n With this we can create new Context with meaningful name. And it takes Optional default value. It returns an Object with 'Provider' & 'Consumer' components (Or We can use useContext Hook).",
			"C. *.Provider",
			"We use Provider component to wrap the Component Tree, where we want to make the context or data available. We can use 'value' prop to represent the current context value or data.",
			"D. *.Consumer or useContext( ) Hook",
			"E. But we can Avoid using it for Small Apps",
			"Context API is Powerful tool, it may be an Overkill for small to moderately sized Apps",
		],
	},
];

export const React_Memo_note = [
	{
		id: 1,
		pointers: [
			"In Example 2, Double click on a name or remove button to Remove it.",
			"But, notice we're re-rendering the whole component even if We've memoized the List Component",
			"Why we're re-rendering memoized component, while we're not changing its prop or state",
			"Notice the removePerson function, Whenever a component re-renders functions wihtin the function will get create from scratch",
			"This causes the re-render, since everytime removePerson prop will be newer",
		],
	},
];

export const UseTransition_Hook_notes = [
	{
		id: 1,
		pointers: [
			"useTransition just allows us to mark certain functionality as less urgent",
			"Which in turn prevents the whole UI blocking thing.",
			"In the First tab, you can notice user Input was not rendering properly since onChange event triggers some function in the background",
			"But, In second tab, you can notice user can type smoothly since it's regardless of the function which runs in the background.",
			"Ex.: API Call, Huge Calculation, etc.",
		],
	},
];

export const Axios_Notes = [
	{
		id: 1,
		title: "Installation",
		pointers: [
			"Axios Docs -- (https://axios-http.com/docs/intro)",
			"command : npm install axios",
			"For VenillaJS : <script src='https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js'></script>",
			"To use axios in your project, use -> import axios from 'axios'",
			"Import methods : => axios.get(), => axios.post(), => axios.patch/put(), => axios.delete()",
			"By default, it will be Get",
		],
	},
	{
		id: 2,
		title: "Functionalities",
		pointers: [
			"Generally returns a promise",
			"Needed data will be located in response.data",
			"Error will be in error.message",
		],
	},
];

export const React_Query_notes = [
	{
		id: 1,
		title: "About React Query",
		pointers: [
			"React Query is a State Management library in the React ecosystem that provides a set of tools for managing, caching, and synchronizing state for remote data fetching.",
			"It Simplifies fetching, caching, and updating data in React Apps",
			" It is designed to simplify the process of working with remote data",
			"Its benefits includes automatic background refetching, caching and stale data management, error handling, and easy pagination and Infinte Scrolling",
			"Compared to setting up requests with useEffect, React Query provides a more declarative and centraliszed approach.",
			"It also reduces boilerplate codes and improve performance by minimizing the unnecessary re-renders and network requests",
		],
	},
	{
		id: 2,
		title: "Key features and Concepts",
		pointers: [
			"Query Functionality : useQuery Hook",
			"Mutation Functionality : useMutation Hook",
			"Automatic Caching",
			"Invalidation and Refetching with background polling, manual triggers, or when the data becomes stale.",
			"Optimistic Updates",
			"Integration with React Components",
			"Comes with DevTools",
			"Server-Side Rendering (SSR) Support",
			"Reactivity",
			"Version : V5",
			"Read More : https://www.npmjs.com/package/react-query",
		],
	},
	{
		id: 3,
		title: "Setting up React Query",
		pointers: [
			"Run => npm i @tanstack/react-query",
			"After installing import the package @ main.jsx or index.jsx => import  { queryClient, QueryClientProvider } from '@tanstack/react-query'",
			"Create QueryClient instance => const queryClient = new QueryClient( )",
			"Then wrap the entire <App /> with <QueryClientProvider> wrapper.",
			"Pass the queryClient as prop => client = { queryClient }",
		],
	},
];
