<template>
	<BContainer class="my-5">
		<!-- [WEB-APP-HOSTING] -->
		<BCard
			bg-variant="primary"
			text-variant="light"
			no-body
			class="mb-3 mb-md-5"
		>
			<BCardHeader class="text-light">
				<h3 class="m-0 text-center font-weight-bold text-light">
					Our Services
				</h3>
			</BCardHeader>

			<BCardBody
				v-for="(s, i) in pageData.services"
				:key="i"
				cols="12"
				class="border-bottom bg-service"
				style="border-color: rgba(0, 0, 0, 0.125) !important;"
			>
				<BRow>
					<BCol cols="12" md="8" order="1" :order-md="isEven(i)">
						<div class="px-md-5">
							<div class="p-lg-3">
								<h3 class="mb-4 text-center font-weight-bold text-dark">
									{{ s.name }}
								</h3>

								<p class="font-weight-bold text-justify text-light">
									{{ s.descriptions[0] }}
								</p>
							</div>

							<div class="text-center my-3">
								<RouterLink :to="`/services/${s.id}`">
									<BButton
										variant="light"
										class="w-100 font-weight-bold"
										size="lg"
										style="max-width: 300px"
									>See Pricing</BButton>
								</RouterLink>
							</div>
						</div>
					</BCol>

					<BCol cols="12" md="4" order="0" :order-md="isOdd(i)">
						<lottie-player
							:src="s.lottiefilesLink"
							class="w-100 mx-auto text-center lottie"
							style=""
							background="transparent"
							speed="1"
							loop
							autoplay
						/>
					</BCol>
				</BRow>
			</BCardBody>
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
		width: 300px;
		height: 300px;

		@media (max-width: 576px) {
			width: 200px;
			height: 200px;
		}
	}

	.bg-service {
		background-color: rgba(0, 0, 0, 0.0) !important;
	}
</style>