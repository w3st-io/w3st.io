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
		
							standardWadPrice_id: config.api.stripe.wad.discounted.standardPrice_id,
							advancedWadPrice_id: config.api.stripe.wad.discounted.advancedPrice_id,
							proWadPrice_id: config.api.stripe.wad.discounted.proPrice_id,
						})
					break
				
					default:
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
export default router