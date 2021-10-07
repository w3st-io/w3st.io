<template>
	<!-- Content -->
	<BContainer>
		<BCard
			bg-variant="dark"
			text-variant="primary"
			class="w-100 mx-auto my-5 shadow"
			style="max-width: 1000px;"
		>
			<!-- [R1] -->
			<BRow class="">
				<!-- Get a Quote -->
				<BCol cols="12" sm="12" lg="8">
					<div class="p-lg-5">
						<h1 class="mb-5 text-center font-weight-bold">Contact Us</h1>

						<a href="mailto:w3st.io2021@gmail.com">
							<h5 class="text-center text-light">
								Email: w3st.io2021@gmail.com
							</h5>
						</a>
						<br>

						<a href="tel:2013626859">
							<h5 class="mb-4 text-center text-light">
								Cell: 201-362-6859
							</h5>
						</a>
					</div>
				</BCol>

				<BCol cols="12" sm="12" lg="4">
					<lottie-player
						src="https://assets5.lottiefiles.com/packages/lf20_qumw8rhu.json"
						class="text-center mx-auto lottie-size"
						background="transparent"
						speed="1"
						loop
						autoplay
					/>
				</BCol>
			</BRow>
		</BCard>
	</BContainer>
</template>

<style lang="scss" scoped>
	.lottie-size {
		width: 300px;
		height: 300px;

		@media (max-width: 768px) {
			width: 200px;
			height: 200px;
		}
	}
</style>