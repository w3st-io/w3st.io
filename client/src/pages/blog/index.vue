<template>
	<BContainer class="py-5">
		<h1 class="mb-4 text-dark text-center text-uppercase font-weight-bold">Blog</h1>
		
		<BRow v-if="!loading">
			<BCol
				v-for="(w, i) in webContents"
				:key="i"
				sm="6"
				class="mx-auto"
			>
				<RouterLink :to="`/blog/read/${w._id}`" class="text-decoration-none">
					<BCard no-body bg-variant="primary" class="shadow hover-card">
						<BCardHeader class="bg-dark">
							<h4 class="m-0 text-center font-weight-bold text-uppercase text-spread-sm text-primary">
								{{ w.name }}
							</h4>
						</BCardHeader>

						<BCardFooter>
							<h6 class="m-0 text-center font-weight-bold text-spread-sm text-light small">
								{{ new Date(w.createdTimeStamp).toLocaleString() }}
							</h6>
						</BCardFooter>
					</BCard>
				</RouterLink>
			</BCol>

			<BCol v-if="webContents.length == 0">
				<h3 class="text-center text-light font-weight-bold">
					No Blog Posts Yet
				</h3>
				<h6 class="text-center text-dark font-weight-bold">
					Check Back Soon!
				</h6>
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