<template>
	<BContainer class="py-6 text-light">
		{{ resData }}
		<div v-if="!pageLoading">
			<StripeCheckout
				ref="checkoutRef"
				mode="payment"
				:pk="publishableKey"
				:line-items="lineItems"
				:success-url="successURL"
				:cancel-url="cancelURL"
				@loading="v => loading = v"
			/>

			<BButton @click="submit">Pay Now</BButton>
		</div>

		<h6 class="text-danger">{{ error }}</h6>
	</BContainer>
</template>

<script>
	import { StripeCheckout } from '@vue-stripe/vue-stripe'

	import PageService from '../services/PageService'

	export default {
		components: {
			StripeCheckout,
		},

		data () {
			
			return {
				pageLoading: true,

				resData: {},
				error : '',

				loading: false,
				publishableKey: '',
				lineItems: [
					{
						// The id of the one-time price you created in your Stripe dashboard
						price: '',
						quantity: 1,
					},
				],
				successURL: 'http://www.google.com',
				cancelURL: 'http://www.yahoo.com',
			}
		},

		methods: {
			async getPageData() {
				try {
					this.resData = await PageService.s_purchaseWahSubscription()
				}
				catch (err) { this.error = err }
			},

			submit() {
				// You will be redirected to Stripe's secure checkout page
				this.$refs.checkoutRef.redirectToCheckout()
			},
		},

		async created() {
			await this.getPageData()

			this.pageLoading = false
		},
	}
</script>