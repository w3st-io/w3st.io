// [REQUIRE] //
require('dotenv').config()


// [EXPORT] //
module.exports = {
	// [APP] //
	NODE_ENV: process.env.NODE_ENV || 'development',

	// [URL] //
	CLIENT_BASE_URL: process.env.BASE_URL || 'http://localhost:8080',
	SERVER_BASE_URL: process.env.BASE_URL || 'http://localhost:5000',

	// [PORT] //
	PORT: process.env.PORT || 5000,
	
	// [SECRET] //
	SECRET_KEY: process.env.SECRET_KEY || 'secret',
}