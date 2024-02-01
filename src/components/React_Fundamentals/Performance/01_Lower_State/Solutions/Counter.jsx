import React, { useState } from "react";

const Counter = () => {
	const [count, setCount] = useState(0);

	return (
		<>
			<article className="d-flex justify-content-center align-items-center">
				<button onClick={() => setCount(count + 1)} className="btn btn-primary">
					Count {count}
				</button>
			</article>
		</>
	);
};

export default Counter;
