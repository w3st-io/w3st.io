<template>
	<BContainer class="py-6 text-light">
		<BCard bg-variant="dark" border-variant="primary" no-body class="bg-transparent">
			<BCardHeader class="border-primary">
				<h1 class="my-4 text-center text-uppercase text-primary text-spread-sm">
					Purchase Web App Development
				</h1>
			</BCardHeader>

			<BCardBody class="">
				<BRow v-if="!loading" class="">
					<!-- Standard -->
					<BCol cols="12" lg="4">
						<StripeCheckout
							ref="standardWad"
							mode="payment"
							:pk="stripe.publishableKey"
							:line-items="stripe.standard.lineItems"
							:success-url="stripe.successURL"
							:cancel-url="stripe.cancelURL"
							@loading="v => stripe.standard.loading = v"
						/>

						<h3 class="my-5 text-center text-uppercase">Standard</h3>
						<BButton
							variant="success"
							class="w-100 text-uppercase"
							size="lg"
							pill
							@click="submit(0)"
						>Purchase</BButton>
					</BCol>

					<!-- Advanced -->
					<BCol cols="12" lg="4">
						<StripeCheckout
							ref="advancedWad"
							mode="payment"
							:pk="stripe.publishableKey"
							:line-items="stripe.advanced.lineItems"
							:success-url="stripe.successURL"
							:cancel-url="stripe.cancelURL"
							@loading="v => stripe.advanced.loading = v"
						/>

						<h3 class="my-5 text-center text-uppercase">Advanced</h3>
						<BButton
							variant="success"
							class="w-100 text-uppercase"
							size="lg"
							pill
							@click="submit(1)"
						>Purchase</BButton>
					</BCol>

					<!-- Pro -->
					<BCol cols="12" lg="4">
						<StripeCheckout
							ref="proWad"
							mode="payment"
							:pk="stripe.publishableKey"
							:line-items="stripe.pro.lineItems"
							:success-url="stripe.successURL"
							:cancel-url="stripe.cancelURL"
							@loading="v => stripe.pro.loading = v"
						/>

						<h3 class="my-5 text-center text-uppercase">Pro</h3>
						<BButton
							variant="success"
							class="w-100 text-uppercase"
							size="lg"
							pill
							@click="submit(2)"
						>Purchase</BButton>
					</BCol>
				</BRow>

				<BRow v-if="error">
					<BCol cols="12">
						<h6 class="text-primary">{{ resData }}</h6>
						<h6 class="text-danger">{{ error }}</h6>
					</BCol>
				</BRow>
			</BCardBody>
		</BCard>
	</BContainer>
</template>

<script>
	import { StripeCheckout } from '@vue-stripe/vue-stripe'

	import PageService from '../../services/PageService'

	export default {
		components: {
			StripeCheckout,
		},

		data () {
			return {
				loading: true,
				resData: {},
				error : '',

				stripe: {
					publishableKey: '',

					successURL: '',
					cancelURL: '',

					standard: {
						loading: false,
						lineItems: [
							{
								price: '',
								quantity: 1,
							},
						],
					},

					advanced: {
						loading: false,
						lineItems: [
							{
								price: '',
								quantity: 1,
							},
						],
					},

					pro: {
						loading: false,
						lineItems: [
							{
								price: '',
								quantity: 1,
							},
						],
					},
				},
			}
		},

		methods: {
			async getPageData() {
				try {
					this.resData = await PageService.s_purchase_wad({
						promo: this.$route.query.promo
					})

					if (this.resData.status) {
						this.stripe.publishableKey = this.resData.stripePublishableKey

						this.stripe.standard.lineItems[0].price = this.resData.standardWadPrice_id
						this.stripe.advanced.lineItems[0].price = this.resData.advancedWadPrice_id
						this.stripe.pro.lineItems[0].price = this.resData.proWadPrice_id

						this.stripe.successURL = this.resData.successURL
						this.stripe.cancelURL = this.resData.cancelURL
					}
				}
				catch (err) { this.error = err }
			},

			submit(option) {
				switch (option) {
					case 0:
						this.$refs.standardWad.redirectToCheckout()
					break

					case 1:
						this.$refs.advancedWad.redirectToCheckout()
					break;

					case 2:
						this.$refs.proWad.redirectToCheckout()
					break
				
					default:
						this.error = 'Invalid Submit'
					break
				}
			},
		},

		async created() {
			await this.getPageData()

			this.loading = false
		},
	}
</script>