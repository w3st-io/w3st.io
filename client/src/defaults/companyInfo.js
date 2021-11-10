// [EXPORT] //
module.exports = {
	logo: require('../assets/images/logo.svg'),

	name: 'W3ST.IO',

	nameHTML: '<span class="text-primary">W<span class="text-light">3</span>ST<span class="text-light">.</span>IO</span>',

	caption: 'Nothing is impossible in the W3ST',

	description: 'Established in 2021, W3ST.IO LLC is a web services company that provides its clients with an array of skillsets that help them grow their digital presence online. We understand how important it is for a business to truly connect with its community, so we make sure to meet all of our client’s business needs. We are constantly growing and want your business to grow with us as well..',

	missionStatement: 'W3ST stands for Web 3 Services & Technologies because we believe in the 3rd stage of the internet also called the Decentralized Internet. We want to guide all of our clients to this new internet and help them integrate the future into their businesses today. Our preferred blockchain is Ethereum.',

	address: '724 Cedar Lane, Teaneck NJ',

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
		// WAD //
		{
			id: 'wad',

			name: 'Web App Development (WAD)',

			lottiefilesLink: 'https://assets6.lottiefiles.com/packages/lf20_8zzfnwv8.json',

			variants: [
				{
					id: 'standard-web-app-development',
					name: 'Standard Web App Development',
					price: '$1,999.99',
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
				'A highly customizable website that is designed to help our clients reach out to their customers and share their products and services. We also provide the option to add an online store that can makes sales for your business anywhere! All Web Apps come with Fully Designed UI, a Blog System, and Search Engine Optimization (SEO).',
			],

			features: [],

			disclaimer: 'DISCLAIMER: Web app code only. hosting not included.',
		},
		// WAH //
		{
			id: 'wah',

			name: 'Web App Hosting (WAH)',

			lottiefilesLink: 'https://assets2.lottiefiles.com/packages/lf20_3jezq8s4.json',

			variants: [
				{
					id: 'standard-web-app-hosting',
					name: 'Standard Web App Hosting',
					price: '$59.99 /mo',
				},
				{
					id: 'advanced-web-app-hosting',
					name: 'Advanced Web App Hosting',
					price: '$89.99 /mo',
				},
				{
					id: 'pro-web-app-hosting',
					name: 'Pro Web App Hosting',
					price: '$199.99 /mo',
				},
			],

			descriptions: [
				'All Web App needs to be hosted and we are here to help provide that for you. Our hosting service includes updating, maintaining, and improving the Web Apps we host. We make sure to work closely with our clients so that changes are up to their standards.',
			],

			features: [],

			disclaimer: '',
		},
		// SMM //
		{
			id: 'smm',
			
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
				'Interactions with customers by responding and answering their questions',
				'Grabs feedback from the audience',
				'Identify trends and create engaged content',
				'Build an interactive digital community online',
			],
			
			disclaimer: '',
		},

		// ASM //
		{
			id: '',
			
			name: 'Advertisement Service Management (ASM)',

			lottiefilesLink: 'https://assets9.lottiefiles.com/packages/lf20_VegC5p.json',

			descriptions: [
				'Take your business to the next level! We work with advertising services such as Google ads & Instagram ads to help get your message out to even more people. This is usually done after a Web App is established and SEO is complete.',
			],

			variants: [],
			
			disclaimer: '',
		},

		// BCD //
		{
			id: '',
			
			name: 'Business Card Design (BCD)',

			lottiefilesLink: 'https://assets3.lottiefiles.com/packages/lf20_ngxmrwkr.json',

			descriptions: [
				'Take your business to the next level! We work with advertising services such as Google ads & Instagram ads to help get out your message to even more customers. We recommend this service once a Web App is established and all SEO is complete.',
			],

			variants: [],
			
			disclaimer: '',
		},
	],
}