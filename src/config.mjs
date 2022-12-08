const SITE = {
	name: 'Wilfried AGO | Frontend Developer',

	origin: 'https://wilfriedago.me',
	basePathname: '/',

	title: 'Wilfried AGO | Frontend Developer',
	description:
		"I'm a Frontend Developer based in Cotonou, Benin. I'm passionate about web development and I love to learn new things.",

	googleAnalyticsId: import.meta.env.GOOGLE_ANALYTICS_ID, // or "G-XXXXXXXXXX",
	googleSiteVerificationId: import.meta.env.GOOGLE_SITE_VERIFICATION,
};

const CONFIG = {
	formspreeEndpoint: import.meta.env.FORMSPREE_ENDPOINT,
};

const RESUME = {
	about: {
		name: 'Wilfried AGO',
		profession: 'Student | Frontend Developer | UI/UX Designer',
		summary:
			'Detail-oriented graphic designer and front-end developer. I believe that a great design is the result of understanding a problem to its core and solving it with a simple and elegant solution. \n\n Passionate about visual design, web development, and user experience. I looking for an internship or a job as a web developer or UI/UX designer. I am also open to freelance projects. Feel free to contact if you have any questions or if you want to work with me.',
		contact: {
			email: 'contact@wilfriedago.me',
			phone: '+229 62 000 975',
			address: 'Kouhounou, Cotonou Benin',
		},
		socials: [
			{
				name: 'Twitter',
				url: 'https://twitter.com/wilfriedago_/',
				relevant: false,
			},

			{
				name: 'LinkedIn',
				url: 'https://www.linkedin.com/in/wilfriedago/',
				relevant: true,
			},

			{
				name: 'Instagram',
				url: 'https://www.instagram.com/wilfriedago_/',
				relevant: false,
			},
			{
				name: 'AngelList',
				url: 'https://angel.co/u/wilfriedago/',
				relevant: true,
			},
			{
				name: 'Github',
				url: 'https://github.com/wilfriedago/',
				relevant: true,
			},
		],
		files: {
			resume: 'WILFRIED_AGO_RESUME.pdf',
		},
	},
	services: [
		{
			title: 'Web Development',
			description:
				'I build websites and web applications using modern technologies like React, Next.js, Svelte, TailwindCSS, and more. I also provide fullstack solutions using WordPress & Jamstack.',
			icon: 'https://img.icons8.com/nolan/48/code--v2.png',
		},
		{
			title: 'UI/UX Design',
			description:
				'I design beautiful and functional user interfaces for websites and web applications, using modern design tools like Figma, and more.',
			icon: 'https://img.icons8.com/nolan/48/windows10-personalization.png',
		},
		{
			title: 'Graphic Design',
			description: 'I design logos, posters, flyers, and other graphic materials for print and digital media. ',
			icon: 'https://img.icons8.com/nolan/48/design.png',
		},
	],
	skills: [
		{
			name: 'programmingLanguages',
			title: 'Programming Languages',
			items: ['HTML & CSS', 'JavaScript', 'TypeScript', 'PHP', 'Python', 'Java', 'C', 'Go'],
		},
		{
			name: 'frameworksAndLibrairies',
			title: 'Frameworks & Librairies',
			items: [
				'Vue',
				'Astro',
				'Angular',
				'React',
				'Laravel',
				'Express',
				'Bootstrap',
				'Tailwind CSS',
				'jQuery',
				'Axios',
				'Next.js',
			],
		},
		{
			name: 'toolsAndPlatforms',
			title: 'Tools & Platforms',
			items: [
				'Git',
				'Github Actions',
				'Docker',
				'Vite',
				'Gulp',
				'Postman',
				'Figma',
				'Adobe XD',
				'Adobe Photoshop',
				'Adobe Illustrator',
				'Canva',
				'Netlify',
				'Heroku',
				'Firebase',
				'Github Pages',
				'WordPress',
				'Vercel',
				'Strapi',
				'Hostinger',
				'LWS.fr',
			],
		},
	],
	experiences: [
		{
			title: 'Frontend Developer',
			company: 'Freelance',
			companyLink: 'https://wilfriedago.me',
			startDate: '2020',
			endDate: 'Present',
			description:
				'I work as a Frontend Developer at Les Éditions du Flamboyant & Communications. I build and maintain websites and web applications.',
		},
	],
	education: [
		{
			title: 'Bachelor of Computer Science',
			school: 'ESGIS Bénin - Ecole Supérieure de Génie Informatique et des Sciences',
			schoolLink: 'https://www.esgis.org/',
			startDate: 'September 2020',
			endDate: 'Present',
			description: 'I am currently studying Computer Science at ESGIS Bénin.',
		},
		{
			title: 'Baccalaureate D',
			school: 'CS Clé de la Réussite',
			startDate: 'October 2015',
			endDate: 'July 2018',
			description: 'I studied at CS Clé de la Réussite.',
		},
	],
	projects: [
		{
			id: '1',
			title: 'Portfolio Website',
			description: 'My personal portfolio',
			image: '/images/portfolio.png',
			technologies: ['Astro', 'Vue', 'Tailwind CSS', 'Netlify', 'Github Actions', 'Strapi'],
			links: [
				{
					name: 'Github',
					url: 'https://github.com/wilfriedago/astrowind',
				},
				{
					name: 'Website',
					url: 'https://wilfriedago.me',
				},
			],
		},
		{
			id: '2',
			title: 'The Weather App',
			description: 'A weather app built with Angular',
			image: '/images/portfolio.png',
			technologies: ['Angular', 'Tailwind CSS', 'OpenWeatherMap API', 'IP Geolocation API', 'Unsplash API'],
			links: [
				{
					name: 'Github',
					url: 'https://github.com/wilfriedago/weather-app',
				},
				{
					name: 'Website',
					url: 'https://weather.wilfriedago.me',
				},
			],
		},
		{
			id: '3',
			title: 'Les Éditions du Flamboyant & Communications',
			description: 'Booking selling website',
			image: '/images/portfolio.png',
			technologies: ['WordPress', 'Woocommerce', 'KKiaPay'],
			links: [
				{
					name: 'Website',
					url: 'https://leseditionsflamboyantcm.com',
				},
			],
		},
	],
};

const CONTACT = {
	disabled: false,
	details: RESUME.about.contact,
};

const PROJECTS = {
	disabled: false,
	projectsPerPage: 3,
	list: RESUME.projects,
};

const SOCIALS = {
	disabled: false,
	links: RESUME.about.socials,
};

const BLOG = {
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

export { SITE, CONFIG, RESUME, CONTACT, PROJECTS, SOCIALS, BLOG };
