// [REQUIRE] //
import cors from 'cors'
import express from 'express'

// [REQUIRE] Personal //
const rh = require('./index.handler')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


// [MAIN-ROUTE] //
router.get(
	'/',
	async (req: any, res: any) => {
		res.send(await rh.handle({ req }))
	}
)

// [EXPORT] //
module.exports = router