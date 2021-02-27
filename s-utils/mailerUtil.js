// ORDER: to, subject, type, user_id, clientEmail, name, message, position, html, attachments
// [REQUIRE] //
const nodemailer = require('nodemailer')
const validator = require('validator')


// [REQUIRE] Personal //
const config = require('../s-config') 


// [INIT] //
const service = config.EMAIL_SERVICE
const email = config.EMAIL
const emailPassword = config.EMAIL_PASSWORD
const auth = {
	user: email,
	pass: emailPassword
}


function fpiToEmail(type) {
	switch(type) {
		case 'billings':
			return config.BILLINGS_EMAIL 

		case 'careers':
			return config.CAREERS_EMAIL

		case 'designs':
			return config.DESIGNS_EMAIL

		case 'installs':
			return config.INSTALLS_EMAIL

		case 'report':
			return config.ADMIN_EMAIL

		case 'sales':
			return config.SALES_EMAIL

		case 'scheduling':
			return config.SCHEDULING_EMAIL

		case 'services':
			return config.SERVICES_EMAIL

		default:
			return config.ADMIN_EMAIL 
	}
}


// [GET-QUOTE] //
async function sendGetQuoteEmail({ subject, type, clientEmail, name, message, attachments }) {
	try {
		// [VALIDATE] subject //
		if (!validator.isAscii(subject)) {
			return {
				executed: true,
				status: false,
				message: 'mailerUtil: Invalid subject',
			}
		}

		// [VALIDATE] type //
		if (!validator.isAscii(type)) {
			return {
				executed: true,
				status: false,
				message: 'mailerUtil: Invalid type',
			}
		}

		// [VALIDATE] clientEmail //
		if (!validator.isEmail(clientEmail)) {
			return {
				executed: true,
				status: false,
				message: 'mailerUtil: clientEmail not an email',
			}
		}

		// [VALIDATE] name //
		if (!validator.isAscii(name)) {
			return {
				executed: true,
				status: false,
				message: 'mailerUtil: Invalid name',
			}
		}

		// [VALIDATE] name //
		if (!validator.isAscii(message)) {
			return {
				executed: true,
				status: false,
				message: 'mailerUtil: Invalid message (Must be Ascii)',
			}
		}

		// [VALIDATE] html xss //
		if (attachments) {
			if (!Array.isArray(attachments)) {
				return {
					executed: true,
					status: false,
					message: 'mailerUtil: Attachments must be an array',
				}
			}
		}

		// [INIT] //
		const to = fpiToEmail(type)
		const subject2 = `Client Subject: ${subject}`
		const html = `
			<h1>Customer Quote Request</h1>
			<h3 style="margin: 0;">Type: ${type}</h3>
			<h3 style="margin: 0;">Email: ${clientEmail}</h3>
			<h3 style="margin: 0;">Name: ${name}</h3>
			<h3 style="margin: 0; margin-top: 20px;">Message:</h3>
			<p>${message}</p>
		`

		const transporter = nodemailer.createTransport({
			service: service,
			auth: auth
		})

		// [SEND-MAIL] //
		await transporter.sendMail({
			from: email,
			to: to,
			subject: subject2,
			html: html,
			attachments: attachments,
		})

		return {
			executed: true,
			status: true,
			send: true,
			message: 'Email Sent',
		}
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			message: `mailerUtil: Error --> ${err}`,
		}
	}
}


// [GET-QUOTE] //
async function sendCareersEmail({ subject, clientEmail, name, message, position, attachments }) {
	try {
		// [VALIDATE] subject //
		if (!validator.isAscii(subject)) {
			return {
				executed: true,
				status: false,
				message: 'mailerUtil: Invalid subject',
			}
		}

		// [VALIDATE] clientEmail //
		if (!validator.isEmail(clientEmail)) {
			return {
				executed: true,
				status: false,
				message: 'mailerUtil: clientEmail not an email',
			}
		}

		// [VALIDATE] name //
		if (!validator.isAscii(name)) {
			return {
				executed: true,
				status: false,
				message: 'mailerUtil: Invalid name',
			}
		}

		// [VALIDATE] message //
		if (!validator.isAscii(message)) {
			return {
				executed: true,
				status: false,
				message: 'mailerUtil: Invalid message',
			}
		}

		// [VALIDATE] position //
		if (!validator.isAscii(position)) {
			return {
				executed: true,
				status: false,
				message: 'mailerUtil: Invalid position',
			}
		}

		// [VALIDATE] html xss //
		if (attachments) {
			if (!Array.isArray(attachments)) {
				return {
					executed: true,
					status: false,
					message: 'mailerUtil: Attachments must be an array',
				}
			}
		}

		// [INIT] //
		const to = fpiToEmail('careers')
		const subject2 = `Client Subject: ${subject}`
		const html = `
			<h1>Customer Quote Request</h1>
			<h3 style="margin: 0;">Type: Careers</h3>
			<h3 style="margin: 0;">Email: ${clientEmail}</h3>
			<h3 style="margin: 0;">Name: ${name}</h3>
			<h3 style="margin: 0;">Position: ${position}</h3>
			<h3 style="margin: 0; margin-top: 20px;">Message:</h3>
			<p>${message}</p>
		`

		const transporter = nodemailer.createTransport({
			service: service,
			auth: auth
		})

		// [SEND-MAIL] //
		await transporter.sendMail({
			from: email,
			to: to,
			subject: subject2,
			html: html,
			attachments: attachments,
		})

		return {
			executed: true,
			status: true,
			send: true,
			message: 'Email Sent',
		}
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			message: `mailerUtil: Error --> ${err}`,
		}
	}
}


// [EXPORT] //
module.exports = {
	sendGetQuoteEmail,
	sendCareersEmail,
}