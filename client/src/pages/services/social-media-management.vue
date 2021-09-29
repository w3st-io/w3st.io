<template>
	<BContainer class="my-5">
		<BRow>
			<BCol cols="12">
				<!-- [WEB-APP-HOSTING] -->
				<BCard
					bg-variant="dark"
					text-variant="primary"
					class="mb-5 shadow table-holder"
				>
					<BRow>
						<BCol cols="12">
							<h3 class="mb-5 text-center text-primary">
								{{ pageData.services[2].name }}
							</h3>
						</BCol>

						<BCol cols="12" md="6">
							<p class="h5 mb-4 p-5 text-light">
								{{ pageData.services[2].descriptions[0] }}
							</p>
						</BCol>

						<BCol cols="12" md="6">
							<BListGroup class="mx-auto">
								<BListGroupItem class="bg-dark text-primary">
									<h5 class="m-0 text-center">
										What You Get From Our SMM Service
									</h5>
								</BListGroupItem>

								<BListGroupItem
									v-for="(f, i) in pageData.services[2].features"
									:key="i"
									class="text-light bg-dark"
								>
									{{ f }}
								</BListGroupItem>
							</BListGroup>
						</BCol>
					</BRow>
				</BCard>
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