// [IMPORT] //
import axios from 'axios'


// [AUTH-TOKEN-SETUP] //
async function authAxios() {
	return axios.create({
		baseURL: '/api/mail',
		headers: {
			authorization: `Bearer ${localStorage.usertoken}`,
			authorization2: `Bearer ${localStorage.admintoken}`
		}
	})
}


/******************* [URL + PORT] *******************/
async function s_getQuote({ subject, clientEmail, name, message }) {
	try {
		const authAxios = await this.authAxios()

		return (
			await authAxios.post(
				'/get-quote',
				{
					subject: subject,
					clientEmail: clientEmail,
					name: name,
					message: message,
				}
			)
		).data
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			error: `MailService: Error --> ${err}`,
		}
	}
}


async function s_careers(formData) {
	try {
		const authAxios = await this.authAxios()

		return (await authAxios.post('/careers', formData)).data
	}
	catch (err) {
		return {
			executed: false,
			status: false,
			error: `MailService: Error --> ${err}`,
		}
	}
}


// [EXPORT] //
export default {
	authAxios,
	s_getQuote,
	s_careers,
}