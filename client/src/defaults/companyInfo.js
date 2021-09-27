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
			id: 'website-development',
			name: 'Web Site Development',
			tiers: [
				{
					name: 'Basic',
					requires: ['website-hosting-basic'],
					cost: '$1000 - $2000',
					features: [
						{
							name: 'SEO',
							description: '',
							list: []
						},
					],
				},
			],
		},
		{
			id: 'website-hosting',
			name: 'Hosting',
			tiers: [
				{
					name: '',

				}
			],
			requires: [

			]
		}
	],
}