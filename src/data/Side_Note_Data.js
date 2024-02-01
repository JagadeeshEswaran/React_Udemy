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
