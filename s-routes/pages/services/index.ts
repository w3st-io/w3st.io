// [IMPORT] //
import cors from 'cors'
import express from 'express'

// [IMPORT] Personal //
import Segment from '../../../s-middleware/Segment'


// [EXPRESS + USE] //
const router = express.Router().use(cors())


// [MAIN-ROUTE] //
router.get(
	'/',
	Segment.page(),
	async (req: any, res: any) => {
		res.send()
	}
)

// [EXPORT] //
module.exports = router