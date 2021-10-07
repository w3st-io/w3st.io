<template>
	<BContainer class="my-5">
		<!-- [WEB-APP-DEVELOPMENT] -->
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
								{{ pageData.services[0].name }}
							</h3>

							<h6 class="m-0 small text-center">
								{{ pageData.services[0].disclaimer }}
							</h6>
						</div>
					</BCol>
				</BRow>
			</BCardHeader>

			<BCardBody>
				<BRow>
					<BCol cols="12" xl="4" class="bg-dark text-light">
						<div class="p-2 p-xl-5">
							<p class="font-weight-bold">
								{{ pageData.services[0].descriptions[0] }}
							</p>
						</div>
					</BCol>

					<BCol cols="12" xl="8" class="bg-dark">
						<div class="p-3 table-holder">
							<table class="m-0 table table-striped table-dark">
								<thead class="">
									<tr class="text-center font-weight-bold text-primary">
										<td></td>
										<td>
											{{ pageData.services[0].variants[0].name }}
										</td>
										<td>
											{{ pageData.services[0].variants[1].name }}
										</td>
										<td>
											{{ pageData.services[0].variants[2].name }}
										</td>
									</tr>
								</thead>

								<tbody class="text-center font-weight-bold text-primary">
									<tr>
										<td>Complete Informative Pages</td>
										<td>✓</td>
										<td>✓</td>
										<td>✓</td>
									</tr>
									<tr>
										<td>Blog</td>
										<td>✓</td>
										<td>✓</td>
										<td>✓</td>
									</tr>
									<tr>
										<td>Full SEO</td>
										<td>✓</td>
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
										<td>Mobile App</td>
										<td></td>
										<td></td>
										<td>✓</td>
									</tr>
									<tr>
										<td class="border-top border-primary">
											Price
										</td>
										<td class="border-top border-primary">
											{{ pageData.services[0].variants[0].price }}
										</td>
										<td class="border-top border-primary">
											{{ pageData.services[0].variants[1].price }}
										</td>
										<td class="border-top border-primary">
											{{ pageData.services[0].variants[2].price }}
										</td>
									</tr>
								</tbody>
							</table>
						</div>
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