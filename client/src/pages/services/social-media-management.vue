<template>
	<BContainer class="py-6">
		<!-- [WEB-APP-HOSTING] -->
		<BCard
			bg-variant="dark"
			text-variant="light"
			border-variant="primary"
			no-body
			class="mb-5 shadow table-holder shadow bg-transparent"
		>
			<BCardHeader class="border-primary">
				<div class="my-4">
					<h3 class="m-0 text-center text-primary text-uppercase text-spread-sm">
						{{ pageData.services[2].name }}
					</h3>
				</div>
			</BCardHeader>

			<BCardHeader class="py-4">
				<BRow class="py-4">
					<BCol cols="12" xl="6">
						<div class="px-xl-5">
							<p class="mb-5 h5 text-center font-weight-bold">
								{{ pageData.services[1].descriptions[0] }}
							</p>

							<div class="text-center">
								<RouterLink to="/contact">
									<BButton
										variant="outline-primary"
										class="w-100 mb-5"
										size="lg"
										pill
									>
										<h4 class="m-0 font-weight-bold">Contact</h4>
									</BButton>
								</RouterLink>
							</div>
						</div>
					</BCol>

					<BCol cols="12" xl="6">
						<BListGroup class="mx-auto">
							<BListGroupItem class="bg-shade text-primary">
								<h5 class="m-0 text-center font-weight-bold">
									What You Get From Our SMM
								</h5>
							</BListGroupItem>

							<BListGroupItem
								v-for="(f, i) in pageData.services[2].features"
								:key="i"
								class="font-weight-bold text-light bg-shade"
							>- {{ f }}</BListGroupItem>
						</BListGroup>

						<h5 class="py-4 text-center font-weight-bold text-success">
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