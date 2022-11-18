import React from "react";
import { Link, Outlet } from "react-router-dom";
const ContactMenu = () => {
	return (
		<div>
			<Link to="/contact/1">Contact 1</Link>
			<br />
			<Link to="/contact/2">Contact 2</Link>
			<br />
			{/*  Replace could be helpful for login page */}
			<Link
				to="/contact/new"
				replace>
				new contact
			</Link>
			<br />
			After render this list with the help of outlet it renders the page of the
			current directory It also take a param known as context to share details
			all around [this could be retrived using useOutletContext]
			<Outlet context={{ number: "123054" }} />
		</div>
	);
};

export default ContactMenu;
