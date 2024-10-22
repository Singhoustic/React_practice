import "./App.css";
const names = ["rohit", "rohan", "tommy", "jimmy", "mark", "anthony", "adele"];

function App() {
	const chooseName = Math.floor(Math.random() * names.length);

	return (
		<>
			<div className="main">
				<h2>{names[chooseName]}</h2>
				<h1>Home Page</h1>
			</div>
		</>
	);
}

export default App;
