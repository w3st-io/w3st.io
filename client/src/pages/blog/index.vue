<template>
	<BContainer class="py-5">
		<h1 class="text-dark text-center text-uppercase font-weight-bold">Blog</h1>
		{{ this.resData.data }}
	</BContainer>
</template>

<script>
	import axios from 'axios'

	export default {
		data() {
			return {
				authAxios: axios.create({
					baseURL: '/pages/blog',
				}),

				resData: {},
				error: '',

				webApp: {
					name: '',
				},
			}
		},

		methods: {
			async getPageData() {
				try {
					this.error = ''
					
					this.resData = await this.authAxios.get('/')
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