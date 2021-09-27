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
		rptidePrivateKey: process.env.API__RPTIDE_PRIVATE_KEY || ''
	}
}