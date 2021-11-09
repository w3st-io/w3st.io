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
		res.send({
			executed: true,
			status: true,
			stripePublishableKey: config.api.stripe.publishableKey,
			standardWahPrice_id: config.api.stripe.standardWahPrice_id,
			advancedWahPrice_id: config.api.stripe.advancedWahPrice_id,
			proWahPrice_id: config.api.stripe.proWahPrice_id,
			successURL: `${config.app.baseURL.client}/purchase/successful`,
			cancelURL: `${config.app.baseURL.client}/purchase/unsuccessful`,
		})
	}
)

// [EXPORT] //
module.exports = router