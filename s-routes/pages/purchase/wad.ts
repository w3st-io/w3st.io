// [REQUIRE]
import cors from "cors";
import express from "express";

// [IMPORT] Personal //
import config from "../../../s-config";


// [EXPRESS + USE]
const router = express.Router().use(cors());


// [INIT]
let returnObj = {
	executed: true,
	status: false,
	stripePublishableKey: config.api.stripe.publishableKey,
	successURL: `${config.app.baseURL.client}/purchase/successful`,
	cancelURL: `${config.app.baseURL.client}/purchase/unsuccessful`,
	location: "/purchase/wad",
	message: "",
};


// [MAIN-ROUTE]
router.get(
	"/",
	async (req: express.Request, res: express.Response) => {
		try {
			switch (req.query.promo) {
				case "discount":
					res.send({
						...returnObj,
						status: true,
						standardWadPrice_id: config.api.stripe.wad.discounted.standardPrice_id,
						advancedWadPrice_id: config.api.stripe.wad.discounted.advancedPrice_id,
						proWadPrice_id: config.api.stripe.wad.discounted.proPrice_id,
					});
				break;
			
				default:
					res.send({
						...returnObj,
						status: true,
						standardWadPrice_id: config.api.stripe.wad.standardPrice_id,
						advancedWadPrice_id: config.api.stripe.wad.advancedPrice_id,
						proWadPrice_id: config.api.stripe.wad.proPrice_id,
					})
				break;
			}
		}
		catch (err) {
			res.send({
				...returnObj,
				executed: false,
				message: err
			});
		}
	}
)

// [EXPORT
module.exports = router;