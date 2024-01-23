let data = [
	{ id: 1, name: "Jaga" },
	{ id: 2, name: "Naga" },
	{ id: 3, name: "Raja" },
	{ id: 4, name: "Praveen" },
	{ id: 5, name: "Rahul" },
];

export const reducer = (state, action) => {
	if (action.type === "CLEAR_LIST") {
		return { ...state, people: [] };
	}

	if (action.type === "RESET_LIST") {
		return { ...state, people: data };
	}

	if (action.type === "REMOVE_PERSON") {
		return {
			...state,
			people: state.people.filter(
				(person) => person.id !== parseInt(action.personId)
			),
		};
	}
	// If Receiving Invalid action from Component dispatch, thow an Error
	throw new Error(`No matching action for ${action.type}`);
};
