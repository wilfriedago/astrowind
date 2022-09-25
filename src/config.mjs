export const SITE = {
	name: 'Wilfried AGO | Frontend Developer',

	origin: 'https://wilfriedago.me',
	basePathname: '/',

	title: 'Wilfried AGO | Frontend Developer',
	description: "I'm a Frontend Developer based in Cotonou, Benin. I'm passionate about web development and I love to learn new things.",

	googleAnalyticsId: '', // or "G-XXXXXXXXXX",
	googleSiteVerificationId: 'e7KbvzQ5B8kgpC0l7rXdiWbH53p6z0NBg80H9T6jWlQ',
};

export const BLOG = {
	disabled: false,
	postsPerPage: 4,

	blog: {
		disabled: false,
		pathname: 'blog', // blog main path, you can change this to "articles" (/articles)
	},

	post: {
		disabled: false,
		pathname: '', // empty for /some-post, value for /pathname/some-post
	},

	category: {
		disabled: false,
		pathname: 'category', // set empty to change from /category/some-category to /some-category
	},

	tag: {
		disabled: false,
		pathname: 'tag', // set empty to change from /tag/some-tag to /some-tag
	},
};

export const SOCIALS = {
	disabled: false,
	links: [
		{
			name: 'Twitter',
			url: 'https://twitter.com/wilfriedago_',
		},
		{
			name: 'Github',
			url: 'https://github.com/wilfriedago',
		},
		{
			name: 'LinkedIn',
			url: 'https://www.linkedin.com/in/wilfriedago/',
		},
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/wilfriedago_/',
		},
	],
};

export const CONTACT = {
	disabled: false,
	email: '',
};

export const PROJECTS = {
	disabled: false,
	projectsPerPage: 3,
	list: [
		{
			id: '1',
			title: 'Portfolio',
			description: 'My personal portfolio',
			image: '/images/portfolio.png',
			technologies: ['Next.js', 'Tailwind CSS'],
			links: [
				{
					name: 'Github',
					url: '',
				},
				{
					name: 'Website',
					url: '',
				},
			],
		},
		{
			id: '2',
			title: 'Weather App',
			description: 'My personal portfolio',
			image: '/images/portfolio.png',
			technologies: ['Next.js', 'Tailwind CSS'],
			links: [
				{
					name: 'Github',
					url: '',
				},
				{
					name: 'Website',
					url: '',
				},
			],
		},
		{
			id: '3',
			title: 'Les Editions du Flamboyant',
			description: 'Booking selling website',
			image: '/images/portfolio.png',
			technologies: ['Next.js', 'Tailwind CSS'],
			links: [
				{
					name: 'Github',
					url: '',
				},
				{
					name: 'Website',
					url: '',
				}
			],
		},
	]
};
