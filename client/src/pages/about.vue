<template>
	<BContainer class="py-5">
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

			<BCardHeader>
				<BRow>
					<BCol cols="12" lg="8">
						<div class="m-lg-5">
							<div class="m-xl-5 text-center">
								<p class="h5 mb-3 font-weight-bold">
									{{ companyInfo.description }}
								</p>
							</div>
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
		max-height: 300px;

		@media (max-width: 576px) {
			width: 200px;
			height: 200px;
		}
	}
</style>