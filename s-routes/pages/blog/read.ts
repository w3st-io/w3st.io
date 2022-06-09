// [IMPORT] //
import cors from 'cors'
import express from 'express'

// [IMPORT] Personal //
import Segment from '../../../s-middleware/Segment'


// [REQUIRE] Personal //
const rh = require('./read.handler')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


// [MAIN-ROUTE] //
router.get(
	'/:webcontent',
	Segment.page(),
	async (req: any, res: any) => {
		res.send(await rh.handle({ req }))
	}
)

// [EXPORT] //
module.exports = router