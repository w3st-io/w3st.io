<template>
	<BContainer class="py-5">
		<BCard
			v-if="!loading"
			text-variant="dark"
			bg-variant="white"
			border-variant="primary"
			no-body
			class="mx-auto"
			style="max-width: 1000px;"
		>
			<BCardHeader class="text-center bg-dark text-primary">
				<h4 class="font-weight-bold">
					{{ this.webContent.name }}
				</h4>
				<h6 class="mb-0 font-weight-bold text-light">
					harpoonjs.eth -
					{{ new Date(this.webContent.createdTimeStamp).toLocaleString() }}
				</h6>
			</BCardHeader>

			<BCardHeader class="px-md-5">
				<CleanJSONToHTML
					:cleanJSON="this.webContent.cleanJSON"
				/>
			</BCardHeader>
		</BCard>
	</BContainer>
</template>
<script>
	import axios from 'axios'
	
	import CleanJSONToHTML from '../../components/CleanJSONToHTML.vue'

	export default {
		data() {
			return {
				authAxios: axios.create({
					baseURL: '/pages/blog/read',
				}),

				loading: true,
				resData: {},
				error: '',

				webContent: null,
			}
		},

		methods: {
			async getPageData() {
				try {
					this.loading = true
					this.error = ''
					
					this.resData = await this.authAxios.get(`/${this.$route.params.webcontent}`)
					
					if (this.resData.data.status) {
						this.webContent = this.resData.data.webContent
					}
					else {
						this.error = this.resData.data.message
					}

					this.loading = false
				}
				catch (err) {
					this.error = err
				}
			},
		},

		components: {
			CleanJSONToHTML
		},

		async created() {
			await this.getPageData()
		},
	}
</script>