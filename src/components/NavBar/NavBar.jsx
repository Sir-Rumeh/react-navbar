import React, { useState } from "react";
import Button from "../Button/Button";
import "./NavBar.css";

const NavBar = () => {
	const [toggle, setToggle] = useState(false);

	const navLinks = [
		{ title: "Home", cName: "nav-link", url: "#" },
		{ title: "Services", cName: "nav-link", url: "#" },
		{ title: "Products", cName: "nav-link", url: "#" },
		{ title: "Contact Us", cName: "nav-link", url: "#" },
		{ title: "Sign Up", cName: "nav-link-mobile", url: "#" },
	];

	const onToggle = () => setToggle(!toggle);

	return (
		<nav className="navbar">
			<h1 className="brand-logo">Navbar Redness</h1>
			<div onClick={onToggle} className="menu-icon">
				{toggle ? <div>&#x78;</div> : <div>&#x2630;</div>}
			</div>
			<ul className={`nav-menu ${toggle ? "active" : ""}`}>
				{navLinks.map((item) => (
					<li key={item.title}>
						<a className={item.cName} href={item.url}>
							{/* {item.title} */}
						</a>
					</li>
				))}
			</ul>
			<Button buttonStyle="primary">Sign Up</Button>
		</nav>
	);
};

export default NavBar;
