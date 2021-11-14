<template>
	<BContainer class="py-6">
		<BRow>
			<BCol
				cols="12" md="6"
				v-for="(s, i) in pageData.services"
				:key="i"
				class="d-flex align-items-stretch"
			>
				<BCard
					bg-variant="primary"
					border-variant="dark"
					text-variant="dark"
					no-body
					class="w-100 mb-5"
				>
					<BCardHeader class="border-dark">
						<h2 class="my-4 text-center text-uppercase text-light">
							{{ s.name }}
						</h2>
					</BCardHeader>

					<BCardBody class="p-0 border-0">
						<lottie-player
							:src="s.lottiefilesLink"
							class="mx-auto text-center lottie"
							style="max-width: 200px;"
							background="transparent"
							speed="1"
							loop
							autoplay
						/>
					</BCardBody>

					<BCardBody class="border-0">
						<p class="h6 text-center font-weight-bold text-spread-sm">
							{{
								s.descriptions[0].length > 200 ?
									s.descriptions[0].substring(0, 200 - 3) + '...' :
									s.descriptions[0]
							}}
						</p>
					</BCardBody>

					<BCardFooter class="border-dark">
						<!-- Read More / Contact -->
						<div class="text-center">
							<!-- Read More -->
							<RouterLink v-if="s.id" :to="`/services/${s.id}`">
								<BButton
									variant="dark"
									class="w-100 my-2"
									size="lg"
								>
									<h5 class="m-0 text-uppercase">
										Learn More
									</h5>
								</BButton>
							</RouterLink>

							<!-- Get Quote -->
							<RouterLink v-else to="/services/contact">
								<BButton
									variant="dark"
									class="w-100 my-2"
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
					</BCardFooter>
				</BCard>
			</BCol>
		</BRow>
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