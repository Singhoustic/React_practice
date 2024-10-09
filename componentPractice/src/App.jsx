import UserCard from "../components/userCard";
import "./App.css";

function App() {
	return (
		<>
			<div className="main">
				<UserCard name="Rohit" desc="haha1" />
				<UserCard name="Rohan" desc="haha2" />
				<UserCard name="Jimmy" desc="haha3" />
			</div>
		</>
	);
}

export default App;
