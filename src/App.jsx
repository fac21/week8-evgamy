import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import LocationPage from "./LocationPage";
import "../questionmarks.jpeg";
import HungryFAC from "./HungryFAC.jsx";

function App() {
	const [submit, setSubmit] = useState(false);
	const [bg, setBg] = useState("antarctica");
	return (
		<>
			{!submit ? (
				<LocationPage setSubmit={setSubmit} setBg={setBg} />
			) : (
				<HungryFAC bg={bg} />
			)}
		</>
	);
}

export default App;
