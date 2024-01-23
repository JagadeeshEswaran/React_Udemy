/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Form_Component from "./Form_Component";
import Item_List from "./Item_List";
import { ToastContainer, toast } from "react-toastify";

const removerLocalStorage = (itemList) => {
	localStorage.setItem("list", JSON.stringify(itemList));
};

export default function App_Container() {
	const [itemList, setItemList] = useState([]);

	useEffect(() => {
		const items = localStorage.getItem("list");

		if (items) {
			setItemList(JSON.parse(items));
		} else {
			setItemList([]);
		}
	}, []);

	const toggleRemove = (id) => {
		let newList = itemList.filter((item) => id !== item._id);

		setItemList(newList);
		removerLocalStorage(newList);
		toast.success("Item removed Successfully!!");
	};

	const togglePurchased = (id) => {
		const newItemList = itemList.map((item) => {
			if (item._id === id) {
				let currItem = { ...item, purchased: !item.purchased };

				if (!item.purchased) {
					toast.success("Item Marked..!!");
				} else {
					toast.success("Item Unmarked..!!");
				}

				return currItem;
			}

			return item;
		});

		setItemList(newItemList);

		localStorage.setItem("list", JSON.stringify(newItemList));
	};

	// console.log(itemList[0].purchased);
	console.log(itemList);

	return (
		<section className="w-75 txtClr px-3 py-4 d-flex flex-column justify-content-center align-items-center">
			<Form_Component setter={setItemList} list={itemList} />
			<Item_List
				list={itemList}
				toggleRemove={toggleRemove}
				togglePurchased={togglePurchased}
			/>
		</section>
	);
}
