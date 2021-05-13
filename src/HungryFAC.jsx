import React from "react";
import ReactDOM from "react-dom";
import foods from "./foods";

function HungryFAC(props) {
	const [foodurl, setFoodurl] = React.useState("");
	const [oliHealth, setOliHealth] = React.useState(100);
	const [yvonneHealth, setYvonneHealth] = React.useState(100);
	const [oliverHealth, setOliverHealth] = React.useState(100);
	const [danHealth, setDanHealth] = React.useState(100);
	const [gregorHealth, setGregorHealth] = React.useState(100);

	setTimeout(() => {
		setOliHealth(oliHealth - 10);
		setYvonneHealth(yvonneHealth - 8);
		setOliverHealth(oliverHealth - 5);
		setDanHealth(danHealth - 20);
		setGregorHealth(gregorHealth - 15);
		console.log(oliHealth, oliverHealth, yvonneHealth, danHealth, gregorHealth);
	}, 2500);

	function handleSelect(e) {
		let selectedFood = [];
		foods.forEach((food) => {
			if (food.id === e.target.value) selectedFood.push(food.img_url);
		});
		setFoodurl(selectedFood[0]);
	}

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
			<div className="column_center ">
				<img src="../images/PizzaCheeseTransparent.png" />

				<form
					className="column_center "
					onSubmit={(event) => event.preventDefault()}
				>
					<label htmlFor="chooseFood"></label>
					<input
						list="foods"
						name="chooseFood"
						id="chooseFood"
						onSelect={handleSelect}
					/>
					<datalist id="foods">
						<option value="Pizza" />
						<option value="Burger" />
						<option value="Avocado Toast" />
						<option value="Cake" />
						<option value="Bagel" />
					</datalist>
					{/* <button type="submit">Enter</button> */}
					<img src={foodurl} />
				</form>
				<div className="members flexwrap">
					<div className="oli">
						<img
							className="memberImage"
							src="../images/PizzaCheeseTransparent.png"
						/>
					</div>
					<div className="dan">
						<img
							className="memberImage"
							src="../images/PizzaCheeseTransparent.png"
						/>
					</div>
					<div className="yvonne">
						<img
							className="memberImage"
							src="../images/PizzaCheeseTransparent.png"
						/>
					</div>
					<div className="gregor">
						<img
							className="memberImage"
							src="../images/PizzaCheeseTransparent.png"
						/>
					</div>
					<div className="oliver">
						<img
							className="memberImage"
							src="../images/PizzaCheeseTransparent.png"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HungryFAC;
