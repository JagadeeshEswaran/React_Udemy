import React from "react";
// import PopularBooks from "./Parent";
import bookList from "../../../data/BestBooks/booklist.json";
import Side_bar from "../../App_Components/Page_Components/Side_bar";
import { Side_bar_Data } from "../../../data/BestBooks/App_component_data";
import Side_notes from "../../App_Components/Page_Components/Side_notes";
import { Book } from "./child";

const React_Fundamentals = () => {
	return (
		<>
			<div
				className="container-fluid d-flex justify-content-center row m-0 w-100"
				style={{ height: "88vh", marginTop: "8vh" }}>
				{/* Side Bar Column of 2 portions */}
				<Side_bar data={Side_bar_Data[0].sub_secition} />

				<div className="col-8 container-fluid d-flex justify-content-center flex-column">
					<div className="card col-1 d-flex flex-column align-items-center w-100 mb-2">
						<h5 className="my-2 txtClr">Best Seller in Books</h5>
					</div>

					{/* <PopularBooks /> */}
					<div className="booklist">
						{bookList.map((book) => (
							<Book key={book.id} bookData={book} />
						))}
					</div>
				</div>

				<Side_notes />
			</div>
		</>
	);
};

export default React_Fundamentals;
