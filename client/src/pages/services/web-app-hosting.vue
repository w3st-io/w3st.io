<template>
	<BContainer class="my-5">
		<BRow>
			<BCol cols="12">
				<!-- [WEB-APP-HOSTING] -->
				<div class="mb-5 shadow table-holder">
					<table class="m-0 table table-striped table-dark shadow">
						<thead class="thead">
							<tr>
								<td colspan="4">
									<h3 class="text-center text-primary">
										{{ pageData.services[1].name }}
									</h3>
									<h6 class="mb-4 text-center text-muted">
										{{ pageData.services[1].disclaimer }}
									</h6>

									<p>{{ pageData.services[1].descriptions[0] }}</p>
								</td>
							</tr>

							<tr>
								<td></td>
								<td class="text-center font-weight-bold text-primary">
									{{ pageData.services[1].variants[0].name }}
								</td>
								<td class="text-center font-weight-bold text-primary">
									{{ pageData.services[1].variants[1].name }}
								</td>
								<td class="text-center font-weight-bold text-primary">
									{{ pageData.services[1].variants[2].name }}
								</td>
							</tr>
						</thead>

						<tbody>
							<tr class="text-center font-weight-bold text-primary">
								<td class="">
									General Code Maintaince
								</td>
								<td>✓</td>
								<td>✓</td>
								<td>✓</td>
							</tr>

							<tr class="text-center font-weight-bold text-primary">
								<td class="">
									General Info Updating
								</td>
								<td>✓</td>
								<td>✓</td>
								<td>✓</td>
							</tr>

							<tr class="text-center font-weight-bold text-primary">
								<td class="">
									Product Updating
								</td>
								<td></td>
								<td>✓</td>
								<td>✓</td>
							</tr>

							<tr class="text-center font-weight-bold text-primary">
								<td class="">
									App Maintainence
								</td>
								<td></td>
								<td></td>
								<td>✓</td>
							</tr>

							<tr class="text-center font-weight-bold text-primary">
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