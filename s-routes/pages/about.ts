// [IMPORT] //
import cors from 'cors'
import express from 'express'

// [IMPORT] Personal //
import Segment from '../../s-middleware/Segment'


// [EXPRESS + USE] //
const router = express.Router().use(cors())


// [MAIN-ROUTE] //
router.get(
	'/',
	Segment.page(),
	async (req: express.Request, res: express.Response) => {
		res.status(200).send();
	}
)

// [EXPORT] //
module.exports = router