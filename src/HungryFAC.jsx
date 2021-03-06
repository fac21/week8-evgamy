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
	const [foodHealth, setFoodHealth] = React.useState(0);
	let losingHealth;
	let secondCount;

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

	function feedOli() {
		return setOliHealth(oliHealth + foodHealth);
	}

	function feedYvonne() {
		return setYvonneHealth(yvonneHealth + foodHealth);
	}

	function feedDan() {
		return setDanHealth(danHealth + foodHealth);
	}

	function feedOliver() {
		return setOliverHealth(oliverHealth + foodHealth);
	}

	function feedGregor() {
		return setGregorHealth(gregorHealth + foodHealth);
	}

	function stopLosing(health, loss) {
		return health - loss <= 0 ? 0 : health - loss;
	}

	function handleSelect(e) {
		let selectedFood = [];
		foods.forEach((food) => {
			if (food.id === e.target.value)
				selectedFood.push(food.img_url, food.hunger);
		});
		setFoodurl(selectedFood[0]);
		setFoodHealth(selectedFood[1]);
	}

	losingHealth = setTimeout(() => {
		setOliHealth(stopLosing(oliHealth, 3));
		setYvonneHealth(stopLosing(yvonneHealth, 2));
		setOliverHealth(stopLosing(oliverHealth, 0.2));
		setDanHealth(stopLosing(danHealth, 5));
		setGregorHealth(stopLosing(gregorHealth, 1));
	}, 1000);

	secondCount = setTimeout(() => {
		setCount(count + 1);
	}, 1000);

	if (
		oliHealth == 0 ||
		yvonneHealth == 0 ||
		danHealth == 0 ||
		oliverHealth == 0 ||
		gregorHealth == 0
	) {
		clearTimeout(losingHealth);
		clearTimeout(secondCount);
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
				<img src="/images/logo.png" className="fortyvh" />

				<form
					className="column_center "
					onSubmit={(event) => event.preventDefault()}
				>
					<label htmlFor="chooseFood">Choose your snack!</label>
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
					<img src={foodurl} className="twentyvh" />
				</form>
				<div className="members flexwrap">
					<div className="oli">
						<img
							className="memberImage"
							src="/images/oliFace.png"
							onClick={feedOli}
						/>
						<div>
							<ProgressBar percentage={oliHealth} />
						</div>
					</div>
					<div className="dan">
						<img
							className="memberImage"
							src="/images/danFace.png"
							onClick={feedDan}
						/>
						<div>
							<ProgressBar percentage={danHealth} />
						</div>
					</div>
					<div className="yvonne">
						<img
							className="memberImage"
							src="/images/yvonne.png"
							onClick={feedYvonne}
						/>
						<div>
							<ProgressBar percentage={yvonneHealth} />
						</div>
					</div>
					<div className="gregor">
						<img
							className="memberImage"
							src="/images/gregor.png"
							onClick={feedGregor}
						/>
						<div>
							<ProgressBar percentage={gregorHealth} />
						</div>
					</div>
					<div className="oliver">
						<img
							className="memberImage"
							src="/images/oliverFace.png"
							onClick={feedOliver}
						/>
						<div>
							<ProgressBar percentage={oliverHealth} />
						</div>
					</div>
				</div>
				<p>You've kept FAC alive for {count} seconds!</p>
			</div>
		</div>
	);
}

export default HungryFAC;
