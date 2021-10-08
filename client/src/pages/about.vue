<template>
	<BContainer class="my-5">
		<BCard
			bg-variant="primary"
			text-variant="light"
			no-body
			class="m-auto text-light shadow"
		>
			<BCardHeader>
				<BCol cols="12">
					<h3 class="m-0 text-center font-weight-bold text-light">
						About {{ companyInfo.name }}
					</h3>
				</BCol>
			</BCardHeader>

			<BCardHeader>
				<BRow>
					<BCol cols="12" lg="8">
						<div class="m-lg-5">
							<div class="m-xl-5 text-justify">
								<p class="h5 mb-3 font-weight-bold text-dark">
									{{ companyInfo.description }}
								</p>
								<p class="h5 font-weight-bold text-dark">
									{{ companyInfo.caption }}
								</p>
							</div>
						</div>
					</BCol>
					
					<BCol cols="12" lg="4">
						<lottie-player
							src="https://assets1.lottiefiles.com/packages/lf20_5o8zf8kq.json"
							class="w-100 text-center mx-auto lottie"
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

		@media (max-width: 576px) {
			width: 200px;
			height: 200px;
		}
	}
</style>