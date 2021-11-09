// [REQUIRE] //
const axios = require('axios')
const cors = require('cors')
const express = require('express')


// [REQUIRE] Personal //
const config = require('../../s-config')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


// [MAIN-ROUTE] //
router.get(
	'/',
	async (req, res) => {
		const stripePublishableKey = config.api.stripe.publishableKey
		const standardWahPrice_id = config.api.stripe.standardWahPrice_id
		const advancedWahPrice_id = config.api.stripe.advancedWahPrice_id
		const proWahPrice_id = config.api.stripe.proWahPrice_id

		res.send({
			executed: true,
			status: true,
			stripePublishableKey: stripePublishableKey,
			standardWahPrice_id: standardWahPrice_id,
			advancedWahPrice_id: advancedWahPrice_id,
			proWahPrice_id: proWahPrice_id,
		})
	}
)

// [EXPORT] //
module.exports = router