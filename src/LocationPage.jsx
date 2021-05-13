import React from "react";
import ReactDOM from "react-dom";
import "../questionmarks.jpeg";
import HungryFAC from "./HungryFAC";

function LocationPage({ setSubmit, setBg }) {
	return (
		<div className="location_page column_center">
			<h1>Where are the FAC cats today?</h1>
			<form
				className="column_center"
				onSubmit={(event) => {
					event.preventDefault();
					setSubmit(true);
					setBg(document.getElementById("bgSearch").value);
				}}
			>
				<label htmlFor="bgSearch"></label>
				<input
					name="bgSearch"
					type="text"
					id="bgSearch"
					placeholder="Choose background keyword"
				></input>
				<button type="submit">Enter</button>
			</form>
		</div>
	);
}

function changePage() {}

export default LocationPage;
