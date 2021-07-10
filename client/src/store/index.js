// [IMPORT] //
import io from 'socket.io-client'
import Vue from 'vue'
import Vuex from 'vuex'


// [USE] //
Vue.use(Vuex)


export default new Vuex.Store({
	state: {
		node_env: '',

		showIntro: true,
		loading: false,

		userLogged: false,
		adminLogged: false,

		showMenu: false,

		user_decoded: {},
		admin_decoded: {},

		iexKey: '',
		
		socket:
			localStorage.node_env == 'development' ?
				io('http://localhost:5000') : io()
	},

	// Syncrous //
	mutations: {
		isLoading(state) { state.loading = true },

		isNotLoading(state) { state.loading = false },
	},

	// Asyncronous //
	actions: {},

	getters: {},
	
	modules: {},
});
