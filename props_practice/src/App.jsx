import { useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Button from "./components/Button";
import NavModel from "./components/NavModel";

function App() {
	const [count, setCount] = useState(0);

	function incr() {
		console.log("inc");
		setCount(count + 1);
	}
	return (
		<>
			{/* <Nav name="rohit">
				<h1>Lorem ipsum dolor sit amet.</h1>
				<h3>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi,
					reprehenderit!
				</h3>
			</Nav> */}

			{/* This explicitely declared child will overwrite the default child */}
			{/* <Nav children="Namastey rohit">
				<p>I'm a child</p>{" "}
			</Nav> 
			*/}

			<div className="main">
				<Button handleClick={incr} text="Click me">
					<h1>{count}</h1>
				</Button>
			</div>

			<NavModel name="rohit" />
			<NavModel age="24" />
		</>
	);
}

export default App;
