export const SITE = {
	name: 'Wilfried AGO | Frontend Developer',

	origin: 'https://wilfriedago.me',
	basePathname: '/',

	title: 'Wilfried AGO | Frontend Developer',
	description:
		"I'm a Frontend Developer based in Cotonou, Benin. I'm passionate about web development and I love to learn new things.",

	googleAnalyticsId: false, // or "G-XXXXXXXXXX",
	googleSiteVerificationId: 'orcPxI47GSa-cRvY11tUe6iGg2IO_RPvnA1q95iEM3M',
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

	projects: {
		disabled: false,
		pathname: 'projects', // set empty to change from /projects/some-project to /some-project
	},
};
