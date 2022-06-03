<template>
	<BContainer class="py-5">
		<h1 v-if="false" class="mb-4 text-dark text-center text-uppercase font-weight-bold">Blog</h1>
		
		<BRow v-if="!loading">
			<BCol
				v-for="(w, i) in webContents"
				:key="i"
				sm="6" md="4"
				class="mx-auto"
			>
				<BCard no-body bg-variant="primary" class="shadow">
					<BCardHeader class="bg-dark">
						<h4 class="m-0 text-center font-weight-bold text-uppercase text-spread-sm text-primary">
							{{ w.name }}
						</h4>
					</BCardHeader>
					<BCardBody class="py-4">
						<h6 class="m-0 text-center font-weight-bold text-dark text-spread-sm">
							{{ w.cleanJSON.blocks[0].data.text }}
						</h6>
					</BCardBody>

					<BCardFooter>
						<h6 class="m-0 text-center font-weight-bold text-spread-sm text-light small">
							{{ new Date(w.createdTimeStamp).toLocaleString() }}
						</h6>
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