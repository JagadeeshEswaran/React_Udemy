/* eslint-disable no-unused-vars */
export const fetchTotals = (data) => {
	// console.log(data);

	let totalItemsInCart = 0;
	let totalCost = 0;

	// for (let item of data.values()) {
	for (let { amount, price } of data.values()) {
		totalItemsInCart += amount;
		totalCost += amount * price;
	}

	return { totalItemsInCart, totalCost };
};
