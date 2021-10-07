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
			id: 'web-app-development',

			name: 'Web App Development (WAD)',

			lottiefilesLink: 'https://assets2.lottiefiles.com/packages/lf20_hntzYU.json',

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

			descriptions: [
				'Highly customizable Web Apps that are intuitive, informative, and scaleable. The Web Apps we develop for our clients aim to help reach out to customers who are seeking the products and services provided by them. All Web Apps come with intuitive pages, a blog system, and Search Engine Optimization.',
			],

			features: [],

			disclaimer: 'DISCLAIMER: Web app code only. hosting not included.',
		},
		{
			id: 'web-app-hosting',

			name: 'Web App Hosting (WAH)',

			lottiefilesLink: 'https://assets2.lottiefiles.com/packages/lf20_3jezq8s4.json',

			variants: [
				{
					id: 'standard-web-app-hosting',
					name: 'Standard Web App Hosting',
					price: '$49.99 /mo',
				},
				{
					id: 'advanced-web-app-hosting',
					name: 'Standard Web App Hosting',
					price: '$90.99 /mo',
				},
				{
					id: 'pro-web-app-hosting',
					name: 'Pro Web App Hosting',
					price: '$169.99 /mo',
				},
			],

			descriptions: [
				'All Web App needs to be hosted and we are here to help provide that for you. Our hosting service includes updating, maintaining, and improving the Web Apps we host. We make sure to work closely with our clients so that changes are up to their standards.',
			],

			features: [],

			disclaimer: '',
		},
		{
			id: 'social-media-management',
			
			name: 'Social Media Management (SMM)',

			lottiefilesLink: 'https://assets10.lottiefiles.com/packages/lf20_q4m6E9.json',

			variants: [
				{
					id: 'stanard-social-media-management',
					name: 'Standard Social Media Management',
					price: '$59.99 /mo',
				},
				{
					id: 'pro-social-media-management',
					name: 'Pro Social Media Management',
					price: '$89.99 /mo',
				},
			],

			descriptions: [
				'A presence on social media is essential for any business to successfully engage with an audience who is constantly browsing, exploring, and contributing to the web. By collecting feedback from these platforms, a business can make better-informed decisions to navigate an ever-changing world. We provide the service of maintaining and collecting feedback from these platforms so you dont have too. Here is what we offer...',
			],

			features: [
				'Upload new content every day (2 photos/videos a day)',
				'Post updates and questionnaires on story',
				'Interactions with the audience by responding and answering their questions',
				'Grabs feedback from the audience',
				'Identify trends and create engaged content',
				'Build an interactive digital community online',
			],
			
			disclaimer: '',
		}
	],
}