<template>
	<!-- Content -->
	<BContainer class="py-6">
		<BCard
			bg-variant="primary"
			text-variant="light"
			border-variant="dark"
			no-body
			class="w-100 mx-auto backlit"
			style="max-width: 800px;"
		>
			<BCardHeader class="border-dark bg-dark">
				<BCol cols="12">
					<h1 class="my-2 text-center text-primary text-spread-sm">
						Contact
					</h1>
				</BCol>
			</BCardHeader>

			<BCardHeader class="py-5 bg-light">
				<BRow>
					<BCol cols="12" lg="7" class="px-md-5 text-dark">
						<h2 class="mb-3 text-center">
							Email
						</h2>
						<div class="text-center">
							<a href="mailto:w3st.io2021@gmail.com">
								<BButton
									variant="secondary"
									size="lg"
									class="mb-4"
									pill
								>w3st.io2021@gmail.com</BButton>
							</a>
						</div>
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

<script>
	// [IMPORT]
	import axios from 'axios'

	export default {
		data() {
			return {
				authAxios: axios.create({
					baseURL: '/pages/contact',
				}),
			}
		},

		methods: {
			async getPageData() {
				try {
					this.resData = await this.authAxios.get('/')
				}
				catch (err) {
					this.error = err
				}
			},
		},

		async created() {
			await this.getPageData()
		},
	}
</script>