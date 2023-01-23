// [REQUIRE]
import cors from 'cors'
import express from 'express'


// [EXPRESS + USE]
const router = express.Router().use(cors())


// [MAIN-ROUTE]
router.get(
	'/:id',
	async (req: express.Request, res: express.Response) => {
		res.send({
			name: `#${req.params.id}`,
			image: "https://images2.imgbox.com/8f/c2/E0ms241I_o.png",
			attributes: []
		})
	}
)

// [EXPORT]
module.exports = router