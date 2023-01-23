// [REQUIRE]
import cors from 'cors'
import express from 'express'


// [EXPRESS + USE]
const router = express.Router().use(cors())


// [MAIN-ROUTE]
router.get(
	'/fsp-audit-killers/:id',
	async (req: express.Request, res: express.Response) => {
		res.send({
			"name": "Nyoling #1",
			"image": "ipfs://QmaW6tLeiueN78BsVw2VycaaMWRVkzZRnjKWx4Wf8tC84b/1.png",
			"attributes": []
		})
	}
)

// [EXPORT]
module.exports = router