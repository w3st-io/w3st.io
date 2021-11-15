<template>
	<BContainer class="py-6">
		<Overview v-if="!loading" :service="service" />
	</BContainer>
</template>

<script>
	import pageData from '../../defaults/companyInfo'
	import Overview from '../../components/services/Overview'

	export default {
		data() {
			return {
				loading: true,
				pageData: pageData,
				serviceId: this.$route.params.serviceid,
				service: {},
			}
		},

		components: {
			Overview,
		},

		created() {
			for (let i = 0; i < this.pageData.services.length; i++) {
				const element = this.pageData.services[i]
				
				if (element.id == this.serviceId) {
					this.service = element

					this.loading = false
				}
			}
		},
	}
</script>

<style lang="scss" scoped>
	.table-holder {
		overflow-x: auto;
	}
</style>