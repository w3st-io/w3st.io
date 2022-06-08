// [REQUIRE] //
const axios = require('axios')
const Analytics = require('analytics-node')


// [IMPORT] Personal //
import config from '../../s-config'


// [ANALYTICS] //
const analytics = new Analytics(config.api.segments.writeKey)


module.exports = {
	handle: async ({ req }: any) => {
		try {
			analytics.page({ anonymousId: req.ip })

			return {
				executed: true,
				status: true,
			}

		}
		catch (err) {
			return {
				executed: false,
				status: false,
				message: `${err}`
			}
		}
	}
}