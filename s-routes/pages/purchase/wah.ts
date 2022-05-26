// [REQUIRE] //
const cors = require('cors')
const express = require('express')
const validator = require('validator')


// [IMPORT] Personal //
import config from '../../../s-config'


// [EXPRESS + USE] //
const router = express.Router().use(cors())


// [MAIN-ROUTE] //
router.get(
	'/',
	async (req: any, res: any) => {
		try {
			if (validator.isAscii(req.query.promo) || !req.query.promo) {
				switch (req.query.promo) {
					case 'discount':
						res.send({
							executed: true,
							status: true,
							stripePublishableKey: config.api.stripe.publishableKey,
							successURL: `${config.app.baseURL.client}/purchase/successful`,
							cancelURL: `${config.app.baseURL.client}/purchase/unsuccessful`,

							standardWahPrice_id: config.api.stripe.wah.discounted.standardPrice_id,
							advancedWahPrice_id: config.api.stripe.wah.discounted.advancedPrice_id,
							proWahPrice_id: config.api.stripe.wah.discounted.proPrice_id,
						})
					break
				
					default:
						res.send({
							executed: true,
							status: true,
							stripePublishableKey: config.api.stripe.publishableKey,
							successURL: `${config.app.baseURL.client}/purchase/successful`,
							cancelURL: `${config.app.baseURL.client}/purchase/unsuccessful`,

							standardWahPrice_id: config.api.stripe.wah.standardPrice_id,
							advancedWahPrice_id: config.api.stripe.wah.advancedPrice_id,
							proWahPrice_id: config.api.stripe.wah.proPrice_id,
						})
					break
				}
			}
			else {
				res.send({
					executed: true,
					status: false,
					message: 'Invalid Promo'
				})
			}
		}
		catch (err) {
			res.send({
				executed: false,
				status: false,
				message: err
			})
		}
	}
)

// [EXPORT] //
module.exports = router