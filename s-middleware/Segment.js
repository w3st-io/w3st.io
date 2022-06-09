// [REQUIRE] //
const Analytics = require('analytics-node')


// [IMPORT] Personal //
import config from '../s-config'


// [ANALYTICS] //
const analytics = new Analytics(config.api.segments.writeKey)


export default class Segment {
	/******************* [USER] *******************/
	// [Standard] //
	static page() {
		return async (req, res, next) => {
			analytics.page({
				anonymousId: req.ip,
				properties: {
				  path: req.originalUrl,
				  timeStamp: new Date(),
				}
			})

			next()
		}
	}
}