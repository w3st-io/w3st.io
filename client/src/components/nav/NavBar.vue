<template>
	<div class="w-100 py-3 text-dar nav">
		<BContainer>
			<BRow>
				<BCol cols="12" class="text-center">
					<RouterLink to="/" class="text-decoration-none">
						<Logo class="m-auto w-100" style="max-width: 500px;" />
					</RouterLink>
				</BCol>
			</BRow>
		</BContainer>

		<!-- Hidden Side Menu -->
		<SideMenu :sideMenuOpen="sideMenuOpen" @closeMenu="toggle()" />
	</div>
</template>

<script>
	// [IMPORT] //
	//import { MenuIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import SideMenu from '@/components/nav/SideMenu'
	import companyInfo from '@/defaults/companyInfo'
	//import SocialMediaPlug from '@/components/SocialMediaPlug'
	import Logo from '../../components/svg/logo'

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
				sideMenuOpen: false
			}
		},

		methods: {
			toggle() { this.sideMenuOpen = !this.sideMenuOpen },
		},
	}
</script>

<style lang="scss" scoped>
	.nav {
		top: 0;
		z-index: 10;
		background-color: rgba(0, 0, 0, 0) !important;
	}
</style>