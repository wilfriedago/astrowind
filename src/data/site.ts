/**
 * Single source of truth for personal details shown across the site.
 * Edit this file to update your copy — no component changes needed.
 *
 * Entries marked TODO still need your real values.
 */
export const site = {
	name: 'Wilfried Ago',
	/** Stacked letters in the top-left logo, one string per row. */
	monogram: ['WIL', 'AGO'],
	role: 'Software Engineer / Full-Stack Developer',
	title: 'Wilfried Ago — Software Engineer',
	description:
		'Wilfried Ago is a software engineer building fast, reliable web platforms and backend services.',

	intro: {
		eyebrow: '// introduction',
		headline: 'code that ships.',
		body: "Hi, I'm Wilfried Ago. A software engineer building fast, reliable web platforms and backend services — from clean APIs to polished front ends.",
	},

	projects: {
		title: 'Projects',
		subtitle: "Things I've built and shipped",
		more: { label: 'More on GitHub', href: 'https://github.com/wilfriedago' },
	},

	about: {
		title: 'About Me',
		subtitle: 'Learn more about me',
		tabs: [
			{
				kind: 'bio',
				label: 'About Me',
				heading: 'Wilfried Ago',
				subheading: 'Software Engineer / Full-Stack Developer',
				paragraphs: [
					'Detail-oriented software engineer who enjoys turning messy problems into simple, well-tested systems.\nI believe great software comes from understanding a problem down to its core.',
					'I specialize in full-stack web development with TypeScript, Go and cloud-native tooling. I design APIs, build responsive interfaces, and care about performance, accessibility and developer experience. I also enjoy CI/CD automation, infrastructure as code, and contributing to open source.',
				],
			},
			{
				kind: 'steps',
				label: 'How I Work',
				heading: 'How I Work',
				subheading: 'From problem to production',
				items: [
					{
						key: '01',
						title: 'Understand',
						body: 'I start with the problem, not the stack — talking to users, reading the code, and defining what success looks like.',
					},
					{
						key: '02',
						title: 'Design',
						body: 'I sketch data models, APIs and boundaries first, keeping systems simple enough to reason about.',
					},
					{
						key: '03',
						title: 'Build',
						body: 'Small, reviewed pull requests with tests and types. Clean code is a feature, not a luxury.',
					},
					{
						key: '04',
						title: 'Ship & iterate',
						body: 'Automated CI/CD, observability and feedback loops so every release is safe and measurable.',
					},
				],
			},
			{
				kind: 'stack',
				label: 'Tech Stack',
				heading: 'Tech Stack',
				subheading: 'Tools I reach for every day',
				items: [
					{ key: '/lang', title: 'Languages', body: 'TypeScript · Go · Rust\nPython · SQL' },
					{ key: '/front', title: 'Frontend', body: 'React · Astro · Next.js\nTailwind CSS · Vite' },
					{ key: '/back', title: 'Backend', body: 'Node.js · gRPC · REST\nPostgreSQL · Redis' },
					{ key: '/ops', title: 'Infra & DevOps', body: 'Docker · Kubernetes · AWS\nTerraform · GitHub Actions' },
				],
			},
		],
	},

	contact: {
		title: 'Get in touch',
		prompt: "Got a project or a role you'd like to talk about?",
		// TODO: confirm this is the address you want people to use.
		email: 'hello@wilfriedago.me',
		followLabel: 'Follow Me',
		credit: 'Built with Astro',
	},

	/**
	 * `short` is the lowercase label in the fixed bottom-left list,
	 * `label` is used in the Contact section.
	 */
	socials: [
		{ short: 'github', label: 'GitHub', href: 'https://github.com/wilfriedago' },
		// TODO: replace with your real profile URLs.
		{ short: 'linkedin', label: 'LinkedIn', href: 'https://www.linkedin.com/in/wilfriedago' },
		{ short: 'x.com', label: 'X / Twitter', href: 'https://x.com/wilfriedago' },
	],
} as const;

export type AboutTab = (typeof site.about.tabs)[number];
