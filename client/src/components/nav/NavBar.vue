<template>
	<div class="w-100 text-dark nav">
		<BContainer class="pb-3">
			<BRow>
				<BCol cols="12" class="text-center">
					<RouterLink to="/" class="text-decoration-none">
						<Logo class="m-auto w-100" style="max-width: 450px;" />
					</RouterLink>
				</BCol>

				<BCol cols="12" class="d-none d-md-block text-center">
					<RouterLink to="/" class="mr-5 h4 menu-item">Home</RouterLink>
					<RouterLink to="/services" class="mr-5 h4 menu-item">Services</RouterLink>
					<RouterLink to="/contact" class="mr-5 h4 menu-item">Contact</RouterLink>
					<RouterLink to="/about" class="mr-0 h4 menu-item">About</RouterLink>
				</BCol>

				<BCol cols="12" class="d-block d-md-none text-center">
					<BButton variant="outline-dark" class="w-100 text-center m" @click="toggle()">
						<div class="ml"></div>
						<div class="ml"></div>
						<div class="ml"></div>
					</BButton>
				</BCol>
			</BRow>
		</BContainer>

		<div class="d-none d-md-block w-100 border-bottom border-dark"></div>

		<!-- Hidden Side Menu -->
		<SideMenu class="menu-item" />
	</div>
</template>

<script>
	// [IMPORT] //
	//import { MenuIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import SideMenu from '@/components/nav/SideMenu'
	import companyInfo from '@/defaults/companyInfo'
	//import SocialMediaPlug from '@/components/SocialMediaPlug'
	import Logo from '../../components/svg/logo.vue'

	export default {
		components: {
			//SocialMediaPlug,
			//MenuIcon,
			SideMenu,
			Logo,
		},

		data() {
			return {
				companyInfo: companyInfo,
				loggedIn: false,
				decoded: {},
			}
		},

		methods: {
			toggle() { this.$store.state.showMenu = !this.$store.state.showMenu },
		},
	}
</script>

<style lang="scss" scoped>
	.nav {
		top: 0;
		z-index: 10;
		background-color: rgba(0, 0, 0, 0) !important;
	}

	a {
		position: relative;
		color: #000;
		text-decoration: none;
		transition: .3s;
	}

	a:hover {
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

	.m:hover {
		.ml {
			background-color: rgb(218, 143, 32);
		}
	}

	.ml {
		width: 35px;
		height: 5px;
		background-color: black;
		margin: 6px auto;
	}
</style>