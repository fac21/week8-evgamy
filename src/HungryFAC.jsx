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
	const [count, setCount] = React.useState(0);

	setTimeout(() => {
		setOliHealth(oliHealth - 3);
		setYvonneHealth(yvonneHealth - 2);
		setOliverHealth(oliverHealth - 0.5);
		setDanHealth(danHealth - 5);
		setGregorHealth(gregorHealth - 1);
	}, 500);

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

	const ProgressBar = (props) => {
		return (
			<div className="progress-bar">
				<Filler percentage={props.percentage} />
			</div>
		);
	};

	const Filler = (props) => {
		return <div className="filler" style={{ width: `${props.percentage}%` }} />;
	};

	return (
		<div className="hungryfac_page">
			<div className="column_center ">
				<img src="/PizzaCheeseTransparent.png" />

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
						<img className="memberImage" src="/PizzaCheeseTransparent.png" />
						<div>
							<ProgressBar percentage={oliHealth} />
						</div>
					</div>
					<div className="dan">
						<img className="memberImage" src="/PizzaCheeseTransparent.png" />
						<div>
							<ProgressBar percentage={danHealth} />
						</div>
					</div>
					<div className="yvonne">
						<img className="memberImage" src="/PizzaCheeseTransparent.png" />
						<div>
							<ProgressBar percentage={yvonneHealth} />
						</div>
					</div>
					<div className="gregor">
						<img className="memberImage" src="/PizzaCheeseTransparent.png" />
						<div>
							<ProgressBar percentage={gregorHealth} />
						</div>
					</div>
					<div className="oliver">
						<img className="memberImage" src="/PizzaCheeseTransparent.png" />
						<div>
							<ProgressBar percentage={oliverHealth} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HungryFAC;
