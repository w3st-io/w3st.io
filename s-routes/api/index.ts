// [REQUIRE] //
const cors = require('cors')
const express = require('express')


// [REQUIRE] Personal //
import config from '../../s-config'


// [EXPRESS + USE] //
const router = express.Router().use(cors())


// [MAIN-ROUTE] //
router.get(
	'/',
	async (req: any, res: any) => {
		res.send({
			executed: true,
			status: true,
			node_env: config.NODE_ENV,
			__dirname: __dirname
		})
	}
)

// [EXPORT] //
export default router