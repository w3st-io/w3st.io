// [REQUIRE] //
require('dotenv').config()


// [EXPORT] //
module.exports = {
	// [APP] //
	NODE_ENV: process.env.NODE_ENV || 'development',

	// [PORT] //
	port: process.env.PORT || 5000,
}