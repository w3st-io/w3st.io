// [IMPORT] Personal //
import config from '../s-config'


// [REQUIRE] //
const Analytics = require('analytics-node')
const geoip = require('geoip-lite')


// [ANALYTICS] //
const analytics = new Analytics(config.api.segments.writeKey)


export default class Segment {
	/******************* [USER] *******************/
	// [Standard] //
	static page() {
		return async (req, res, next) => {
			try {
				const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress

				analytics.page({
					anonymousId: ip,
					properties: {
						ip: ip,
						ipLocation: geoip.lookup(ip),
						path: req.originalUrl,
						timeStamp: new Date(),
					}
				})
			}
			catch (err) { console.log(err) }

			next()
		}
	}
}