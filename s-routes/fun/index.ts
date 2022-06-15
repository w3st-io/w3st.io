// [REQUIRE] //
const cors = require('cors')
const express = require('express')
const path = require('path')


// [IMPORT] Personal //
import Segment from '../../s-middleware/Segment'


// [EXPRESS + USE] //
const router = express.Router().use(cors())


const html = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>MISSION: TO THE MOON_</title>
	<link
		rel="stylesheet"
		href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css"
		integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z"
		crossorigin="anonymous"
	>
	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link
		href="https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap"
		rel="stylesheet"
	>
</head>

<style>
	* {
		letter-spacing: 2px;
		font-family: 'Ubuntu Condensed', sans-serif;
		font-family: 'Orbitron', sans-serif;
	}

	.bg-dark { background-color: black !important; }

	.btn-outline-danger {
		border-width: 3px;
	}

	.space-text {
		color: rgba(255, 255, 255, 0);
		-webkit-text-stroke-width: 3px;
		-webkit-text-stroke-color: rgb(255, 255, 255);
	}

	.space-text-h {
		color: rgba(0, 0, 0, 0);
		-webkit-text-stroke-width: 2px;
		-webkit-text-stroke-color: rgb(0, 0, 0);
	}

	.space-text-h:hover {
		background-color: #000000 !important;
		color: rgb(255, 255, 255);
	}

	.thick-border {
		border-width: 3px !important;
	}
	
	.first-section {
		border-width: 0px !important;
	}

	@media screen and (min-width: 992px) {
		.logo { transform: translate(0px, 30px); }

		.first-section {
			border-width: 3px !important;
		}
	}

	.logo:hover {
		-webkit-text-stroke-color: rgb(0, 0, 0);
	}

	.mission-description {
		min-height: 232px;
	}

	.glow {
		box-shadow: 0 0 20px 5px #f58383;
	}

	.hyper-jump {
		animation: glow 1s infinite alternate;
	}

	@keyframes glow {
		from {
			box-shadow: 0 0 20px -5px #f58383;
		}
		to {
			box-shadow: 0 0 20px 5px #f58383;
		}
	}

	.deploy-button {
		animation: deploy-button 1s infinite alternate;
	}

	@keyframes deploy-button {
		from {
			box-shadow: 0 0 10px 10px #aef4af;
		}
		to {
			box-shadow: 0 0 10px -10px #aef4af;
		}
	}

	.text-glow {
		animation: text-shadow-glow 1s infinite alternate;
	}

	@keyframes text-shadow-glow {
		from {
			display: none;
		}
		to {
			display: block;
		}
	}

	.rocket-img {
		/* Start the shake animation and make the animation last for 0.5 seconds */
		animation: shake 1s infinite alternate;
	}

	@keyframes shake {
		from { transform: translate(0, 10px) rotate(0deg); }
		to { transform: translate(0, 0) rotate(0deg); }
	}
</style>

<style>
	.myProgress {
		width: 100%;
		background-color: white;
		border: solid 3px;
	}
	
	.myBar {
		width: 30%;
		height: 20px;
	}
</style>

<body>
	<!-- NavBar -->
	<div class="border-bottom border-dark thick-border">
		<div class="container">
			<div class="row">
				<div class="col-12 col-lg-4 mb-lg-5">
					<div class="m-auto logo text-center">
						<mark
						class="m-0 py-0 bg-danger space-text glow"
						style="font-size: 5em;"
						>T.T.M.</mark>
					</div>
				</div>

				<div class="col-12 col-lg-8 mt-3 py-3 border-top border-danger thick-border text-center">
					<a href="https://www.w3st.io" class="text-dark text-decoration-none">
						<span class="h3 mx-4 mb-3 space-text-h" style="font-size: 2.2em;">HOME</span>
					</a>
					<a href="https://ethereum.org/en/developers/docs/" target="_blank" class="text-dark text-decoration-none">
						<span class="h3 mx-4 mb-3 space-text-h" style="font-size: 2.2em;">DEPLOY</span>
					</a>
					<a href="https://cryptowat.ch" class="text-dark text-decoration-none">
						<span class="h3 mx-4 mb-3 space-text-h" style="font-size: 2.2em;">ANALYZE</span>
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Body -->
	<div class="container">
		<div class="row">
			<div class="col-lg-4 pt-5 border-right border-dark thick-border first-section">
				<h2 class="text-danger text-uppercase">
					<span>Status</span>
				</h2>

				<h4 class="text-dark">
					GAS FEE: <span id="myBarValue" class="text-success">78</span>
				</h4>
				<div id="myProgress" class="mb-3 myProgress">
					<div id="myBar" class="myBar transition bg-success" style="transition: 2s;"></div>
				</div>

				<h4 class="text-dark">
					CONFIRMATIONS: <span id="myBar1Value" class="text-success">34</span>
				</h4>
				<div id="myProgress" class="mb-3 myProgress">
					<div id="myBar1" class="myBar transition bg-success" style="transition: 2s;"></div>
				</div>

				<h4 class="text-dark">
					TPS: <span id="myBar2Value" class="text-success">32</span>
				</h4>
				<div id="myProgress" class="mb-3 myProgress">
					<div id="myBar2" class="myBar transition bg-success" style="transition: 2s;"></div>
				</div>

				<h4 class="text-dark">SHIP STATUS:</h4>
				<p class="text-success text-glow">&#9679; OPERATIONAL</p>

				<img
					src="https://images2.imgbox.com/f1/08/hvjgYjV7_o.jpg"
					class="d-none d-lg-block mx-auto rocket-img w-100"
					style="max-width: 200px;"
				>
			</div>

			<div class="col-lg-8 pt-5 border-dark thick-border">
				<div class="">
					<h1
						class="mb-5 px-2 text-dark text-uppercase border border-dark rounded"
						style="border-width: 3px !important;"
					>
						<span>Mission:</span>
						<span id="mission-name"></span>
						<span id="mission-name-underscore">_</span>
					</h1>

					<p class="mb-5 p-2 bg-dark mission-description rounded">
						<span id="mission-description" class="text-light"></span>
						<span id="mission-name-underscore2">_</span>
					</p>
				</div>

				<div class="row">
					<div class="col-6">
						<a href="https://ethereum.org/en/wallets/">
							<button
								class="btn btn-success btn-lg w-100 deploy-button"
								style="border-radius: 30px;"
							>DEPLOY</button>
						</a>
					</div>

					<div class="col-6">
						<a href="https://w3st.io">
							<button
								class="btn btn-outline-danger btn-lg w-100"
								style="border-radius: 30px;"
							>ABORT</button>
						</a>
					</div>

					<div class="col-12 py-4">
						<hr class="border-dark thick-border" style="border-style: dashed !important;">
					</div>

					<div class="col-12">
						<h2
							class="mb-5 px-2 text-dark border border-dark rounded"
							style="border-width: 3px !important;"
						>DESTINATION</h2>
					</div>

					<div class="col-lg-5 mb-5">
						<h4 class="text-dark">PLANET NAME:</h4>
						<p class="p-2 bg-dark text-light rounded">HARPOONJS.ETH</p>

						<h4 class="text-dark">DISTANCE:</h4>
						<p class="p-2 bg-dark text-light rounded">34.657 LY</p>

						<h4 class="text-dark">TARGET:</h4>
						<p class="p-2 bg-dark text-light rounded">Ω (3,3)</p>
					</div>

					<div class="col-lg-7 text-center">
						<img
							src="https://images2.imgbox.com/5c/e3/VzYJM6a3_o.gif"
							class="w-100"
							style="max-width: 300px;"
						>
					</div>

					<div class="col-12">
						<button
							class="mb-5 btn btn-lg btn-danger w-100 hyper-jump"
							style="border-radius: 30px;"
						>
							HYPER-JUMP
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>

	<!-- Fotter -->
	<div class="bg-dark py-5">
		<div class="container">
			<div class="row text-center">
				<div class="col-6">
					<a href="https://ethereum.org" class="text-light"><h6>ETH</h6></a>
					<a href="https://bitcoin.com" class="text-light"><h6>BTC</h6></a>
					<a href="https://chain.link" class="text-light"><h6>LINK</h6></a>
				</div>

				<div class="col-6">
					<a href="https://uniswap.com" class="text-light"><h6>UNI</h6></a>
					<a href="https://curve.fi" class="text-light"><h6>CRV</h6></a>
					<a href="https://olympusdao.finance" class="text-light"><h6>OHM</h6></a>
				</div>
			</div>
		</div>
	</div>
</body>
</html>

<script>
	const missionName = 'To the  moon'
	
	
	const missionNameElement = document.getElementById('mission-name')

	const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))

	// Mission Name
	const loop = async () => {
		for (let i = 0; i < missionName.length; i++) {
			const l = missionName[i]
		
			missionNameElement.innerHTML += l

			await wait(100)
		}
	}

	loop()

	const underscore = document.getElementById('mission-name-underscore')

	let displayed = true

	function flash() {
		if (displayed) {
			underscore.style.color = 'black'
		}
		else {
			underscore.style.color = 'white'
		}
		displayed = !displayed;
	}
	window.setInterval(flash, 500)
	
	// Mission Description
	const missionDescriptionElement = document.getElementById('mission-description')

	const missionDescription = 'W3ST stands for Web 3 Services & Technologies because we believe in the 3rd stage of the internet also called the Decentralized Internet. We want to guide all of our clients to this new internet and help them integrate the future into their businesses today. Our preferred blockchain is Ethereum.'
	
	const loop2 = async () => {
		for (let i = 0; i < missionDescription.length; i++) {
			const l = missionDescription[i]
		
			missionDescriptionElement.innerHTML += l

			await wait(10)
		}
	}

	loop2()

	const underscore2 = document.getElementById('mission-name-underscore2')

	let displayed2 = true

	function flash2() {
		if (displayed2) {
			underscore2.style.color = 'black'
		}
		else {
			underscore2.style.color = 'white'
		}
		displayed2 = !displayed2;
	}
	window.setInterval(flash2, 500)
</script>

<!-- Gas Fee -->
<script>
	var width = 10;
	var i = 0;
	var elem = document.getElementById("myBar");

	if (i == 0) {
		i = 1;

		function frame() {
			if (width >= 100) {
				clearInterval(id)
				i = 0;
			}
			else {
				width = Math.floor(Math.random() * 100);
				
				elem.style.width = width + "%"
				document.getElementById("myBarValue").innerText = width
			}
		}

		var id = setInterval(frame, 1000);
	}
</script>

<!-- Blocks -->
<script>
	var width1 = 10;
	var i1 = 0;
	var elem1 = document.getElementById("myBar1");

	if (i1 == 0) {
		i1 = 1

		function frame1() {
			if (width1 >= 100) {
				clearInterval(id1)
				i1 = 0;
			}
			else {
				width1 = Math.floor(Math.random() * 100);
				
				elem1.style.width = width1 + "%"
				document.getElementById("myBar1Value").innerText = width1
			}
		}

		var id1 = setInterval(frame1, 1000);
	}
</script>

<!-- TPS -->
<script>
	var width2 = 10;
	var i2 = 0;
	var elem2 = document.getElementById("myBar2");

	if (i2 == 0) {
		i2 = 1;

		function frame2() {
			if (width2 >= 100) {
				clearInterval(id2)
				i2 = 0;
			}
			else {
				width2 = Math.floor(Math.random() * 100)
				
				elem2.style.width = width2 + "%"
				document.getElementById("myBar2Value").innerText = width2
			}
		}

		var id2 = setInterval(frame2, 1000);
	}
</script>
`


router.get(
	'/',
	Segment.page(),
	async (req, res) => {
		res.send(html)
	}
)


module.exports = router