<template>
	<!-- Content -->
	<BContainer>
		<BCard
			bg-variant="primary"
			text-variant="light"
			no-body
			class="w-100 mx-auto my-5 shadow"
			style="max-width: 1000px;"
		>
			<BCardHeader>
				<BCol cols="12">
					<h3 class="m-0 text-center font-weight-bold">Contact Us</h3>
				</BCol>
			</BCardHeader>

			<BCardHeader>
				<BRow>
					<BCol cols="12" lg="7" class="px-md-5 py-3">
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
								<h6 class="m-0 font-weight-bold">
									w3st.io2021@gmail.com
								</h6>
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
								<h6 class="m-0 font-weight-bold">
									201-362-6859
								</h6>
							</BButton>
						</a>
					</BCol>

					<BCol cols="12" lg="5">
						<lottie-player
							src="https://assets1.lottiefiles.com/packages/lf20_5o8zf8kq.json"
							class="w-100 text-center mx-auto"
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