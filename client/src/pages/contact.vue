<template>
	<!-- Content -->
	<BContainer>
		<BCard
			bg-variant="primary"
			text-variant="light"
			no-body
			class="w-100 mx-auto my-5"
			style="max-width: 1000px;"
		>
			<BCardHeader>
				<BCol cols="12">
					<h3 class="m-0 text-center font-weight-bold">Contact Us</h3>
				</BCol>
			</BCardHeader>

			<BCardBody>
				<BRow>
					<BCol cols="12" sm="12" lg="8" class="px-5 py-3">
						<h2 class="mb-3 text-center font-weight-bold text-dark">
							Email
						</h2>
						<a href="mailto:w3st.io2021@gmail.com">
							<BButton
								variant="light"
								pill
								size="lg"
								class="w-100 mb-5"
							>
								<h4 class="m-0 font-weight-bold">
									w3st.io2021@gmail.com
								</h4>
							</BButton>
						</a>
						<br>

						<h2 class="mb-3 text-center font-weight-bold text-dark">
							Cell
						</h2>
						<a href="tel:2013626859">
							<BButton
								variant="light"
								pill
								size="lg"
								class="w-100 mb-5"
							>
								<h4 class="m-0 font-weight-bold">
									201-362-6859
								</h4>
							</BButton>
						</a>
					</BCol>

					<BCol cols="12" sm="12" lg="4">
						<lottie-player
							src="https://assets10.lottiefiles.com/packages/lf20_lgsx862o.json"
							class="text-center mx-auto lottie"
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

<style lang="scss" scoped>
	.lottie {
		width: 300px;
		height: 300px;

		@media (max-width: 768px) {
			width: 200px;
			height: 200px;
		}
	}
</style>