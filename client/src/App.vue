<template>
	<div>
		<div id="app" :key="appKey" class="">
			<!-- Navbar -->
			<NavBar />

			<!-- Router -->
			<RouterView :key="$route.name + ($route.params.id || '')" />

			<!-- Footer -->
			<Footer />
		</div>
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import Footer from '@/components/nav/Footer'
	import NavBar from '@/components/nav/NavBar'
	import { EventBus } from '@/main'
	import Service from '@/services/Service'

	export default {
		components: {
			Footer,
			NavBar,
		},

		data() {
			return {
				appKey: 0,
				reqData: {},
			}
		},

		async created() {
			this.forceRerender()

			await this.setNodeEnv()

			EventBus.$on('force-rerender', () => { this.forceRerender() })
		},

		methods: {
			forceRerender() { this.appKey++ },

			async setNodeEnv() {
				try {
					this.reqData = await Service.index()

					if (this.reqData.status) {
						localStorage.setItem('node_env', this.reqData.node_env)
					}	
				}
				catch (err) { console.log(`App: Error --> ${err}`) }
			},
		},
	}
</script>

<style lang="scss">
	// [IMPORT] //
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@200&display=swap');

	* { font-family: 'Montserrat', sans-serif !important; }
</style>