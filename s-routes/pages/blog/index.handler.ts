// [REQUIRE] //
const axios = require('axios')


// [IMPORT] Personal //
import config from '../../../s-config'


// [AUTH-AXIOS] //
const authAxios = axios.create({
	baseURL: 'https://www.rptide.com/api/user/web-content',
	headers: {
		authorization: `Bearer ${config.api.rptide.privateKey}`,
	}
})


module.exports = {
	handle: async ({ req }: any) => {
		try {
			const result = await authAxios.post(
				'/find-paginated/50/1',
				{ webApp: `${config.api.rptide.webApp}` }
			)
			
			return result.data
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				message: `${err}`
			}
		}
	}
}