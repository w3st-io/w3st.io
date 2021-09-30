<template>
	<BContainer class="my-5">
		<!-- [WEB-APP-HOSTING] -->
		<BCard
			bg-variant="dark"
			text-variant="light"
			class="mb-5 shadow table-holder"
		>
			<BRow>
				<BCol cols="12">
					<h3 class="mb-5 text-center text-primary">
						{{ pageData.services[2].name }}
					</h3>
				</BCol>

				<BCol cols="12" xl="6">
					<p class="p-2 p-xl-5">
						{{ pageData.services[2].descriptions[0] }}
					</p>
				</BCol>

				<BCol cols="12" xl="6">
					<BListGroup class="mx-auto mb-3">
						<BListGroupItem class="bg-dark text-primary">
							<h5 class="m-0 text-center">
								What You Get From Our SMM Service
							</h5>
						</BListGroupItem>

						<BListGroupItem
							v-for="(f, i) in pageData.services[2].features"
							:key="i"
							class="text-light bg-dark"
						>- {{ f }}</BListGroupItem>

						<BListGroupItem class="bg-dark text-primary">
							<h6 class="m-0 text-center">
								Pricing:
								{{ pageData.services[2].variants[0].price }}
							</h6>
						</BListGroupItem>
					</BListGroup>

				</BCol>

				<BCol cols="12">
					<RouterLink to="/contact">
						<BButton
							variant="primary"
							class="w-100"
						>Contact</BButton>
					</RouterLink>
				</BCol>
			</BRow>
		</BCard>
	</BContainer>
</template>

<script>
	import pageData from '../../defaults/companyInfo'

	export default {
		data() {
			return {
				pageData: pageData
			}
		},
	}
</script>

<style lang="scss" scoped>
	.table-holder {
		overflow-x: auto;
	}
</style>