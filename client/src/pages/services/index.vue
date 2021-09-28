<template>
	<BContainer class="my-5">
		<BRow>
			<BCol cols="12">
				<div class="mb-5 shadow table-holder">
					<table class="m-0 table table-striped table-dark">
						<thead>
							<tr>
								<td colspan="4">
									<h3 class="m-0 text-center font-weight-bold text-light">
										{{ pageData.services[0].name }}
									</h3>
								</td>
							</tr>
							<tr>
								<td></td>
								<td class="text-center font-weight-bold text-primary">
									{{ pageData.services[0].variants[0].name }}
								</td>
								<td class="text-center font-weight-bold text-primary">
									{{ pageData.services[0].variants[1].name }}
								</td>
								<td class="text-center font-weight-bold text-primary">
									{{ pageData.services[0].variants[2].name }}
								</td>
							</tr>
						</thead>

						<tbody class="text-primary">
							<tr>
								<td class="text-center font-weight-bold">Complete Informative Pages</td>
								<td class="text-center font-weight-bold">✓</td>
								<td class="text-center font-weight-bold">✓</td>
								<td class="text-center font-weight-bold">✓</td>
							</tr>
							<tr>
								<td class="text-center font-weight-bold">Blog</td>
								<td class="text-center font-weight-bold">✓</td>
								<td class="text-center font-weight-bold">✓</td>
								<td class="text-center font-weight-bold">✓</td>
							</tr>
							<tr>
								<td class="text-center font-weight-bold">Full SEO</td>
								<td class="text-center font-weight-bold">✓</td>
								<td class="text-center font-weight-bold">✓</td>
								<td class="text-center font-weight-bold">✓</td>
							</tr>
							<tr>
								<td class="text-center font-weight-bold">Online Store</td>
								<td></td>
								<td class="text-center font-weight-bold">✓</td>
								<td class="text-center font-weight-bold">✓</td>
							</tr>
							<tr>
								<td class="text-center font-weight-bold">Mobile App</td>
								<td></td>
								<td></td>
								<td class="text-center font-weight-bold">✓</td>
							</tr>
							<tr>
								<td class="text-center border-top border-primary font-weight-bold">
									Price
								</td>
								<td class="text-center border-top border-primary font-weight-bold">
									{{ pageData.services[0].variants[0].price }}
								</td>
								<td class="text-center border-top border-primary font-weight-bold">
									{{ pageData.services[0].variants[1].price }}
								</td>
								<td class="text-center border-top border-primary font-weight-bold">
									{{ pageData.services[0].variants[2].price }}
								</td>
							</tr>
						</tbody>
					</table>
				</div>
			</BCol>

			<BCol cols="12">
				<div class="mb-5 shadow table-holder">
					<table class="m-0 table table-striped table-dark shadow">
						<thead>
							<tr>
								<td colspan="4">
									<h3 class="m-0 text-center font-weight-bold text-light">
										{{ pageData.services[1].name }}
									</h3>
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
							<tr>
								<td class="text-center border-top border-primary font-weight-bold text-primary">
									Price
								</td>
								<td class="text-center border-top border-primary font-weight-bold text-primary">
									{{ pageData.services[1].variants[0].price }}
								</td>
								<td class="text-center border-top border-primary font-weight-bold text-primary">
									{{ pageData.services[1].variants[1].price }}
								</td>
								<td class="text-center border-top border-primary font-weight-bold text-primary">
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