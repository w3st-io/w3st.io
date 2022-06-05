<template>
	<BContainer class="py-6">
		<BCard
			bg-variant="primary"
			text-variant="light"
			no-body
			class="m-auto shadow"
			border-variant="dark"
		>
			<BCardHeader class="border-bottom border-dark">
				<h1 class="my-4 text-center text-dark text-uppercase text-spread-sm">
					About <span v-html="companyInfo.nameHTML"></span>
				</h1>
			</BCardHeader>

			<BCardHeader class="py-5 border-bottom border-dark">
				<BRow>
					<BCol cols="12" lg="7">
						<div class="mx-lg-5 my-5">
							<h3 class="mb-4 text-center text-uppercase text-dark">
								Who We Are
							</h3>
							<p
								class="mb-5 mx-auto h5 text-center font-weight-bold text-spread-sm"
								style="max-width: 600px;"
							>{{ companyInfo.description }}</p>

							<div class="text-center">
								<RouterLink to="/contact">
									<BButton
										variant="dark"
										size="lg"
										class="font-weight-bold"
										pill
									>Contact Us Today</BButton>
								</RouterLink>
							</div>
						</div>
					</BCol>
					
					<BCol cols="12" lg="5">
						<lottie-player
							src="https://assets5.lottiefiles.com/packages/lf20_3jmvq04g.json"
							class="my-5 w-100 text-center mx-auto lottie"
							background="transparent"
							speed="1"
							loop
							autoplay
						/>
					</BCol>
				</BRow>
			</BCardHeader>

			<BCardHeader>
				<BRow>
					<BCol cols="12" lg="5">
						<div class="my-5 text-center">
							<img
								src="https://images2.imgbox.com/f3/2f/7z8mFJYA_o.png"
								class="d-none d-lg-block w-100 text-center mx-auto"
								style="max-width: 300px;"
							/>
						</div>
					</BCol>

					<BCol cols="12" lg="7">
						<div class="mx-lg-5 my-5">
							<h3 class="mb-4 text-center text-uppercase text-dark">
								What We Believe In
							</h3>
							<p
								class="mb-5 mx-auto h5 text-center font-weight-bold text-spread-sm"
								style="max-width: 600px;"
							>{{ companyInfo.missionStatement }}</p>

							<div class="text-center">
								<RouterLink to="/services">
									<BButton
										variant="dark"
										size="lg"
										class="font-weight-bold"
										pill
									>Learn More</BButton>
								</RouterLink>
							</div>
						</div>
					</BCol>
				</BRow>
			</BCardHeader>
		</BCard>

		<Gallery />
	</BContainer>
</template>

<script>
	import Gallery from '../components/Gallery.vue'
	import companyInfo from '../defaults/companyInfo'

	export default {
		data() {
			return {
				companyInfo: companyInfo
			}
		},

		components: {
			Gallery
		},
	}
</script>

<style lang="scss" scoped>
	.lottie {
		width: 100%;
		max-height: 300px;

		@media (max-width: 576px) {
			width: 200px;
			height: 200px;
		}
	}
</style>