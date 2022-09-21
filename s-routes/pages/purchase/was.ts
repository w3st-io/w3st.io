// [REQUIRE]
import cors from 'cors'
import express from 'express'
import validator from 'validator'

// [REQUIRE] Personal //
import config from '../../../s-config'


// [EXPRESS + USE]
const router = express.Router().use(cors())


// [MAIN-ROUTE]
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

							standardWasPrice_id: config.api.stripe.was.discounted.standardPrice_id,
						})
					break
				
					default:
						res.send({
							executed: true,
							status: true,
							stripePublishableKey: config.api.stripe.publishableKey,
							successURL: `${config.app.baseURL.client}/purchase/successful`,
							cancelURL: `${config.app.baseURL.client}/purchase/unsuccessful`,

							standardWasPrice_id: config.api.stripe.was.standardPrice_id,
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

// [EXPORT]
module.exports = router