// [REQUIRE] //
require('dotenv').config()


// [EXPORT] //
module.exports = {
	// [APP] //
	NODE_ENV: process.env.NODE_ENV || 'development',

	// [PORT] //
	port: process.env.PORT || 5000,

	// [API] //
	api: {
		rptidePrivateKey: process.env.API__RPTIDE_PRIVATE_KEY || '',
		
		stripe: {
			publishableKey: process.env.API__STRIPE__PUBLISHABLE_KEY || '',

			standardWahPrice_id: process.env.API__STRIPE__STANDARD_WAH_PRICE_ID || '',
			advancedWahPrice_id: process.env.API__STRIPE__ADVANCED_WAH_PRICE_ID || '',
			proWahPrice_id: process.env.API__STRIPE__PRO_WAH_PRICE_ID || '',
		}
	}
}