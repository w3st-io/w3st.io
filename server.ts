// [IMPORT]
import bodyParser from "body-parser"
import history from "connect-history-api-fallback"
import cors from "cors"
import express from "express"
import http from "http"
import path from "path"

// [IMPORT] Personal //
import config from "./s-config"


// [REQUIRE] Personal // Other // API // Pages //
const rateLimiter = require("./s-rate-limiters")
const a_ = require("./s-routes/api")
const fsp = require("./s-routes/api/fsp")
const p_ = require( "./s-routes/pages")
const p_blog = require( "./s-routes/pages/blog")
const p_code = require( "./s-routes/pages/code")
const p_contact = require( "./s-routes/pages/contact")
const p_blog_read = require("./s-routes/pages/blog/read")
const f_ = require ("./s-routes/fun")


// [EXPRESS + SERVER]
const app = express()
const server = http.createServer(app)


// [USE] Default Stuff // Set static Folder // Rate-Limiter //
app
	.use(bodyParser.json())
	.use(bodyParser.urlencoded({ extended: false }))
	.use(history({
		rewrites: [
			{
				from: /^\/api*\/*fsp/,
				to: function(context) {
					return context.parsedUrl.path
				}
			},
			{
				from: /^\/pages\/*$/,
				to: function(context) {
					return context.parsedUrl.path
				}
			},
			{
				from: /^\/fun\/*$/,
				to: function(context) {
					return context.parsedUrl.path
				}
			}
		]
	}))
	.use(cors())
	.use(rateLimiter.limiter)
;


// [USE] Personal // API // Pages //
app
	.use("/api", a_)
	.use("/api/fsp", fsp)
	.use("/pages", p_)
	.use("/pages/blog", p_blog)
	.use("/pages/code", p_code)
	.use("/pages/contact", p_contact)
	.use("/pages/blog/read", p_blog_read)
;


// [USE][ROUTE][FUN]
app.use("/fun", f_)


// [HEROKU] Set Static Folder for Heroku //
if (config.NODE_ENV == "production") {
	app.use(express.static("client/dist"))

	app.get("*", (req: express.Request, res: express.Response) => {
		res.sendFile(path.resolve(__dirname, "client", "dist", "index.html"))
	})
}


// [LISTEN]
server.listen(
	config.port,
	() => console.log(`Server started on port: ${config.port}`)
)