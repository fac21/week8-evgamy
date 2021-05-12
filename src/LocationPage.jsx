import React from "react";
import ReactDOM from "react-dom";
import "../questionmarks.jpeg";

function LocationPage() {
	return (
		<div class="location_page column_center">
			<h1>Where is FAC today?</h1>
			<form class="column_center">
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
