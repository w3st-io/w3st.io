// [REQUIRE] //
require('dotenv').config()


// [EXPORT] //
module.exports = {
	// [HEROKU] NODE_ENV - PORT //
	NODE_ENV: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 5000,

	// [APP] //
	app: {
		// [BASE-URL] //
		baseURL: {
			client: process.env.APP__BASE_URL || 'http://localhost:8080',
			server: process.env.APP__BASE_URL || 'http://localhost:5000',
		}
	},

	// [API] //
	api: {
		rptidePrivateKey: process.env.API__RPTIDE_PRIVATE_KEY || '',
		
		stripe: {
			publishableKey: process.env.API__STRIPE__PUBLISHABLE_KEY || '',

			standardWadPrice_id: process.env.API__STRIPE__STANDARD_WAD_PRICE_ID || '',
			advancedWadPrice_id: process.env.API__STRIPE__ADVANCED_WAD_PRICE_ID || '',
			proWadPrice_id: process.env.API__STRIPE__PRO_WAD_PRICE_ID || '',

			standardWahPrice_id: process.env.API__STRIPE__STANDARD_WAH_PRICE_ID || '',
			advancedWahPrice_id: process.env.API__STRIPE__ADVANCED_WAH_PRICE_ID || '',
			proWahPrice_id: process.env.API__STRIPE__PRO_WAH_PRICE_ID || '',
		}
	}
}