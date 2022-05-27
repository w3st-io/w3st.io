// [IMPORT] Personal //
import config from './s-config'


// [REQUIRE] //
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const http = require('http')
const path = require('path')


// [REQUIRE] Personal // Other // API // Pages //
const rateLimiter = require('./s-rate-limiters')

const a_ = require('./s-routes/api')

const p_purchase_wad = require('./s-routes/pages/purchase/wad')
const p_purchase_wah = require('./s-routes/pages/purchase/wah')
const p_purchase_was = require('./s-routes/pages/purchase/was')


// [EXPRESS + SERVER] //
const app = express()
const server = http.createServer(app)


// [USE] // Default Stuff // Set static Folder // Rate-Limiter //
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(express.static(__dirname + '/s-static'))
app.use(rateLimiter.limiter)


// [USE] Personal // API // Pages //
app.use('/api', a_)

app.use('/pages/purchase/wad', p_purchase_wad)
app.use('/pages/purchase/wah', p_purchase_wah)
app.use('/pages/purchase/was', p_purchase_was)


// [HEROKU] Set Static Folder for Heroku //
if (config.NODE_ENV == 'production') {
	app.use(express.static('client/dist'))

	app.get('*', (req: Request, res: any) => {
		res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
	})
}


// [LISTEN] //
server.listen(config.port, () => {
	console.log(`Server started on port: ${config.port}`)
})