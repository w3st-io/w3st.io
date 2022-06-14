// [IMPORT] //
import bodyParser from 'body-parser'
import history from 'connect-history-api-fallback'
import cors from 'cors'
import express from 'express'
import http from 'http'
import path from 'path'

// [IMPORT] Personal //
import config from './s-config'


// [REQUIRE] Personal // Other // API // Pages //
const rateLimiter = require('./s-rate-limiters')
const a_ = require('./s-routes/api')
const p_ = require( './s-routes/pages')
const p_about = require( './s-routes/pages/about')
const p_blog = require( './s-routes/pages/blog')
const p_code = require( './s-routes/pages/code')
const p_contact = require( './s-routes/pages/contact')
const p_blog_read = require('./s-routes/pages/blog/read')
const p_purchase_wad = require('./s-routes/pages/purchase/wad')
const p_purchase_wah = require('./s-routes/pages/purchase/wah')
const p_purchase_was = require('./s-routes/pages/purchase/was')
const p_services = require( './s-routes/pages/services')
const f_ = require ('./s-route/fun')


// [EXPRESS + SERVER] //
const app = express()
const server = http.createServer(app)


// [USE] // Default Stuff // Set static Folder // Rate-Limiter //
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(history())  
app.use(cors())
app.use(express.static(__dirname + '/s-static'))
app.use(rateLimiter.limiter)


// [USE] Personal // API // Pages //
app.use('/api', a_)
app.use('/pages', p_)
app.use('/pages/about', p_about)
app.use('/pages/blog', p_blog)
app.use('/pages/code', p_code)
app.use('/pages/contact', p_contact)
app.use('/pages/blog/read', p_blog_read)
app.use('/pages/purchase/wad', p_purchase_wad)
app.use('/pages/purchase/wah', p_purchase_wah)
app.use('/pages/purchase/was', p_purchase_was)
app.use('/pages/services', p_services)


// [USE][ROUTE][FUN] //
app.use('/fun', f_)


// [HEROKU] Set Static Folder for Heroku //
if (config.NODE_ENV == 'production') {
	app.use(express.static('client/dist'))

	app.get('*', (req: any, res: any) => {
		res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
	})
}


// [LISTEN] //
server.listen(config.port, () => {
	console.log(`Server started on port: ${config.port}`)
})