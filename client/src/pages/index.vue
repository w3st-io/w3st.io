<template>
	<BContainer>
		<BRow>
			<BCol cols="12" lg="8" class="mb-3">
				<h1 class="mb-5 text-white">Check out our sites</h1>
				<ul class="list-unstyled">
					<li class="mb-3">
						<a href="http://24-7fireprotection.com" class="h1">
							24/7 Fire Protection
						</a>
					</li>

					<li class="mb-3">
						<a href="http://mouth2mouth.herokuapp.com" class="h1">
							The Mouth2Mouth Beauty Bar
						</a>
					</li>
					<li class="mb-3">
						<a href="http://blockbased.io" class="h1">
							blockbased.io
						</a>
					</li>
				</ul>
			</BCol>

			<BCol cols="12" lg="4" class="mb-3">
				<!-- Get Quote -->
				<GetQuote />
			</BCol>
		</BRow>
	</BContainer>
</template>

<script>
	// [IMPORT] Personal //
	import GetQuote from '@/components/company/GetQuote'
	import PageData from '@/defaults/pages'

	export default {
		components: {
			GetQuote,
		},

		data() {
			return {
				PageData: PageData,
			}
		},
	}
</script>

<style lang="scss" scoped>
	@import '../assets/styles/bootstrap-override.scss';

	.btn:hover {
		@extend .btn-secondary, .shadow;
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