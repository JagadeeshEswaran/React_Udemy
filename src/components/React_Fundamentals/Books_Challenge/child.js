import PropTypes from "prop-types";

// const Book = ({ bookData, parentMethod }) => {
export const Book = ({ bookData }) => {
	const { img, title, author, id } = bookData;
	// console.log(bookData);
	// console.log(bookData.img);

	return (
		// <article className="book" onClick={() => parentMethod(id)}>
		<article className="card book booklist d-flex justify-content-center">
			{/* <Image imgUrl={img} title={title} parentMethod={parentMethod} />{" "} */}
			<Image imgUrl={img} title={title} />
			<Heading title={title} />
			<Description author={author} />
			<div className="itemNumber">#{id}</div>
		</article>
	);
};

Book.propTypes = {
	bookData: PropTypes.object.isRequired,
	// parentMethod: PropTypes.func.isRequired,
};

//Image Component
// const Image = ({ imgUrl, title, parentMethod }) => {
const Image = ({ imgUrl, title }) => {
	const displayTitle = () => {
		console.log(title);
	};

	return (
		<img
			src={imgUrl}
			alt=""
			height={450}
			width={350}
			// onMouseMove={parentMethod}
			onClick={displayTitle}
		/>
	);
};

//Props Validation
Image.propTypes = {
	imgUrl: PropTypes.string,
	title: PropTypes.string,
	// parentMethod: PropTypes.func.isRequired,
};

//Heading Component
const Heading = ({ title }) => {
	//To inline styling & clear code we could define the styling object here and pass it inline
	const titleStyles = {
		color: "#323232",
	};

	return <h4 style={titleStyles}>{title}</h4>;
};

Heading.propTypes = {
	title: PropTypes.string,
};

//Author Component
const Description = ({ author }) => {
	//To inline styling & clear code we could define the styling object here and pass it inline
	const authorStyles = {
		color: "#006400",
		fontSize: "1rem",
		marginTop: "0.5rem",
		letterSpacing: "2px",
	};

	return (
		<p style={authorStyles}>
			{/* {author.toUpperCase()} */}
			{author}
		</p>
	);
};

Description.propTypes = {
	author: PropTypes.string,
};

// //Events in React
// const EventsExample = () => {
// 	const handleInputChange = (e) => {
// 		console.log("Book ID : " + e.target.value);
// 	};

// 	const handleFormSubmission = (e) => {
// 		e.preventDefault();
// 		// console.log(bookList);
// 	};

// 	return (
// 		<section style={{ fontSize: "1rem" }} className="searchBar">
// 			<form action="#" onSubmit={handleFormSubmission}>
// 				<div className="formElements">
// 					<label htmlFor="inpur">Filter by ID : </label>
// 					<input type="text" onChange={handleInputChange} />

// 					<button type="submit">Get the Book</button>
// 				</div>
// 			</form>
// 		</section>
// 	);
// };

// export { Book, EventsExample };
