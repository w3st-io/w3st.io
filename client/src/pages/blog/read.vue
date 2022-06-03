<template>
	<div>
		{{ this.resData }}
	</div>
</template>
<script>
	import axios from 'axios'

	export default {
		data() {
			return {
				authAxios: axios.create({
					baseURL: '/pages/blog/read',
				}),

				loading: true,
				resData: {},
				error: '',

				webContents: [],
			}
		},

		methods: {
			async getPageData() {
				try {
					this.error = ''
					
					this.resData = await this.authAxios.get(`/${this.$route.params.webcontent}`)
					console.log(this.resData);

					this.loading = false
				}
				catch (err) {
					this.error = err
				}
			},
		},

		async created() {
			await this.getPageData()
		},
	}
</script>