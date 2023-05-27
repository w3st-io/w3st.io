// [IMPORT]
import Vue from 'vue'
import VueRouter from 'vue-router'


// [IMPORT] Personal //
import index from '../pages'
import blog from '../pages/blog'
import blog_read from '../pages/blog/read'
import code from '../pages/code'
import contact from '../pages/contact'
//import crypto from '../pages/crypto'
import emailSent from '../pages/email-sent'
import privacyPolicy from '../pages/privacy-policy'
import notFound from '../pages/404'


Vue.use(VueRouter)


const router = new VueRouter({
	mode: 'history',

	routes: [
		{
			path: '/',
			name: 'home',
			component: index,
			meta: {
				header: true,
				auth: true,
				title: 'Home'
			},
		},
		// Blog //
		{
			path: '/blog',
			name: 'blog',
			component: blog,
			meta: {
				header: true,
				auth: true,
				title: 'Blog'
			},
		},
		// Blog //
		{
			path: '/blog/read/:webcontent',
			name: 'blog_read',
			component: blog_read,
			meta: {
				header: true,
				auth: true,
				title: 'Blog'
			},
		},
		{
			path: '/crypto',
			name: 'crypto',
			component: blog,
			meta: {
				header: true,
				auth: true,
				title: 'Crypto'
			},
		},
		// privacy-policy //
		{
			path: '/privacy-policy',
			name: 'privacy-policy',
			component: privacyPolicy,
			meta: {
				header: false,
				auth: true,
				title: 'Privacy Policy and Terms of Service'
			},
		},
		// Code //
		{
			path: '/code',
			name: 'code',
			component: code,
			meta: {
				header: true,
				auth: true,
				title: 'Code'
			},
		},
		// contact //
		{
			path: '/contact',
			name: 'contact',
			component: contact,
			meta: {
				header: true,
				auth: true,
				title: 'Contact'
			},
		},
		// email //
		{
			path: '/email-sent',
			name: 'email-sent',
			component: emailSent,
			meta: {
				header: false,
				auth: true,
				title: 'Email Sent'
			},
		},
		// 404 //
		{
			path: '/**',
			name: '404',
			component: notFound,
			meta: {
				header: false,
				auth: true,
				title: '404 Not Found..'
			},
		},
	],

	// [VUE-ROUTER] Scroll Behavior //
	scrollBehavior() {
		return { x: 0, y: 0 }
	}
})


// [VUE-ROUTER] Set Title //
router.beforeEach((to, from, next) => {
	document.title = `${to.meta.title} | W3ST.IO`
	next()
})


export default router
