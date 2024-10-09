import "./App.css";
import { useState } from "react";
function App() {
	const [colour, setColour] = useState("#000");

	return (
		<>
			<div
				className=" w-full h-screen text-center flex items-center justify-center "
				style={{ backgroundColor: colour }}
			>
				<h1 className="text-4xl">Colour Changer </h1>
				<div className=" fixed btnSection bg-slate-700 flex bottom-3 p-4 rounded-full justify-evenly inset-x-0">
					<button
						className="p-2 rounded-full bg-gray-700"
						style={{ backgroundColor: "white", color: "black" }}
						onClick={() => {
							setColour("white");
						}}
					>
						White
					</button>
					<button
						className=" p-2 rounded-full bg-gray-700"
						style={{ backgroundColor: "maroon", color: "white" }}
						onClick={() => {
							setColour("maroon");
						}}
					>
						Maroon
					</button>
					<button
						className=" p-2 rounded-full bg-gray-700"
						style={{ backgroundColor: "Purple", color: "white" }}
						onClick={() => {
							setColour("Purple");
						}}
					>
						Purple
					</button>
					<button
						className=" p-2 rounded-full bg-gray-700"
						style={{ backgroundColor: "Green", color: "white" }}
						onClick={() => {
							setColour("Green");
						}}
					>
						Green
					</button>
					<button
						className=" p-2 rounded-full bg-gray-700"
						style={{ backgroundColor: "magenta", color: "white" }}
						onClick={() => {
							setColour("magenta");
						}}
					>
						Magenta
					</button>
				</div>
			</div>
		</>
	);
}

export default App;
