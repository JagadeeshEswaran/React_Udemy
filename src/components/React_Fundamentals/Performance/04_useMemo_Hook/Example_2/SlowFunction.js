export const slowFunction = () => {
	let value = 0;

	for (let i = 0; i < 100000; i++) {
		value = i;
		// console.log(value);
	}

	return value;
};
