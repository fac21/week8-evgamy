import React from "react";
import ReactDOM from "react-dom";

function LocationPage(props) {
	return (
		<div>
			<h1>Where is FAC today?</h1>
			<form>
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

export default LocationPage;
