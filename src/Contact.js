import React from "react";
import { useOutletContext, useParams } from "react-router-dom";
const Contact = () => {
	const { id } = useParams();
	const obj = useOutletContext();
	return (
		<>
			<h1>{id > 1 ? "Contact hello" : "contact 290142"}</h1>
			<h2>{obj.number.length !== 6 ? "invalid number" : obj.number}</h2>
		</>
	);
};

export default Contact;
