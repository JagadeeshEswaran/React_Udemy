import {
	FaFacebook,
	FaSquareXTwitter,
	FaSquareInstagram,
} from "react-icons/fa6";

export const Navbar_Data = [
	{
		id: 1,
		name: "Front-End",
		techs: [
			"VanillaJS",
			"ReactJS",
			"NextJS",
			// "Redux",
			// "Redux-Thunk",
			// "Redux-Saga",
			// "React-Bootstrap",
		],
	},
	{
		id: 2,
		name: "Back-End",
		techs: ["NodeJS", "ExpressJS", "MongoDB"],
	},
	{
		id: 3,
		name: "React Native",
		techs: ["React Native"],
	},
	{
		id: 4,
		name: "Design Techs",
		techs: [
			"CSS",
			"SASS",
			"SCSS",
			"TailwindCSS",
			"Material UI",
			"BootstrapCSS",
		],
	},
];

export const social = [
	{
		id: 1,
		url: "www.google.com",
		s_name: "facebook",
		icon: <FaFacebook />,
	},
	{
		id: 2,
		url: "www.google.com",
		s_name: "twitter",
		icon: <FaSquareXTwitter />,
	},
	{
		id: 3,
		url: "www.google.com",
		s_name: "Instagram",
		icon: <FaSquareInstagram />,
	},
];

export const Side_bar_Data = [
	{
		id: 1,
		name: "React Fundamentals",
		link: "/react_fundamentals",
		section: "React_Fundamentals",
		sub_secition: [
			{
				id: "1A",
				name: "Context API",
				link: "/react-fundamentals/context_api",
			},
			{
				id: 1,
				name: "React Components",
				link: "/react-fundamentals/Components",
			},
			{
				id: 2,
				name: "Components Props",
				link: "/react-fundamentals/Components-props",
			},
			{
				id: 3,
				name: "JSX - Usage & Rules",
				link: "/react-fundamentals/JSX",
			},
			{
				id: 4,
				name: "React ES6 Modules",
				link: "/react-fundamentals/ES6-Modules",
			},
			{
				id: 5,
				name: "Challenges",
				link: "/react-fundamentals/Chanllenges",
			},
		],
	},
	{
		id: 2,
		name: "React Hooks",
		link: "/react_hooks",
		sub_section: [
			{
				id: 1,
				name: "useState Hook",
				link: "/react_hooks/useState_Hook",
			},
			{
				id: 2,
				name: "useEffect Hook",
				link: "/react_hooks/useEffect_Hook",
			},
		],
	},
	{
		id: 3,
		name: "React Micro Apps",
		link: "/react_micro_apps",
		section: "React_Micro_Apps",
	},
	{
		id: 4,
		name: " ",
	},
	{
		id: 5,
		name: " ",
	},
	{
		id: 6,
		name: " ",
	},
	{
		id: 7,
		name: " ",
	},
	{
		id: 8,
		name: " ",
	},
	{
		id: 9,
		name: " ",
	},
	{
		id: 10,
		name: "Exotic Landscapes",
		link: "/Exotic-Landscapes",
		section: "Exotic_Landscapes",
	},
];

export const RF_Data = [
	{
		id: 1,
		name: "Book Challenge",
		link: "/react_fundamentals/book_challenge",
	},
	{
		id: 2,
		name: "Context API",
		link: "/react_fundamentals/context_api",
	},
];

export const React_Hooks = [
	{
		id: 1,
		name: "useState Hook",
		link: "/react_hooks/useState_hook",
		tasks: [
			{
				id: 1,
				name: "Name List Task",
				link: "/useState_hooks/Name_List",
			},
			{
				id: 2,
				name: "Show Hobby Task",
				link: "/useState_hooks/Show_Hobby",
			},
			{
				id: 3,
				name: "useState Gotcha",
				link: "/useState_hooks/Gotcha",
			},
		],
	},
	{
		id: 2,
		name: "useEffect Hook",
		section: "useEffect_hook",
		link: "/react_hooks/useEffect_hook",
		tasks: [
			{
				id: 1,
				name: "Fetch Users from an API",
				link: "react_hooks/useEffect_hook/fetch_users",
			},
			{
				id: 2,
				name: "Show Hobby Task",
				link: "react_hooks/useEffect_hook/",
			},
			{
				id: 3,
				name: "useState Gotcha",
				link: "react_hooks/useEffect_hook/",
			},
		],
	},
	{
		id: 4,
		name: "useRef Hook",
		link: "/react_hooks/useRef_hook",
		tasks: [
			// {
			// 	id: 1,
			// 	name: "User Challenge",
			// 	link: "react_hooks/challenges/users_challenge",
			// },
		],
	},
	{
		id: 6,
		name: "Context API",
		link: "/react_fundamentals/context_api",
	},
	{
		id: 5,
		name: "Custom Hook",
		link: "/react_hooks/custom_hook",
		hooks_list: [
			{
				id: 1,
				name: "useToggle Hook",
				link: "react_hooks/custom_hook/useToggle_hook",
			},
		],
	},
	{
		id: 7,
		name: "useReducer Hook",
		link: "/react_hooks/useReducer_hook",
		tasks: [
			// {
			// 	id: 1,
			// 	name: "User Challenge",
			// 	link: "react_hooks/challenges/users_challenge",
			// },
		],
	},
	{
		id: 3,
		name: "Challenges",
		link: "/react_hooks/challenges",
		tasks: [
			{
				id: 1,
				name: "User Challenge",
				link: "react_hooks/challenges/users_challenge",
			},
		],
	},
];

export const Micro_App_Data = [
	{
		id: 1,
		name: "Birthday Reminder",
		link: "/react_micro_apps/birthday_reminder",
	},
	{
		id: 2,
		name: "Tours App",
		link: "/react_micro_apps/tours_app",
	},
	{
		id: 3,
		name: "Reviews App",
		link: "/react_micro_apps/reviews_app",
	},
	{
		id: 4,
		name: "Questions App",
		link: "/react_micro_apps/questions_app",
	},
	{
		id: 5,
		name: "Hotel Menu App",
		link: "/react_micro_apps/menu_app",
	},
	{
		id: 6,
		name: "Tabs App",
		link: "/react_micro_apps/jobs_section",
	},
	{
		id: 7,
		name: "Slider App",
		link: "/react_micro_apps/slider_app",
	},
	{
		id: 8,
		name: "Lorem Ipsum",
		link: "/react_micro_apps/lorem_ipsum_app",
	},
	{
		id: 9,
		name: "Color Picker",
		link: "/react_micro_apps/color_picker_app",
	},
	{
		id: 10,
		name: "Grocery Note",
		link: "/react_micro_apps/grocery_note_app",
	},
	{
		id: 11,
		name: "Navbar App",
		link: "/react_micro_apps/navbar_app",
	},
	{
		id: 12,
		name: "Sidebar Modal App",
		link: "/react_micro_apps/sidebar_modal_app",
	},
	{
		id: 13,
		name: "Strapi Submenu App",
		link: "/react_micro_apps/strapi_submenu_app",
	},
];
