// [EXPORT] //
module.exports = {
	logo: require('../assets/images/logo.svg'),

	name: 'W3ST.IO',

	nameHTML: '<span class="text-dark">W<span class="text-light text-backlit">3</span>ST<span class="text-light text-backlit">.</span>IO</span>',

	caption: '',

	description: 'Established in 2021, W3ST.IO LLC is a web services company that provides its clients with an array of skillsets that help them grow their digital presence online. We understand how important it is for a business to truly connect with its community, so we make sure to meet all of our client\'s business needs. We are constantly growing and want your business to grow with us as well.',

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
			descriptions: [
				'A highly customizable website that is designed to help our clients reach out to their customers and share their products and services. We also provide the option to add an online store that can makes sales for your business anywhere! All Web Apps come with Fully Designed UI, a Blog System, and Search Engine Optimization (SEO).',
			],
			lottiefilesLink: 'https://assets6.lottiefiles.com/packages/lf20_8zzfnwv8.json',
			variants: [
				{
					id: 'standard-web-app-development',
					name: 'Standard Web App Development',
					price: '$2,499.99',
					featureLimit: 3,
					exclusiveFeatures: [],
					
				},
				{
					id: 'advanced-web-app-development',
					name: 'Advanced Web App Development',
					price: '$4,999.99',
					featureLimit: 4,
					exclusiveFeatures: [],
				},
				{
					id: 'pro-web-app-development',
					name: 'Pro Web App Development',
					price: '$9,999.99',
					featureLimit: 5,
					exclusiveFeatures: [],
				},
			],
			features: [
				'Complete UI Design',
				'Blog',
				'Full SEO',
				'Online Store',
				'Mobile App',
			],
			disclaimer: 'DISCLAIMER: Web app code only. hosting not included. (SEO included)',
		},

		// WAH //
		{
			id: 'wah',
			name: 'Web App Hosting (WAH)',
			descriptions: [
				'All Web App needs to be hosted and we are here to help provide that for you. Our hosting service includes updating, maintaining, and improving the Web Apps we host. We make sure to work closely with our clients so that changes are up to their standards.',
			],
			lottiefilesLink: 'https://assets2.lottiefiles.com/packages/lf20_3jezq8s4.json',
			variants: [
				{
					id: 'standard-web-app-hosting',
					name: 'Standard Web App Hosting',
					price: '$59.99 /mo',
					featureLimit: 2,
					exclusiveFeatures: [],
				},
				{
					id: 'advanced-web-app-hosting',
					name: 'Advanced Web App Hosting',
					price: '$89.99 /mo',
					featureLimit: 4,
					exclusiveFeatures: [],
				},
				{
					id: 'pro-web-app-hosting',
					name: 'Pro Web App Hosting',
					price: '$199.99 /mo',
					featureLimit: 5,
					exclusiveFeatures: [],
				},
			],
			features: [
				'General Code Maintenance',
				'General Info Updating',
				'Product Updating',
				'Online Store',
				'App Maintenance',
			],
			disclaimer: '',
		},

		// WAS //
		{
			id: 'was',
			name: 'Web App Servicing (WAS)',
			descriptions: [
				'Need help servicing your wep app? Let us do that for you! We provide the service of updating, repairing, and customizing a web app to the standards of your business needs.',
			],
			lottiefilesLink: 'https://assets7.lottiefiles.com/private_files/lf30_Gh7uJv.json',
			variants: [
				{
					id: 'standard-servicing',
					name: 'Standard Web App Servicing',
					price: '$499.99',
					featureLimit: 0,
					exclusiveFeatures: [],
				},
				{
					id: 'advanced-servicing',
					name: 'Advanced Web App Servicing',
					price: '$999.99',
					featureLimit: 0,
					exclusiveFeatures: [],
				},
			],
			features: [],
			disclaimer: '',
		},

		// WAO //
		{
			id: 'wao',
			name: 'Web App Onboarding (WAH)',
			descriptions: [
				'Looking to have your web app mananged by us? Have it onboarded to our services. We will make sure it is updated and running under our management.',
			],
			lottiefilesLink: 'https://assets9.lottiefiles.com/packages/lf20_sh2yyL.json',
			variants: [
				{
					id: 'standard-web-app-hosting',
					name: 'Standard Web App Hosting',
					price: '$499.99 /mo',
					featureLimit: 0,
					exclusiveFeatures: [],
				},
			],
			features: [],
			disclaimer: '',
		},

		// SMM //
		{
			id: 'smm',
			name: 'Social Media Management (SMM)',
			descriptions: [
				'A presence on social media is essential for any business to successfully engage with an audience who is constantly browsing, exploring, and contributing to the web. By collecting feedback from these platforms, a business can make better-informed decisions to navigate an ever-changing world. We provide the service of maintaining and collecting feedback from these platforms so you dont have too. Here is what we offer...',
			],
			lottiefilesLink: 'https://assets10.lottiefiles.com/packages/lf20_q4m6E9.json',
			variants: [
				{
					id: 'stanard-social-media-management',
					name: 'Standard Social Media Management',
					price: '$199.99 /mo',
					featureLimit: 5,
					exclusiveFeatures: [],
				},
				{
					id: 'pro-social-media-management',
					name: 'Pro Social Media Management',
					price: '$199.99 /mo',
					featureLimit: 7,
					exclusiveFeatures: [],
				},
			],
			features: [
				'Post questionnaires to gather feedback',
				'Respond and answer questions publicly',
				'Collect feedback from followers',
				'Identify trends and create engaged content',
				'Post at least 3 times a week',
				'Post at leaste 5 times a week',
				'Follower Direct Messaging',
			],
			disclaimer: '',
		},

		// ASM //
		{
			id: '',
			name: 'Advertisement Service Management (ASM)',			
			descriptions: [
				'Take your business to the next level! We work with advertising services such as Google ads & Instagram ads to help get your message out to even more people. This is usually done after a Web App is established and SEO is complete.',
			],
			lottiefilesLink: 'https://assets9.lottiefiles.com/packages/lf20_VegC5p.json',
			variants: [],
			features: [],
			disclaimer: '',
		},

		// BCD //
		{
			id: '',
			name: 'Business Card Design (BCD)',
			descriptions: [
				'Need a business card designed? We can do that for you!',
			],
			lottiefilesLink: 'https://assets8.lottiefiles.com/packages/lf20_n9cqez8k.json',
			variants: [],
			features: [],
			disclaimer: '',
		},

		// EMS //
		{
			id: '',
			name: 'Email Marketing Service (EMS)',
			descriptions: [
				'An emailing list is a great way to connect with your community. We can help your business generate a list of contacts who will recieve emails that they can read about what your business is up too!',
			],
			lottiefilesLink: 'https://assets6.lottiefiles.com/packages/lf20_t6nmtpwm.json',
			variants: [],
			features: [],
			disclaimer: '',
		},
	],
}