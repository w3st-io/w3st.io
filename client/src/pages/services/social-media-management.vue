<template>
	<BContainer class="my-5">
		<!-- [WEB-APP-HOSTING] -->
		<BCard
			bg-variant="dark"
			text-variant="light"
			no-body
			class="mb-5 shadow table-holder"
		>
			<BCardHeader>
				<BRow>
					<BCol cols="12">
						<div class="text-light">
							<h3 class="m-0 text-center font-weight-bold text-primary">
								{{ pageData.services[2].name }}
							</h3>
						</div>
					</BCol>
				</BRow>
			</BCardHeader>

			<BCardBody>
				<BRow>
					<BCol cols="12" xl="6">
						<div class="p-2 p-xl-5">
							<p class="font-weight-bold">
								{{ pageData.services[2].descriptions[0] }}
							</p>
						</div>
					</BCol>

					<BCol cols="12" xl="6">
						<BListGroup class="mx-auto mb-3">
							<BListGroupItem class="bg-dark text-primary">
								<h5 class="m-0 text-center font-weight-bold">
									What You Get From Our SMM Service
								</h5>
							</BListGroupItem>

							<BListGroupItem
								v-for="(f, i) in pageData.services[2].features"
								:key="i"
								class="text-light bg-dark"
							>- {{ f }}</BListGroupItem>

							<BListGroupItem class="bg-dark text-primary">
								<h6 class="m-0 text-center font-weight-bold">
									Pricing:
									{{ pageData.services[2].variants[0].price }}
								</h6>
							</BListGroupItem>
						</BListGroup>
					</BCol>
				</BRow>
			</BCardBody>

			<BCardFooter class="bg-dark">
				<div class="text-center">
					<RouterLink to="/contact">
						<BButton
							variant="primary"
							class="w-100 font-weight-bold"
							size="lg"
						>Contact</BButton>
					</RouterLink>
				</div>
			</BCardFooter>
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