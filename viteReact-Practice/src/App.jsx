import { useState } from "react";
import "./style.css";

function App() {
	const user = "Counter App";
	const [count, setCount] = useState(0);
	function incCount() {
		setCount(count + 1);
		if (count >= 10) {
			setCount(10);
			console.warn("Limit reached");
		}
	}
	function decCount() {
		setCount(count - 1);
		if (count === 0) {
			setCount(0);
			console.warn("Limit reached");
		}
	}
	return (
		<>
			<div className="main">
				<div className="child">
					<h1>Let's get started {user}</h1>
					<h1>Count :{count}</h1>
					<button onClick={incCount}>Increase Count</button>
					<button onClick={decCount}>Decrease Count</button>
				</div>
			</div>
		</>
	);
}

export default App;
