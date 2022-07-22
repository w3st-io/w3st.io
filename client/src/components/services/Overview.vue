<template>
	<BCard
		bg-variant="primary"
		text-variant="light"
		border-variant="dark"
		no-body
		class="table-holder shadow"
	>
		<BCardHeader class="border-dark">
			<div class="my-4 text-dark">
				<h3 class="text-center text-uppercase text-spread-sm">
					{{ service.name }}
				</h3>

				<h6 class="m-0 small text-center text-secondary">
					{{ service.disclaimer }}
				</h6>
			</div>
		</BCardHeader>

		<BCardBody>
			<BRow>
				<BCol cols="12" md="6" class="d-none d-md-block">
					<lottie-player
						:src="service.lottiefilesLink"
						class="mx-auto mb-3 text-center lottie"
						style="max-width: 300px;"
						background="transparent"
						speed="1"
						loop
						autoplay
					/>
				</BCol>

				<BCol cols="12" md="6">
					<p class="mx-md-5 my-5 text-center h5 font-weight-bold">
						{{ service.descriptions[0] }}
					</p>
				</BCol>

				<BCol cols="12">
					<div class="table-holder">
						<FeaturesTable
							:service="service"
							:showPrices="showPrices"
						/>
					</div>
				</BCol>
			</BRow>
		</BCardBody>

		<BCardFooter>
			<div class="text-center">
				<RouterLink to="/contact">
					<BButton
						variant="dark"
						class="w-100 my-2"
						size="lg"
					>
						<h4 class="m-0 font-weight-bold">Contact</h4>
					</BButton>
				</RouterLink>
			</div>
		</BCardFooter>
	</BCard>
</template>

<script>
	import pageData from '../../defaults/companyInfo'
	import FeaturesTable from '../../components/services/FeaturesTable'

	export default {
		props: {
			service: {
				type: Object,
				required: true,
			},

			showPrices: {
				type: Boolean,
				default: true,
			},
		},
		
		data() {
			return {
				pageData: pageData
			}
		},

		components: {
			FeaturesTable,
		},
	}
</script>

<style lang="scss" scoped>
	.table-holder {
		overflow-x: auto;
	}

	.lottie {
		width: 100%;

		@media (max-width: 752px) {
			width: 200px;
		}
	}
</style>