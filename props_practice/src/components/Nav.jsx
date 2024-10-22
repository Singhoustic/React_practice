import React from "react";

const Nav = ({ children }) => {
	return (
		<>
			{/* <h1>{props.name}</h1> */}
			{children} {/* This is called destructuring the props*/}
		</>
	);
};

export default Nav;
