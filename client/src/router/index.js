// [IMPORT] //
import Vue from 'vue'
import VueRouter from 'vue-router'


// [IMPORT] Personal //
import index from '../pages'
import about from '../pages/about'
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
			name: '/',
			component: index,
			meta: {
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
				auth: true,
				title: 'About'
			},
		},
		// purchase_successful //
		{
			path: '/purchase/successful',
			name: 'purchase_successful',
			component: purchase_successful,
			meta: {
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
				auth: true,
				title: 'Purchase WAS'
			},
		},
		// contact //
		{
			path: '/contact',
			name: 'contact',
			component: contact,
			meta: {
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
				auth: true,
				title: 'Services'
			},
		},
		{
			path: '/services/info/:serviceid',
			name: 'services_info',
			component: services_info,
			meta: {
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
