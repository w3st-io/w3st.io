// [REQUIRE]
const cors = require('cors')


// [IMPORT]
import express from 'express'

// [IMPORT] Personal //
import Segment from '../../s-middleware/Segment'


// [EXPRESS + USE]
const router = express.Router().use(cors())


router.get(
	'/',
	Segment.page(),
	async (req: express.Request, res: express.Response) => {
		res.send(`
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

			<!-- Bootstrap Override -->
			<style>
			.bg-dark { background-color: black !important; }

			.btn-outline-danger {
				border-width: 3px;
			}

			.container {
				max-width: 1300px;
			}
			</style>

			<style>
			* {
				letter-spacing: 2px;
				font-family: 'Ubuntu Condensed', sans-serif;
				font-family: 'Orbitron', sans-serif;
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

			@media screen and (min-width: 992px) {
				.logo { transform: translate(0px, 30px); }
			}

			.logo:hover {
				-webkit-text-stroke-color: rgb(0, 0, 0);
			}

			.mission-description {
				overflow-y: scroll;
				height: 150px;
			}

			/* Green Loading Bars */
			.myProgress {
				width: 100%;
				background-color: white;
				border: solid 3px;
			}

			.myBar {
				width: 30%;
				height: 20px;
			}

			.mlink:hover {
				color: red !important;
			}
			</style>

			<body>
				<!-- NavBar -->
				<div class="mb-4 border-bottom border-dark thick-border">
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

							<div class="col-12 col-lg-8 mt-3 py-3 border-top border-danger thick-border text-center text-uppercase">
								<a
									href="https://www.w3st.io"
									class="text-dark text-decoration-none"
								>
									<span
										class="mlink h3 mx-4 mb-3 space-text-h"
										style="font-size: 2.2em;"
									>Home</span>
								</a>
								<a
									href="https://ethereum.org/en/developers/docs/"
									target="_blank"
									class="text-dark text-decoration-none"
								>
									<span
										class="mlink h3 mx-4 mb-3 space-text-h"
										style="font-size: 2.2em;"
									>Deploy</span>
								</a>
								<a
									href="https://cryptowat.ch"
									target="_blank"
									class="text-dark text-decoration-none"
								>
									<span
										class="mlink h3 mx-4 mb-3 space-text-h"
										style="font-size: 2.2em;"
									>Analyze</span>
								</a>
							</div>
						</div>
					</div>
				</div>

				<!-- Body -->
				<div class="container">
					<div class="row">
						<!-- Title -->
						<div class="col-12 thick-border">
							<h1
								class="my-4 px-2 text-light text-uppercase border bg-dark border-dark rounded thick-border"
								>
								<span>Mission:</span>
								<span id="mission-name"></span>
								<span id="mission-name-underscore" class="flashing">_</span>
							</h1>		
						</div>

						<!-- Status Section -->
						<div class="col-lg-4 thick-border text-uppercase">
							<h2 class="mt-3 text-danger text-uppercase">
								<span>Status</span>
							</h2>

							<h4 class="text-dark">
								Gas Fee: <span id="myBarValue" class="text-success">78</span>
							</h4>
							<div id="myProgress" class="mb-3 myProgress">
								<div
									id="myBar"
									class="myBar transition bg-success"
									style="transition: 2s;"
								></div>
							</div>

							<h4 class="text-dark">
								Confirmations: <span id="myBar1Value" class="text-success">34</span>
							</h4>
							<div id="myProgress" class="mb-3 myProgress">
								<div
									id="myBar1"
									class="myBar transition bg-success"
									style="transition: 2s;"
								></div>
							</div>

							<h4 class="text-dark">
								TPS: <span id="myBar2Value" class="text-success">32</span>
							</h4>
							<div id="myProgress" class="mb-3 myProgress">
								<div
									id="myBar2"
									class="myBar transition bg-success"
									style="transition: 2s;"
								></div>
							</div>

							<h4 class="text-dark">Ship Status:</h4>
							<p class="text-success">&#9679; Operational</p>

							<img
								src="https://images2.imgbox.com/f1/08/hvjgYjV7_o.jpg"
								class="d-none d-lg-block mx-auto rocket-img w-100"
								style="max-width: 230px;"
							>
						</div>
						
						<!-- Description Section -->
						<div class="col-lg-8 border-dark thick-border">
							<h2
								class="my-3 px-2 text-dark border border-dark rounded thick-border text-uppercase"
							>Destination: Moon</h2>

							<p class="mt-5 mb-5 p-2 bg-dark mission-description rounded">
								<span id="mission-description" class="text-light"></span>
								<span class="flashing">_</span>
							</p>
							<div class="row">
								<div class="col-6">
									<a
										href="https://ethereum.org/en/wallets/"
										target="_blank"
									>
										<button
											class="btn btn-success btn-lg w-100 deploy-button"
											style="border-radius: 30px;"
										>ENTER</button>
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
									<hr
										class="border-dark thick-border"
										style="border-style: dashed !important;"
									>
								</div>

								<div class="col-lg-5 mb-5 text-uppercase">
									<h4 class="text-dark">Launch Point:</h4>
									<p class="p-2 bg-dark text-light rounded">
										Earth (-115427)
									</p>

									<h4 class="text-dark">Time-Distance:</h4>
									<p class="p-2 bg-dark text-light rounded">
										3.96 * 10^8 LY
									</p>

									<h4 class="text-dark">Astronaut:</h4>
									<p class="p-2 bg-dark text-light rounded">
										Aleem Ahmed
									</p>

									<h4 class="text-dark">Target:</h4>
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
									<a href="https://etherscan.io/address/0x1f66011C758E01dAdCb520d5FD69b1Ea6ae91487#code" target="_blank">
										<button
											class="mb-5 btn btn-lg btn-danger w-100 hyper-jump"
										>HYPER-JUMP</button>
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>

				<!-- Fotter -->
				<div class="bg-dark py-5">
					<div class="container">
						<div class="row text-center">
							<div class="col-4">
								<a href="https://ethereum.org" class="text-light">
									<h6>ETH</h6>
								</a>
								<a href="https://bitcoin.com" class="text-light">
									<h6>BTC</h6>
								</a>
								<a href="https://polygon.technology" class="text-light">
									<h6>MATIC</h6>
								</a>
								<a href="https://www.optimism.io/" class="text-light">
									<h6>OP</h6>
								</a>
							</div>

							<div class="col-4">
								<a href="https://uniswap.com" class="text-light">
									<h6>UNI</h6>
								</a>
								<a href="https://curve.fi" class="text-light">
									<h6>CRV</h6>
								</a>
								<a href="https://markerdao.com" class="text-light">
									<h6>MKR</h6>
								</a>
								<a href="https://olympusdao.finance" class="text-light">
									<h6>OHM</h6>
								</a>
							</div>

							<div class="col-4">
								<a href="https://chain.link" class="text-light">
									<h6>LINK</h6>
								</a>
								<a href="https://golem.network" class="text-light">
									<h6>GLM</h6>
								</a>
							</div>
						</div>
					</div>
				</div>
			</body>
			</html>

			<script>
				const wait = (ms) => new Promise(resolve => setTimeout(resolve, ms))
			</script>

			<!-- Mission Statement -->
			<script>	
				const missionName = 'To the moon'
				
				const missionNameElement = document.getElementById('mission-name')

				const traverseMissionName = async () => {
					for (let i = 0; i < missionName.length; i++) {
						missionNameElement.innerHTML += missionName[i]

						await wait(100)
					}
				}

				traverseMissionName()
			</script>

			<!-- Mission Description -->
			<script>
				const missionDescription = 'W3ST stands for Web 3 Services & Technologies because we believe in the 3rd stage of the internet also called the Decentralized Internet. We want to guide all of our clients to this new internet and help them integrate the future into their businesses today. Our preferred blockchain is Ethereum.'
				
				const missionDescriptionElement = document.getElementById('mission-description')
				
				const traverseMissionDescription = async () => {
					for (let i = 0; i < missionDescription.length; i++) {
						missionDescriptionElement.innerHTML += missionDescription[i]

						await wait(10)
					}
				}

				traverseMissionDescription()
			</script>

			<!-- Gas Fee -->
			<script>
				var width = 10
				var i = 0
				var elem = document.getElementById("myBar")

				if (i == 0) {
					i = 1

					function frame() {
						if (width >= 100) {
							clearInterval(id)
							i = 0
						}
						else {
							width = Math.floor(Math.random() * 100)
							
							elem.style.width = width + "%"
							document.getElementById("myBarValue").innerText = width
						}
					}

					var id = setInterval(frame, 1000)
				}
			</script>

			<!-- Blocks -->
			<script>
				var width1 = 10
				var ii = 0
				var elem1 = document.getElementById("myBar1")

				if (ii == 0) {
					ii = 1

					function frame1() {
						if (width1 >= 100) {
							clearInterval(id1)
							ii = 0
						}
						else {
							width1 = Math.floor(Math.random() * 100);
							
							elem1.style.width = width1 + "%"
							document.getElementById("myBar1Value").innerText = width1
						}
					}

					var id1 = setInterval(frame1, 1000)
				}
			</script>

			<!-- TPS -->
			<script>
				var width2 = 10
				var iii = 0
				var elem2 = document.getElementById("myBar2")

				if (iii == 0) {
					iii = 1

					function frame2() {
						if (width2 >= 100) {
							clearInterval(id2)
							iii = 0
						}
						else {
							width2 = Math.floor(Math.random() * 100)
							
							elem2.style.width = width2 + "%"
							document.getElementById("myBar2Value").innerText = width2
						}
					}

					var id2 = setInterval(frame2, 1000)
				}
			</script>

			<style>
			.flashing {
				animation-duration: 2s;
				animation-name: blink;
				animation-iteration-count: infinite;
				animation-direction: alternate;
			}

			@keyframes blink {
				0% {
					color: black;
				}
				20% {
					color: white;
				}
				40% {
					color: black;
				}
				60% {
					color: white;
				}
				80% {
					color: black;
				}
				100% {
					color: white;
				}
			}

			.glow {
				box-shadow: 0 0 20px 5px #f58383;
			}

			.hyper-jump {
				animation: glow-red 1s infinite alternate;
				border-radius: 30px;
			}

			@keyframes glow-red {
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

			.rocket-img {
				/* Start the shake animation and make the animation last for 0.5 seconds */
				animation: shake 1s infinite alternate;
			}

			@keyframes shake {
				from { transform: translate(0, 10px) rotate(0deg); }
				to { transform: translate(0, 0) rotate(0deg); }
			}
			</style>
		`)
	}
)


module.exports = router