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
		stripePublishableKey = ''

		res.send({
			executed: true,
			status: true,
			stripePublishableKey: stripePublishableKey
		})
	}
)

// [EXPORT] //
module.exports = router