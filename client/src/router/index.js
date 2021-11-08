// [IMPORT] //
import Vue from 'vue'
import VueRouter from 'vue-router'


// [IMPORT] Personal //
import index from '../pages'
import about from '../pages/about'
import contact from '../pages/contact'
import emailSent from '../pages/email-sent'
import gallery from '../pages/gallery'
import purchaseWahSubscription from '../pages/purchase-wah-subscription'
import services from '../pages/services'
import services_webAppDevelopment from '../pages/services/web-app-development'
import services_webAppHosting from '../pages/services/web-app-hosting'
import services_socialMediaManagement from '../pages/services/social-media-management'
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
		// purchase-wah-subscriptiion //
		{
			path: '/purchase-wah-subscription',
			name: 'purchase-wah-subscription',
			component: purchaseWahSubscription,
			meta: {
				auth: true,
				title: 'Purchase Web App Hosting Subscription'
			},
		},
		// Contact Us //
		{
			path: '/contact',
			name: 'contact',
			component: contact,
			meta: {
				auth: true,
				title: 'Contact'
			},
		},
		// Email //
		{
			path: '/email-sent',
			name: 'email-sent',
			component: emailSent,
			meta: {
				auth: true,
				title: 'Email Sent'
			},
		},
		// Gallery //
		{
			path: '/gallery',
			name: 'gallery',
			component: gallery,
			meta: {
				auth: true,
				title: 'Gallery'
			},
		},
		// [SERVICES] //
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
			path: '/services/web-app-development',
			name: 'services_webAppDevelopment',
			component: services_webAppDevelopment,
			meta: {
				auth: true,
				title: 'Web App Development'
			},
		},
		{
			path: '/services/web-app-hosting',
			name: 'services_webAppHosting',
			component: services_webAppHosting,
			meta: {
				auth: true,
				title: 'Web App Hosting'
			},
		},
		{
			path: '/services/social-media-management',
			name: 'services',
			component: services_socialMediaManagement,
			meta: {
				auth: true,
				title: 'Social Media Management'
			},
		},
		// [404] //
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
