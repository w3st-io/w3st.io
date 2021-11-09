// [IMPORT] //
import axios from 'axios'


// [AUTH-TOKEN-SETUP] //
const authAxios = async () => {
	return axios.create({
		baseURL: '/pages',
		headers: {
			authorization: `Bearer ${localStorage.usertoken}`,
			authorization2: `Bearer ${localStorage.admintoken}`
		}
	})
}


export default {
	authAxios,


	s_: async function () {
		try {
			const authAxios = await this.authAxios()
	
			return (await authAxios.get('/')).data
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				error: err
			}
		}
	},


	s_about: async function () {
		try {
			const authAxios = await this.authAxios()
	
			return (await authAxios.get('/about')).data
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				error: err
			}
		}
	},


	s_admin_functions_commentReports: async function (sort, limit, page) {
		try {
			const authAxios = await this.authAxios()
	
			return (
				await authAxios.get(
					`/admin/functions/comment-reports/${sort}/${limit}/${page}`
				)
			).data
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				error: err
			}
		}
	},


	s_post: async function (sort, limit, page) {
		try {
			const authAxios = await this.authAxios()
	
			return (await authAxios.get(`/post/${sort}/${limit}/${page}`)).data
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				error: err
			}
		}
	},


	s_comment_edit: async function (comment_id) {
		try {
			const authAxios = await this.authAxios()
	
			const reqData = await authAxios.get(`/comment/edit/${comment_id}`)
	
			return reqData.data
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				message: `PageService: Error --> ${err}`
			}
		}
	},


	s_purchase_wad: async function ({ promo }) {
		try {
			const authAxios = await this.authAxios()
	
			const reqData = await authAxios.get(`/purchase/wad?promo=${promo}`)
	
			return reqData.data
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				message: `PageService: Error --> ${err}`
			}
		}
	},


	s_purchase_wahSubscription: async function ({ promo }) {
		try {
			const authAxios = await this.authAxios()
	
			const reqData = await authAxios.get(
				`/purchase/wah-subscription?promo=${promo}`
			)
	
			return reqData.data
		}
		catch (err) {
			return {
				executed: false,
				status: false,
				message: `PageService: Error --> ${err}`
			}
		}
	},
}
