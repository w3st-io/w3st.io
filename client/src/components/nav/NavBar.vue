<template>
	<div class="w-100 py-3 text-dar nav">
		<BContainer>
			<BRow>
				<BCol cols="12" class="text-center">
					<h1 class="text-dark" style="font-size: 8em;">
						W<span style="color: white;">3</span>ST<span style="color: white;">.</span>IO
					</h1>
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

	export default {
		components: {
			//SocialMediaPlug,
			//MenuIcon,
			SideMenu,
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