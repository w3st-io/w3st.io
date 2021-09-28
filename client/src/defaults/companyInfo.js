// [EXPORT] //
module.exports = {
	logo: require('../assets/images/logo.svg'),

	name: 'W3ST.IO',

	caption: 'Nothing is impossible in the W3ST',

	description: 'Based in Teaneck NJ, we develop web apps and provide services for small and large businesses that cater to their needs. We aim to grow our client’s digital footprint online by providing powerful methods such SEO, and creating engaging content on social media. Formed and operating out of the great state of New Jersey, we focus on technologies that will influence and impact the future of commerce and business. We take pride in what we make and are only satisfied when our customers are as well..',

	address: '724 cedar lane, Teaneck NJ',
	
	googleMapsLink: '',
	
	hoursOfOperation: [
		{
			days: 'Monday - Friday',
			hours: '8:00 AM - 4:30 PM'
		},
		{
			days: 'Saturday',
			hours: '9:00 AM - 1:00 PM'
		},
	],

	contact: {
		cell: {
			number: '(201) 362-6859',
			link: 'tel:201-362-6859'
		},
	
		fax: {
			number: '(123) 456-7890',
			link: 'tel:123-345-7890',
		},
	},

	socialMedia: {
		facebookLink: '',
		instagramLink: '',
		twitterLink: '',
		youtubeLink: '',
	},

	services: [
		{
			name: 'Web App Development',
			variants: [
				{
					id: 'standard-web-app-development',
					name: 'Standard Web App Development',
					price: '$1,499.99',
				},
				{
					id: 'advanced-web-app-development',
					name: 'Advanced Web App Development',
					price: '$2,999.99',
				},
				{
					id: 'pro-web-app-development',
					name: 'Pro Web App Development',
					price: '$5,999.99',
				},
			],

			description: 'Highly customizable Web Apps that are intuitive, informative, and scaleable. The Web Apps we develop for our clients aim to help reach out to customers who are seeking the products and services provided by them. All Web Apps come with intuitive pages, a blog system, and Search Engine Optimization.',

			disclaimer: 'DISCLAIMER: WEB APP CODE ONLY. THIS DOES NOT INCLUDE HOSTING.',
		},
		{
			name: 'Web App Hosting',
			variants: [
				{
					id: 'standard-web-app-hosting',
					name: 'Standard Web App Hosting',
					price: '$49.99/mo',
				},
				{
					id: 'advanced-web-app-hosting',
					name: 'Standard Web App Hosting',
					price: '$90.99/mo',
				},
				{
					id: 'pro-web-app-hosting',
					name: 'Pro Web App Hosting',
					price: '$169.99/mo',
				},
			],

			description: 'All Web App needs to be hosted and we are here to help provide that for you. Our hosting service includes updating, maintaining, and improving the Web Apps we host. We make sure to work closely with our clients so that changes are up to their standards.',

			disclaimer: '',

		}
	],
}