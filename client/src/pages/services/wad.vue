<template>
	<BContainer class="py-6">
		<!-- [WEB-APP-DEVELOPMENT] -->
		<BCard
			bg-variant="primary"
			text-variant="light"
			border-variant="dark"
			no-body
			class="table-holder shadow"
		>
			<BCardHeader class="border-dark">
				<div class="my-4 text-dark">
					<h3 class="text-center text-uppercase text-spread-sm">
						{{ pageData.services[0].name }}
					</h3>

					<h6 class="m-0 small text-center text-secondary">
						{{ pageData.services[0].disclaimer }}
					</h6>
				</div>
			</BCardHeader>

			<BCardBody>
				<BRow>
					<BCol cols="12" md="6" class="d-none d-md-block">
						<lottie-player
							:src="pageData.services[0].lottiefilesLink"
							class="mx-auto text-center lottie"
							style="max-width: 300px;"
							background="transparent"
							speed="1"
							loop
							autoplay
						/>
					</BCol>

					<BCol cols="12" md="6">
						<p class="mx-md-5 my-5 text-center h5 font-weight-bold">
							{{ pageData.services[0].descriptions[0] }}
						</p>
					</BCol>

					<BCol cols="12">
						<div class="mb-5 table-holder">
							<table class="m-0 table table-dark bg-shade-less">
								<thead>
									<tr>
										<td></td>

										<!-- Features -->
										<td
											v-for="(f, i) in pageData.services[0].features"
											:key="i"
											class="text-center font-weight-bold"
											style="min-width: 100px;"
										>{{ f }}</td>

										<td></td>
									</tr>
								</thead>

								<tbody>
									<tr
										v-for="(v, i) in pageData.services[0].variants"
										:key="i"
									>
										<!-- Variant Name -->
										<td class="text-center font-weight-bold">
											{{ v.name }}
										</td>

										<!-- Feature Availability -->
										<td
											v-for="(f, ii) in pageData.services[0].features"
											:key="ii"
											class="text-center font-weight-bold"
										>
											<span
												v-if="ii <= v.featureLimit - 1"
											>✓</span>
										</td>

										<!-- Variant Name -->
										<td class="text-center">
											<BBadge variant="success">
												<h6 class="m-0 font-weight-bold">
													{{ v.price }}
												</h6>
											</BBadge>
										</td>
									</tr>
								</tbody>
							</table>
						</div>
					</BCol>
				</BRow>
			</BCardBody>

			<BCardFooter>
				<div class="text-center">
					<RouterLink to="/contact">
						<BButton
							variant="dark"
							class="w-100 my-2"
							size="lg"
						>
							<h4 class="m-0 font-weight-bold">Contact</h4>
						</BButton>
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

	.lottie {
		width: 100%;

		@media (max-width: 752px) {
			width: 200px;
		}
	}
</style>