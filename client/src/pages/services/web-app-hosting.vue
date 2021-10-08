<template>
	<BContainer class="my-5">
		<!-- [WEB-APP-DEVELOPMENT] -->
		<BCard
			bg-variant="primary"
			text-variant="light"
			no-body
			class="mb-5 shadow table-holder"
		>
			<BCardHeader>
				<BRow>
					<BCol cols="12">
						<div class="text-light">
							<h3 class="m-0 text-center font-weight-bold text-light">
								{{ pageData.services[1].name }}
							</h3>
						</div>
					</BCol>
				</BRow>
			</BCardHeader>

			<BCardHeader>
				<BRow>
					<BCol cols="12" xl="4" class="text-dark">
						<div class="p-2 p-xl-5">
							<p class="mb-5 h5 text-justify font-weight-bold">
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

					<BCol cols="12" xl="8">
						<div class="table-holder">
							<table class="m-0 table table-striped table-dark shadow">
								<thead class="">
									<tr class="text-center font-weight-bold text-light">
										<td></td>
										<td>
											{{ pageData.services[1].variants[0].name }}
										</td>
										<td>
											{{ pageData.services[1].variants[1].name }}
										</td>
										<td>
											{{ pageData.services[1].variants[2].name }}
										</td>
									</tr>
								</thead>

								<tbody class="text-center font-weight-bold text-light">
									<tr>
										<td>
											General Code Maintaince
										</td>
										<td>✓</td>
										<td>✓</td>
										<td>✓</td>
									</tr>
									<tr>
										<td>
											General Info Updating
										</td>
										<td>✓</td>
										<td>✓</td>
										<td>✓</td>
									</tr>
									<tr>
										<td>
											Product Updating
										</td>
										<td></td>
										<td>✓</td>
										<td>✓</td>
									</tr>
									<tr>
										<td>Online Store</td>
										<td></td>
										<td>✓</td>
										<td>✓</td>
									</tr>
									<tr>
										<td>
											App Maintainence
										</td>
										<td></td>
										<td></td>
										<td>✓</td>
									</tr>
									<tr>
										<td class="border-top border-primary">
											Price
										</td>
										<td class="border-top border-primary">
											{{ pageData.services[1].variants[0].price }}
										</td>
										<td class="border-top border-primary">
											{{ pageData.services[1].variants[1].price }}
										</td>
										<td class="border-top border-primary">
											{{ pageData.services[1].variants[2].price }}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
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