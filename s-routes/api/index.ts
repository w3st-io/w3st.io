// [REQUIRE]
import cors from 'cors'
import express from 'express'

// [REQUIRE] Personal //
import config from '../../s-config'


// [EXPRESS + USE]
const router = express.Router().use(cors())


// [MAIN-ROUTE]
router.get(
	'/',
	async (req: express.Request, res: express.Response) => {
		res.send({
			executed: true,
			status: true,
			node_env: config.NODE_ENV,
			__dirname: __dirname
		})
	}
)

// [EXPORT]
module.exports = router