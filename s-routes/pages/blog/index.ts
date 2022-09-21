// [IMPORT] //
import cors from 'cors'
import express from 'express'

// [IMPORT] Personal //
import Segment from '../../../s-middleware/Segment'


// [REQUIRE] Personal //
const rh = require('./index.handler')


// [EXPRESS + USE] //
const router = express.Router().use(cors())


// [MAIN-ROUTE] //
router.get(
	'/',
	Segment.page(),
	async (req: express.Request, res: express.Response) => {
		res.send(await rh.handle({ req }))
	}
)

// [EXPORT] //
module.exports = router