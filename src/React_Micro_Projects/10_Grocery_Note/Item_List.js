/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import Single_Item from "./Single_Item";

export default function Item_List({ list, toggleRemove, togglePurchased }) {
	return (
		<div className="card w-50 my-4 px-3 py-4 txtClr d-flex flex-column justify-content-center align-items-center">
			{list.map((item) => (
				<Single_Item
					key={item._id}
					item={item}
					toggleRemove={toggleRemove}
					togglePurchased={togglePurchased}
				/>

				// console.log(item.item_name);
				// console.log(item._id);
			))}
		</div>
	);
}
