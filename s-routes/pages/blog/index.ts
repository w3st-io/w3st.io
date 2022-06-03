// [REQUIRE] //
const cors = require('cors')
const express = require('express')

// [REQUIRE] Personal //
const rh = require('./index.handler')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


// [MAIN-ROUTE] //
router.get(
	'/',
	async (req: any, res: any) => {
		res.send(await rh.index())
	}
)

// [EXPORT] //
module.exports = router