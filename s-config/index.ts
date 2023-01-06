// [REQUIRE]
require('dotenv').config()


// [EXPORT]
export default {
	// [HEROKU] NODE_ENV - PORT //
	NODE_ENV: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 5000,

	// [APP]
	app: {
		// [BASE-URL]
		baseURL: {
			client: process.env.APP__BASE_URL || 'http://localhost:8080',
			server: process.env.APP__BASE_URL || 'http://localhost:5000',
		},

		showPrices: process.env.APP__SHOW_PRICES,
	},

	// [API]
	api: {
		rptide: {
			privateKey: process.env.API__RPTIDE__PRIVATE_KEY || '',
			webApp: process.env.API__RPTIDE__WEB_APP || '',
		},

		segments: {
			writeKey: process.env.API__SEGMENTS__WRITE_KEY,
		},
	}
}