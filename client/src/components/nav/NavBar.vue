<template>
	<div class="w-100 bg-primary text-light nav">
		<BContainer>
			<BRow>
				<BCol cols="12" class="text-center">
					<RouterLink to="/" class="text-decoration-none">
						<h1 class="my-2 logo text-spread">
							<span class="text-dark">W</span>
							<span class="text-white text-backlit">3</span>
							<span class="text-dark">ST</span>
							<span class="text-white text-backlit">.</span>
							<span class="text-dark">IO</span>
						</h1>
					</RouterLink>
				</BCol>

				<BCol
					cols="12"
					class="d-none d-md-block text-center font-weight-bold text-uppercase text-spread-sm"
					style="font-size: 1.2em !important"
				>
					<!-- Home -->
					<RouterLink
						to="/" class="mx-3 text-dark menu-link"
					>
						<span>Home</span>
					</RouterLink>

					<!-- Services -->
					<RouterLink
						to="/services" class="mx-3 text-dark menu-link"
					>
						<span>Services</span>
					</RouterLink>

					<!-- Contact -->
					<RouterLink
						to="/contact" class="mx-3 text-dark menu-link"
					>
						<span>Contact</span>
					</RouterLink>

					<!-- Code -->
					<RouterLink
						to="/code" class="mx-3 text-dark menu-link"
					>
						<span>Code</span>
					</RouterLink>

					<!-- About -->
					<RouterLink
						to="/about" class="mx-3 text-dark menu-link"
					>
						<span>About</span>
					</RouterLink>

					<!-- About -->
					<RouterLink
						to="/blog" class="mx-3 text-dark menu-link"
					>
						<span>Blog</span>
					</RouterLink>
				</BCol>

				<!-- Mobile Menu Button -->
				<BCol cols="12" class="d-block d-md-none text-center">
					<BButton
						variant="dark"
						class="mt-4 w-100 mobile-menu-button"
						@click="toggle()"
					>
						<div class="mobile-menu-button-line"></div>
						<div class="mobile-menu-button-line"></div>
						<div class="mobile-menu-button-line"></div>
					</BButton>
				</BCol>
			</BRow>
		</BContainer>

		<!-- divider -->
		<BContainer fluid class="d-none d-md-block m-0 p-0">
			<hr class="my-3 p-0 bg-dark">
		</BContainer>

		<!-- Hidden Side Menu -->
		<SideMenu class="menu-link" />
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import SideMenu from '@/components/nav/SideMenu'
	import companyInfo from '@/defaults/companyInfo'

	export default {
		components: {
			SideMenu,
		},

		data() {
			return {
				companyInfo: companyInfo,
				loggedIn: false,
				decoded: {},
				menuItems: [],
			}
		},

		methods: {
			toggle() { this.$store.state.showMenu = !this.$store.state.showMenu },
		},

		created() {
		},
	}
</script>

<style lang="scss" scoped>
	// [IMPORT] Personal //
	@import 'src/assets/styles/bootstrap-override.scss';

	.nav {
		top: 0;
		z-index: 10;
	}

	.logo {
		font-size: 20vw;

		@media screen and (min-width: 600px) {
			font-size: 7em;
		}
	}

	.menu-link {
		position: relative;
		text-decoration: none;
		transition: .3s;
		text-decoration: none !important;

		&::before {
			content: "";
			position: absolute;
			width: 100%;
			height: 2px;
			bottom: -3px;
			left: 0;
			background-color: white;
			visibility: hidden;
			transform: scaleX(0);
			transition: all 0.3s ease-in-out 0s;
		}

		&:hover {
			@extend .text-white;
		}

		&:hover::before {
			visibility: visible;
			transform: scaleX(1);
		}
	}

	.router-link-exact-active {
		&.menu-link {
			@extend .text-white;
			text-shadow: 0 0 2px #ffffff, 0 0 8px #ffffff !important;


			&::before {
				visibility: visible;
				transform: scaleX(1);
			}
		}
	}

	// Mobile Menu //
	.mobile-menu-button {
		border-width: 2px !important;

		&:hover {
			.mobile-menu-button-line { @extend .bg-primary; }
		}
	}

	.mobile-menu-button-line {
		@extend .bg-primary;

		width: 45px;
		height: 2px;
		margin: 8px auto;
	}
</style>