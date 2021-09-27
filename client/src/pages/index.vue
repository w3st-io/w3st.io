<template>
	<BContainer style="height: 80vh;">
		<BRow class="mt-5">
			<BCol cols="12" class="text-center">
				<h1 class="mb-5 text-white">Our Sites</h1>
				<ul class="list-unstyled">
					<li class="mb-3">
						<a href="http://www.jjinthemaking.com" target="blank" class="h1">
							JJ Shop
						</a>
					</li>

					<li class="mb-3">
						<a href="https://www.balancewithpamela.com" target="blank" class="h1">
							Balance Within
						</a>
					</li>

					<li class="mb-3">
						<a href="https://www.theartofwings.com" target="blank" class="h1">
							Art of Wings
						</a>
					</li>

					<li class="mb-3">
						<a href="https://www.24-7fireprotection.com" target="blank" class="h1">
							24/7 Fire Protection
						</a>
					</li>

					<li class="mb-3">
						<a href="https://www.rptide.com" target="blank" class="h1">
							RpTide
						</a>
					</li>
				</ul>
			</BCol>
		</BRow>
	</BContainer>
</template>

<style lang="scss" scoped>
	@import '../assets/styles/bootstrap-override.scss';

	.btn:hover {
		@extend
			.btn-secondary,
			.shadow
		;
	}

	a {
		position: relative;
		color: #000;
		text-decoration: none;
		transition: .3s;
	}

	a:hover {
		margin-left: 10px;
		color: white;
		text-decoration: none;
	}

	a::before {
		content: "";
		position: absolute;
		width: 100%;
		height: 2px;
		bottom: 0;
		left: 0;
		background-color: white;
		visibility: hidden;
		transform: scaleX(0);
		transition: all 0.3s ease-in-out 0s;
	}
	
	a:hover::before {
		visibility: visible;
		transform: scaleX(1);
	}
</style>