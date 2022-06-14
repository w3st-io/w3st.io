// [REQUIRE] //
const cors = require('cors')
const express = require('express')
const path = require('path')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


const file = `
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>PROJECT: TO THE MOON!</title>
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
		background-color: #000000!important;
		color: rgb(255, 255, 255);
	}

	.thick-border {
		border-width: 3px !important;
	}
	
	@media screen and (min-width: 992px) {
		.logo { transform: translate(0px, 30px); }
	}

	.logo:hover {
		-webkit-text-stroke-color: rgb(0, 0, 0);
	}

	.mission-description {
		min-height: 100px;
	}

	.glow {
		animation: glow .3s infinite alternate;
	}

	.hyper-jump {
		animation: glow .3s infinite alternate;
	}

	@keyframes glow {
		from {
			box-shadow: 0 0 6px -6px #f58383;
		}
		to {
			box-shadow: 0 0 6px 6px #f4aeae;
		}
	}

	.deploy-button {
		animation: deploy-button 1s infinite alternate;
	}

	@keyframes deploy-button {
		from {
			box-shadow: 0 0 10px -10px #aef4af;
		}
		to {
			box-shadow: 0 0 10px 10px #aef4af;
		}
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
						<span class="h2 mx-4 space-text-h" style="font-size: 3em;">HOME</span>
					</a>
					<a href="https://ethereum.org/en/developers/docs/" target="_blank" class="text-dark text-decoration-none">
						<span class="h2 mx-4 space-text-h" style="font-size: 3em;">DEPLOY</span>
					</a>
					<a href="https://cryptowat.ch" class="text-dark text-decoration-none">
						<span class="h2 mx-4 space-text-h" style="font-size: 3em;">T.A.</span>
					</a>
				</div>
			</div>
		</div>
	</div>

	<!-- Body -->
	<div class="container">
		<div class="row">
			<div class="d-none d-lg-block col-lg-4 py-5 border-right border-dark thick-border">
				<img src="https://images2.imgbox.com/f8/5e/hydjHUVY_o.jpg" class="w-100">
			</div>

			<div class="col-lg-8 py-5 border-dark thick-border">
				<div class="">
					<h2 class="mb-5 text-light bg-dark text-uppercase">
						<span>Mission: </span>
						<span id="mission-name"></span>
						<span id="mission-name-underscore">_</span>
					</h2>

					<p class="mb-5 text-dark mission-description">
						<span id="mission-description"></span>
						<span id="mission-name-underscore2" class="text-dark">_</span>
					</p>
				</div>

				<div class="row">
					<div class="col-6">
						<a href="https://ethereum.org/en/wallets/">
							<button class="btn btn-success w-100 deploy-button">DEPLOY</button>
						</a>
					</div>

					<div class="col-6">
						<a href="https://w3st.io">
							<button class="btn btn-outline-danger w-100">ABORT</button>
						</a>
					</div>

					<div class="col-12 py-3">
						<hr class="border-dark thick-border">
					</div>

					<div class="col-lg-5">
						<h1>DESTINATION</h1>

						<h6 class="bg-dark text-light">NAME:</h6>
						<p>HARPOONJS.ETH</p>

						<h6 class="bg-dark text-light">TARGET:</h6>
						<p>34.657 LY</p>

						<h6 class="bg-dark text-light">GRAVITATIONAL FORCE:</h6>
						<p>(3, 3) M/S/S</p>
					</div>

					<div class="col-lg-7 text-center">
						<img
							src="https://images2.imgbox.com/5c/e3/VzYJM6a3_o.gif"
							class="w-100"
							style="max-width: 300px;"
						>
					</div>

					<div class="col-12">
						<button class="btn btn-lg btn-danger w-100 hyper-jump">
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
			underscore.style.display = 'none'
		}
		else {
			underscore.style.display = ''
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
			underscore2.style.display = 'none'
		}
		else {
			underscore2.style.display = ''
		}
		displayed2 = !displayed2;
	}
	window.setInterval(flash2, 500)
</script>
`


router.get(
	'/',
	async (req, res) => {
		res.send(file)
	}
)


module.exports = router