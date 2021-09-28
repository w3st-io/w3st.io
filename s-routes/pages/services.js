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
		const products = axios.get('/user?ID=12345')
		res.send({
			executed: true,
			status: true,
			products: products
		})
	}
)

// [EXPORT] //
module.exports = router