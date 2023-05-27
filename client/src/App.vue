<template>
	<div>
		<div id="app" :key="appKey">
			<!-- Navbar -->
			<NavBar />

			<!-- Router -->
			<RouterView :key="$route.name + ($route.params.id || '')" />

			<!-- Footer -->
			<CFooter />
		</div>
	</div>
</template>

<script>
	// [IMPORT] Personal //
	import CFooter from '@/components/nav/Footer'
	import NavBar from '@/components/nav/NavBar'
	import { EventBus } from '@/main'
	import Service from '@/services/Service'

	export default {
		components: {
			CFooter,
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
