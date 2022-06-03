<template>
	<BContainer class="py-5">
		<h1 class="text-dark text-center text-uppercase font-weight-bold">Blog</h1>
		
		<BRow v-if="!loading">
			<BCol
				v-for="(w, i) in webContents"
				:key="i"
				sm="6" md="4"
			>
				<BCard no-body bg-variant="primary">
					<BCardHeader class="bg-dark">
						<h4 class="m-0 text-center font-weight-bold text-primary">
							{{ w.name }}
						</h4>
					</BCardHeader>
					
					<BCardHeader class="py-4">
						<h5 class="m-0 font-weight-bold">
							{{ w.cleanJSON.blocks[0].data.text }}
						</h5>
					</BCardHeader>

					<BCardFooter>
						<h5 class="m-0 font-weight-bold">
							{{ new Date(w.createdTimeStamp).toLocaleString() }}
						</h5>
					</BCardFooter>
				</BCard>
			</BCol>
		</BRow>
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
					
					this.resData = await this.authAxios.get('/')

					this.webContents = this.resData.data.webContents

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