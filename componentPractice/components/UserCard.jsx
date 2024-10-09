import React from "react";

const UserCard = (props) => {
	return (
		<div className="cardBody">
			<h1>{props.name}</h1>
			<p>{props.desc}</p>
		</div>
	);
};

export default UserCard;
