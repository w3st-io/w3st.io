// [REQUIRE] //
const cors = require('cors')
const express = require('express')
const path = require('path')


// [IMPORT] Personal //
import Segment from '../../s-middleware/Segment'


// [EXPRESS + USE] //
const router = express.Router().use(cors())


router.get(
	'/',
	Segment.page(),
	async (req, res) => {
		res.sendFile(path.resolve(__dirname, '../../s-static/index.html'))
	}
)


module.exports = router