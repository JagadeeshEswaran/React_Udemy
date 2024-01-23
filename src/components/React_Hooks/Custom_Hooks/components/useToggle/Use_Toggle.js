import { useState } from "react";

export default function useToggle({ defaultValue }) {
	const [show, setShow] = useState(defaultValue);

	const hideItem = () => {
		setShow(!show);
	};

	return { show, hideItem };
}
