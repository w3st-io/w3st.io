// [IMPORT] //
import cors from 'cors'
import express from 'express'

// [IMPORT] Personal //
import config from '../../../s-config'
import Segment from '../../../s-middleware/Segment'


// [EXPRESS + USE] //
const router = express.Router().use(cors())


// [MAIN-ROUTE] //
router.get(
	'/',
	Segment.page(),
	async (req: any, res: any) => {
		res.send({
			showPrices: config.app.showPrices == 'false' ? false : true
		})
	}
)

// [EXPORT] //
module.exports = router