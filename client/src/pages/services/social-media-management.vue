<template>
	<BContainer class="my-5">
		<!-- [WEB-APP-HOSTING] -->
		<BCard
			bg-variant="primary"
			text-variant="light"
			no-body
			class="mb-5 shadow table-holder shadow"
		>
			<BCardHeader>
				<BRow>
					<BCol cols="12">
						<div class="text-light">
							<h3 class="m-0 text-center font-weight-bold text-light">
								{{ pageData.services[2].name }}
							</h3>
						</div>
					</BCol>
				</BRow>
			</BCardHeader>

			<BCardHeader>
				<BRow>
					<BCol cols="12" xl="6">
						<div class="px-xl-5 py-4">
							<p class="mb-5 h5 text-justify font-weight-bold text-dark">
								{{ pageData.services[1].descriptions[0] }}
							</p>

							<div class="text-center">
								<RouterLink to="/contact">
									<BButton
										variant="light"
										class="w-100 font-weight-bold"
										size="lg"
										pill
									>Contact</BButton>
								</RouterLink>
							</div>
						</div>
					</BCol>

					<BCol cols="12" xl="6">
						<BListGroup class="mx-auto my-3">
							<BListGroupItem class="bg-primary text-light">
								<h5 class="m-0 text-center font-weight-bold">
									What You Get From Our SMM
								</h5>
							</BListGroupItem>

							<BListGroupItem
								v-for="(f, i) in pageData.services[2].features"
								:key="i"
								class="font-weight-bold text-dark bg-primary"
							>- {{ f }}</BListGroupItem>
						</BListGroup>

						<h5 class="my-3 text-center font-weight-bold">
							{{ pageData.services[2].variants[0].price }}
						</h5>
					</BCol>
				</BRow>
			</BCardHeader>
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