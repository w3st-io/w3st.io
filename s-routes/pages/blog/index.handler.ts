// [IMPORT] Personal //
import config from '../../../s-config'


// [REQUIRE]
const axios = require('axios')


// [AUTH-AXIOS]
const authAxios = axios.create({
	baseURL: 'https://www.rptide.com/api/web-content',
	headers: {
		authorization: `Bearer ${config.api.rptide.privateKey}`,
	}
})


module.exports = {
	handle: async ({ req }: any) => {
		try {
			const result = await authAxios.post(
				'/find-paginated/50/1',
				{
					webApp: `${config.api.rptide.webApp}`,
					visible: true,
					notInTags: ['pinned']
				}
			)

			const pinnedResults = await authAxios.post(
				'/find-paginated/50/1',
				{
					webApp: `${config.api.rptide.webApp}`,
					visible: true,
					tags: ['pinned']
				}
			)
			
			return {
				executed: true,
				status: true,
				webContents: result.data.webContents,
				pinnedWebContents: pinnedResults.data.webContents,
			}
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