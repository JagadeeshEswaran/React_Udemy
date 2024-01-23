/* eslint-disable no-unused-vars */
import {
	CLEAR_CART,
	REMOVE,
	INCREASE,
	DECREASE,
	LOADING,
	DISPLAY_ITEMS,
} from "./Actions";

export const CartReducer = (state, action) => {
	// console.log("action type :", action);
	// console.log(state);

	if (action.type === CLEAR_CART) {
		return { ...state, cartData: new Map() };
	}

	if (action.type === REMOVE) {
		const newCartMap = new Map(state.cartData);
		// console.log(newCartMap.delete(action.id));

		newCartMap.delete(action.itemId);
		return { ...state, cartData: newCartMap };
	}

	if (action.type === "INCREASE") {
		// console.log("Increase Item ID :", action.itemId);
		const newCartMap = new Map(state.cartData);
		const itemToAddQty = newCartMap.get(action.itemId);

		itemToAddQty.amount += 1;

		// console.log(newCartMap);

		return { ...state, cartData: newCartMap };
	}

	if (action.type === "DECREASE") {
		// console.log("Decrease Item ID :", action.itemId);
		const newCartMap = new Map(state.cartData);
		const itemToReduceQty = newCartMap.get(action.itemId);

		itemToReduceQty.amount -= 1;

		if (itemToReduceQty.amount < 1) {
			newCartMap.delete(action.itemId);
			// console.log(newCartMap);

			return { ...state, cartData: newCartMap };
		}

		return { ...state, cartData: newCartMap };
	}

	if (action.type === LOADING) {
		return { ...state, isLoading: true };
	}

	if (action.type === DISPLAY_ITEMS) {
		let newCartData = new Map(
			action.payload.cartData.map((item) => [item.id, item])
		);

		return {
			...state,
			isLoading: false,
			cartData: newCartData,
		};
	}

	throw new Error(`No matching Action for ${action.type}`);
};
