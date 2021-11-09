// [REQUIRE] //
const cors = require('cors')
const express = require('express')


// [REQUIRE] Personal //
const config = require('../../../s-config')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


// [MAIN-ROUTE] //
router.get(
	'/',
	async (req, res) => {
		console.log(req.query);

		switch (req.query.promo) {
			case 'discount':
				console.log({
					standardWahPrice_id: config.api.stripe.wad.discounted.standardPrice_id,
					advancedWahPrice_id: config.api.stripe.wad.discounted.advancedPrice_id,
					proWahPrice_id: config.api.stripe.wad.discounted.proPrice_id,
				})
				res.send({
					executed: true,
					status: true,
					stripePublishableKey: config.api.stripe.publishableKey,
					successURL: `${config.app.baseURL.client}/purchase/successful`,
					cancelURL: `${config.app.baseURL.client}/purchase/unsuccessful`,

					standardWadPrice_id: config.api.stripe.wad.discounted.standardPrice_id,
					advancedWadPrice_id: config.api.stripe.wad.discounted.advancedPrice_id,
					proWadPrice_id: config.api.stripe.wad.discounted.proPrice_id,
				})
			break
		
			default:
				console.log({
					standardWahPrice_id: config.api.stripe.wad.standardPrice_id,
					advancedWahPrice_id: config.api.stripe.wad.advancedPrice_id,
					proWahPrice_id: config.api.stripe.wad.proPrice_id,
				})

				res.send({
					executed: true,
					status: true,
					stripePublishableKey: config.api.stripe.publishableKey,
					successURL: `${config.app.baseURL.client}/purchase/successful`,
					cancelURL: `${config.app.baseURL.client}/purchase/unsuccessful`,

					standardWadPrice_id: config.api.stripe.wad.standardPrice_id,
					advancedWadPrice_id: config.api.stripe.wad.advancedPrice_id,
					proWadPrice_id: config.api.stripe.wad.proPrice_id,
				})
			break
		}
	}
)

// [EXPORT] //
module.exports = router