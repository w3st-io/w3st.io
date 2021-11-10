<template>
	<div class="">
		<nav
			class="bg-dark shadow nav-drawer-menu"
			:class="{ isOpen: $store.state.showMenu }"
		>
			<BButton
				v-show="$store.state.showMenu"
				variant="primary"
				class="w-100 mb-3 p-4 text-light rounded-0"
				@click="closeMenu"
			><XIcon size="36" /></BButton>

			<BButton
				v-show="$store.state.showMenu"
				variant="outline-seconadry"
				class="w-100 p-2 text-uppercase text-primary"
				@click="home()"
			><span aria-hidden="true" style="font-size: 1.4em;">Home</span></BButton>

			<BButton
				v-show="$store.state.showMenu"
				variant="outline-seconadry"
				class="w-100 p-2 text-uppercase text-primary"
				@click="services()"
			><span aria-hidden="true" style="font-size: 1.4em;">Services</span></BButton>

			<BButton
				v-show="$store.state.showMenu"
				variant="outline-seconadry"
				class="w-100 p-2 text-uppercase text-primary"
				@click="contact()"
			><span aria-hidden="true" style="font-size: 1.4em;">Contact</span></BButton>

			<BButton
				v-show="$store.state.showMenu"
				variant="outline-seconadry"
				class="w-100 p-2 text-uppercase text-primary"
				@click="about()"
			><span aria-hidden="true" style="font-size: 1.4em;">About</span></BButton>

			<SocialMediaPlug v-show="$store.state.showMenu" size="48" class="my-3" />
		</nav>

		<transition name="fade">
			<div
				v-if="$store.state.showMenu"
				class="backdrop w-100"
				@click="closeMenu()"
			></div>
		</transition>
	</div>
</template>

<script>
	// [IMPORT] //
	import { XIcon } from 'vue-feather-icons'

	// [IMPORT] Personal //
	import router from '@/router'
	import SocialMediaPlug from '../SocialMediaPlug'

	// [EXPORT] //
	export default {
		components: {
			XIcon,
			SocialMediaPlug,
		},

		data() {
			return {
				query: ''
			}
		},

		methods: {
			closeMenu() {
				this.$store.state.showMenu = !this.$store.state.showMenu
			},

			home() {
				router.push({ name: '/' })
				this.closeMenu()
			},

			about() {
				router.push({ name: 'about' })
				this.closeMenu()
			},

			
			services() {
				router.push({ name: 'services' })
				this.closeMenu()
			},

			contact() {
				router.push({ name: 'contact' })
				this.closeMenu()
			},
		}
	}
</script>

<style lang="scss" scoped>
	.nav-drawer-menu {
		z-index: 2000;

		position: fixed;
		top: 0;
		left: 0;

		height: 100vh;
		width: 0;

		overflow-x: hidden;
		transition: 0.5s;
	}

	.nav-drawer-menu button {
		transition: 0.3s;
		font-size: 2em;

		&:hover { background: #212529; }
	}
	
	.isOpen { width: 75%; }

	.backdrop {
		z-index: 1999;

		position: fixed;
		top: 0;
		right: 0;

		height: 100vh;
		width: 0;

		overflow-x: hidden;

		background: rgba(255, 255, 255, 0.1);

		backdrop-filter: blur(6px);
	}
</style>