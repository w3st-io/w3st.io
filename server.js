// [REQUIRE] //
const bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const http = require('http')
const path = require('path')
const socketIO = require('socket.io')


// [REQUIRE] Personal // Other // API // Pages //
const config = require('./s-config')
const s_socket = require('./s-socket')
const rateLimiter = require('./s-rate-limiters')

const a_ = require('./s-routes/api')

const p_services = require('./s-routes/pages/services')


// [EXPRESS + SERVER] //
const app = express()
const server = http.createServer(app)


// [SOCKET.IO] //
const io = socketIO.listen(server)
s_socket.start(io)
app.io = io


// [USE] // Default Stuff // Set static Folder // Rate-Limiter //
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(express.static(__dirname + '/s-static'))
app.use(rateLimiter.limiter)


// [USE] Personal // API // Pages //
app.use('/api', a_)

app.use('/pages/services', p_services)


// [HEROKU] Set Static Folder for Heroku //
if (config.NODE_ENV == 'production') {
	app.use(express.static('client/dist'))

	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
	})
}


// [LISTEN] //
server.listen(config.port, () => { console.log(`server started on port: ${config.port}`) })