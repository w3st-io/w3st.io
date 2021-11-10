<template>
	<BContainer class="py-6">
		<!-- [WEB-APP-HOSTING] -->
		<BCard
			bg-variant="dark"
			text-variant="light"
			border-variant="primary"
			no-body
			class="mb-3 mb-md-5 bg-transparent "
		>
			<BCardHeader class="border-primary">
				<h1 class="my-4 text-center text-primary text-uppercase text-spread-sm">
					Our Services
				</h1>
			</BCardHeader>

			<BCardHeader
				v-for="(s, i) in pageData.services"
				:key="i"
				cols="12"
				class="py-5"
			>
				<BRow>
					<BCol cols="12" md="6" order="1" :order-md="isEven(i)" class="bg-primary-transparent">
						<div class="px-md-4">
							<div class="px-lg-3">
								<div class="px-xl-1">
									<h3 class="mb-5 text-center text-primary text-uppercase">
										{{ s.name }}
									</h3>

									<p class="h5 mb-5 text-center font-weight-bold text-spread-sm">
										{{ s.descriptions[0] }}
									</p>
								
									<!-- Read More / Contact -->
									<div class="text-center">
										<!-- Read More -->
										<RouterLink v-if="s.id" :to="`/services/${s.id}`">
											<BButton
												variant="outline-primary"
												class="w-100"
												size="lg"
												pill
												style="max-width: 300px"
											>
												<h5 class="m-0 text-uppercase">
													Learn More
												</h5>
											</BButton>
										</RouterLink>

										<!-- Get Quote -->
										<RouterLink v-else to="/services/contact">
											<BButton
												variant="outline-primary"
												class="w-100"
												size="lg"
												pill
												style="max-width: 300px"
											>
												<h5 class="m-0 text-uppercase">
													Get Quote
												</h5>
											</BButton>
										</RouterLink>
									</div>


								</div>
							</div>
						</div>
					</BCol>

					<BCol cols="12" md="6" order="0" :order-md="isOdd(i)">
						<lottie-player
							:src="s.lottiefilesLink"
							class="mx-auto text-center lottie"
							style="max-width: 300px;"
							background="transparent"
							speed="1"
							loop
							autoplay
						/>
					</BCol>
				</BRow>
			</BCardHeader>
		</BCard>
	</BContainer>
</template>

<script>
	// [IMPORT] Personal //
	import pageData from '../../defaults/companyInfo'

	export default {
		data() {
			return {
				pageData: pageData,

				sliderOptions: {
					items: this.totalOnLg - 2,
					gutter: 20,
					nav: false,
					controls: false,
					loop: true,
					autoplay: true,
					autoplayButtonOutput: false,
					autoplayTimeout: 2000,
				},
			}
		},

		methods: {
			isEven(value) {
				if (value % 2 == 0) { return 1 }
				else { return 0 }
			},

			isOdd(value) {
				if (value % 2 == 0) { return 0 }
				else { return 1 }
			},
		},
	}
</script>

<style lang="scss" scoped>
	.lottie {
		width: 100%;

		@media (max-width: 752px) {
			width: 200px;
		}
	}
</style>