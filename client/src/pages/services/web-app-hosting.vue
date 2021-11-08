<template>
	<BContainer class="my-5">
		<!-- [WEB-APP-DEVELOPMENT] -->
		<BCard
			bg-variant="dark"
			text-variant="light"
			border-variant="primary"
			no-body
			class="mb-5 shadow table-holder"
		>
			<BCardHeader class="border-primary">
				<div class="my-4">
					<h3 class="m-0 text-center font-weight-bold text-primary">
						{{ pageData.services[1].name }}
					</h3>
				</div>
			</BCardHeader>

			<BCardHeader class="py-4">
				<BRow class="py-4">
					<BCol cols="12" xl="4">
						<div class="">
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