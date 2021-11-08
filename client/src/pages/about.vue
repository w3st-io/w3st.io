<template>
	<BContainer class="py-6">
		<BCard
			bg-variant="dark"
			text-variant="light"
			no-body
			class="m-auto shadow bg-transparent"
			border-variant="primary"
		>
			<BCardHeader class="border-bottom border-primary">
				<h1 class="my-4 text-center font-weight-bold text-primary">
					About <span v-html="companyInfo.nameHTML"></span>
				</h1>
			</BCardHeader>

			<BCardBody class="py-5">
				<BRow>
					<BCol cols="12" lg="8">
						<div class="mx-xl-5">
							<p class="mb-5 h5 text-center font-weight-bold">
								{{ companyInfo.description }}
							</p>

							<RouterLink to="/contact">
								<BButton
									variant="outline-primary"
									size="lg"
									class="font-weight-bold"
									pill
								>Contact Us Today</BButton>
							</RouterLink>
						</div>
					</BCol>
					
					<BCol cols="12" lg="4">
						<lottie-player
							src="https://assets5.lottiefiles.com/packages/lf20_3jmvq04g.json"
							class="w-100 text-center mx-auto lottie"
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
	import companyInfo from '../defaults/companyInfo'

	export default {
		data() {
			return {
				companyInfo: companyInfo
			}
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