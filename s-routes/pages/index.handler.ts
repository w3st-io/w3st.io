module.exports = {
	handle: async ({ req }: any) => {
		try {
			return {
				executed: true,
				status: true,
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