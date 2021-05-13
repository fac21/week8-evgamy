import React from "react";
import ReactDOM from "react-dom";

function HungryFAC(props) {
	React.useEffect(() => {
		fetch(
			`https://api.unsplash.com/photos/random?query=${props.bg}&client_id=${
				import.meta.env.VITE_APP_API_KEY
			}&orientation=landscape`
		)
			.then((response) => {
				if (!response.ok) throw new Error(response.status);
				return response.json();
			})
			.then((data) => {
				document.getElementsByClassName(
					"hungryfac_page"
				)[0].style.backgroundImage = `url(${data.urls.regular})`;
			})
			.catch((error) => console.log(error));
	}, []);

	return (
		<div className="hungryfac_page">
			{/* <img src="logo"> */}
			<form
				className="column_center"
				onSubmit={(event) => event.preventDefault()}
			>
				<label htmlFor="chooseFood"></label>
				<input
					name="chooseFood"
					type="text"
					id="chooseFood"
					placeholder="Choose Food"
				></input>
				<button type="submit"></button>
				{/* <img src="food image"> */}
			</form>
			<div className="members">
				<div className="oli"></div>
				<div className="dan"></div>
				<div className="yvonne"></div>
				<div className="gregor"></div>
				<div className="oliver"></div>
			</div>
		</div>
	);
}

export default HungryFAC;
