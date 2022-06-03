// [IMPORT] //
import Vue from 'vue'
import VueRouter from 'vue-router'


// [IMPORT] Personal //
import index from '../pages'
import about from '../pages/about'
import blog from '../pages/blog'
import code from '../pages/code'
import contact from '../pages/contact'
import emailSent from '../pages/email-sent'
import gallery from '../pages/gallery'
import privacyPolicy from '../pages/privacy-policy'
import purchase_successful from '../pages/purchase/successful'
import purchase_unsuccessful from '../pages/purchase/unsuccessful'
import purchase_wad from '../pages/purchase/wad'
import purchase_wah from '../pages/purchase/wah'
import purchase_was from '../pages/purchase/was'
import services from '../pages/services'
import services_info from '../pages/services/info'
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
		// About //
		{
			path: '/about',
			name: 'about',
			component: about,
			meta: {
				header: true,
				auth: true,
				title: 'About'
			},
		},
		// About //
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
		// purchase_successful //
		{
			path: '/purchase/successful',
			name: 'purchase_successful',
			component: purchase_successful,
			meta: {
				header: false,
				auth: true,
				title: 'Purchase Successful'
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
		// purchase_unsuccessful //
		{
			path: '/purchase/unsuccessful',
			name: 'purchase_unsuccessful',
			component: purchase_unsuccessful,
			meta: {
				header: false,
				auth: true,
				title: 'Purchase Unsuccessful'
			},
		},
		// purchase_wad //
		{
			path: '/purchase/wad',
			name: 'purchase_wad',
			component: purchase_wad,
			meta: {
				header: false,
				auth: true,
				title: 'Purchase WAD'
			},
		},
		// purchase_wah //
		{
			path: '/purchase/wah',
			name: 'purchase_wah',
			component: purchase_wah,
			meta: {
				header: false,
				auth: true,
				title: 'Purchase WAH'
			},
		},
		// purchase_was //
		{
			path: '/purchase/was',
			name: 'purchase_was',
			component: purchase_was,
			meta: {
				header: false,
				auth: true,
				title: 'Purchase WAS'
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
		// gallery //
		{
			path: '/gallery',
			name: 'gallery',
			component: gallery,
			meta: {
				header: false,
				auth: true,
				title: 'Gallery'
			},
		},
		// services //
		{
			path: '/services',
			name: 'services',
			component: services,
			meta: {
				header: true,
				auth: true,
				title: 'Services'
			},
		},
		{
			path: '/services/info/:serviceid',
			name: 'services_info',
			component: services_info,
			meta: {
				header: false,
				auth: true,
				title: 'Services'
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
	document.title = `${to.meta.title} - W3ST.IO`
	next()
})


export default router
