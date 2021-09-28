// [EXPORT] //
module.exports = {
	logo: require('../assets/images/logo.svg'),
	name: 'w3st.io',
	caption: 'Web Dev',

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
			name: 'Web Development',
			variants: [
				{
					id: 'standard-website-development',
					name: 'Standard Website Development',
					price: '$1,499.99',
				},
				{
					id: 'advanced-website-development',
					name: 'Advanced Website Development',
					price: '$2,999.99',
				},
				{
					id: 'pro-website-development',
					name: 'Pro Website Development',
					price: '$5,999.99',
				},
			]
		},
		{
			name: 'Web Hosting',
			variants: [
				{
					id: 'standard-website-hosting',
					name: 'Standard Website Hosting',
					price: '$49.99/mo',
				},
				{
					id: 'advanced-website-hosting',
					name: 'Standard Website Hosting',
					price: '$90.99/mo',
				},
				{
					id: 'pro-website-hosting',
					name: 'Pro Website Hosting',
					price: '$169.99/mo',
				},
			]
		}
	],
}