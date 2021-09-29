<template>
	<BContainer class="my-5">
		<!-- [WEB-APP-DEVELOPMENT] -->
		<BRow class="mx-1 shadow">
			<BCol cols="12" class="bg-dark text-light">
				<div class="py-3">
					<h3 class="text-center text-primary">
						{{ pageData.services[0].name }}
					</h3>
					<h6 class="m-0 small text-center">
						{{ pageData.services[0].disclaimer }}
					</h6>
				</div>
			</BCol>

			<BCol cols="12" xl="4" class="bg-dark text-light">
				<div class="p-2 p-xl-5">
					<p>{{ pageData.services[0].descriptions[0] }}</p>
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