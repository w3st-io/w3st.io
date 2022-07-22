// [REQUIRE] //
require('dotenv').config()


// [EXPORT] //
export default {
	// [HEROKU] NODE_ENV - PORT //
	NODE_ENV: process.env.NODE_ENV || 'development',
	port: process.env.PORT || 5000,

	// [APP] //
	app: {
		// [BASE-URL] //
		baseURL: {
			client: process.env.APP__BASE_URL || 'http://localhost:8080',
			server: process.env.APP__BASE_URL || 'http://localhost:5000',
		},

		showPrices: process.env.APP__SHOW_PRICES,
	},

	// [API] //
	api: {
		rptide: {
			privateKey: process.env.API__RPTIDE__PRIVATE_KEY || '',
			webApp: process.env.API__RPTIDE__WEB_APP || '',
		},

		segments: {
			writeKey: process.env.API__SEGMENTS__WRITE_KEY,
		},

		stripe: {
			publishableKey: process.env.API__STRIPE__PUBLISHABLE_KEY || '',

			wad: {
				standardPrice_id: process.env.API__STRIPE__WAD__STANDARD_PRICE_ID || '',
				advancedPrice_id: process.env.API__STRIPE__WAD__ADVANCED_PRICE_ID || '',
				proPrice_id: process.env.API__STRIPE__WAD__PRO_PRICE_ID || '',

				discounted: {
					standardPrice_id: process.env.API__STRIPE__WAD__DISCOUNTED__STANDARD_PRICE_ID || '',
					advancedPrice_id: process.env.API__STRIPE__WAD__DISCOUNTED__ADVANCED_PRICE_ID || '',
					proPrice_id: process.env.API__STRIPE__WAD__DISCOUNTED__PRO_PRICE_ID || '',
				}
			},

			wah: {
				standardPrice_id: process.env.API__STRIPE__WAH__STANDARD_PRICE_ID || '',
				advancedPrice_id: process.env.API__STRIPE__WAH__ADVANCED_PRICE_ID || '',
				proPrice_id: process.env.API__STRIPE__WAH__PRO_PRICE_ID || '',

				discounted: {
					standardPrice_id: process.env.API__STRIPE__WAH__DISCOUNTED__STANDARD_PRICE_ID || '',
					advancedPrice_id: process.env.API__STRIPE__WAH__DISCOUNTED__ADVANCED_PRICE_ID || '',
					proPrice_id: process.env.API__STRIPE__WAH__DISCOUNTED__PRO_PRICE_ID || '',
				}
			},

			was: {
				standardPrice_id: process.env.API__STRIPE__WAS__STANDARD_PRICE_ID || '',
				discounted: {
					standardPrice_id: process.env.API__STRIPE__WAS__DISCOUNTED__STANDARD_PRICE_ID || '',
				}
			},
		},
	}
}