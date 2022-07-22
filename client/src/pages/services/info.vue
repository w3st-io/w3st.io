<template>
	<BContainer class="py-6">
		<Overview
			v-if="!loading"
			:service="service"
			:showPrices="showPrices"
		/>
	</BContainer>
</template>

<script>
	import axios from 'axios'

	import pageData from '../../defaults/companyInfo'
	import Overview from '../../components/services/Overview'

	export default {
		data() {
			return {
				authAxios: axios.create({
					baseURL: '/pages/services',
				}),

				loading: true,
				pageData: pageData,
				resData: {},

				serviceId: this.$route.params.serviceid,
				service: {},
				showPrices: true,

			}
		},

		components: {
			Overview,
		},

		methods: {
			async getPageData() {
				try {
					this.resData = await this.authAxios.get('/')

					this.showPrices = this.resData.data.showPrices
				}
				catch (err) {
					this.error = err
				}
			},
		},

		async created() {
			for (let i = 0; i < this.pageData.services.length; i++) {
				const element = this.pageData.services[i]
				
				if (element.id == this.serviceId) {
					this.service = element

					this.loading = false
				}
			}

			await this.getPageData()
		},
	}
</script>

<style lang="scss" scoped>
	.table-holder {
		overflow-x: auto;
	}
</style>