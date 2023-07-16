export type Project = {
	title: string;
	slug: string;
	date: string; // YYYY-MM-DD
	link: string | null;
	deployStatus: 'live' | 'archived' | 'ongoing';
	githubChipUrl: string | null;
	description: string | null;
	keywords: string[];
};

export type ResponseError = {
	message: string;
};

const projects: Project[] = [
	{
		title: 'Context/Content',
		slug: 'context-content',
		date: '2019-12-00',
		link: 'https://contextcontent.vercel.app/',
		deployStatus: 'archived',
		githubChipUrl: 'https://github.com/gnjmonroe/contextcontent',
		description:
			"An exhibition site for a multi-media exhibition at Taubman College. A reinterpretation of 'sitemap' is used to stage a new working definition of 'Urban Design'.",
		keywords: ['HTML/CSS/JS (vanilla)', 'Design'],
	},
	{
		title: 'someparts.parts',
		slug: 'some-parts',
		date: '2019-11-00',
		link: 'https://someparts-parts.vercel.app/',
		deployStatus: 'archived',
		githubChipUrl: 'https://github.com/gnjmonroe/someparts.parts',
		description:
			'An exhibition site showcasing a modular kit of parts applicable to myriad purposes. The visual language of spreadsheets highlights the modularity and flexibility of the kit.',
		keywords: ['HTML/CSS/JS (vanilla)', 'Design', 'jQuery'],
	},
	{
		title: 'PRAUD Website Renewal',
		slug: 'praud-renewal',
		date: '2022-06-20',
		link: 'https://praud.info/',
		deployStatus: 'live',
		githubChipUrl: null, // check for sensitive info
		description:
			"A portfolio site for an architecture office. The visual language of subway maps illustrate the relationship between the office's research themes and projects.",
		keywords: [
			'React',
			'GraphQL',
			'HTML Canvas',
			'Design',
			'Gatsby',
			'Sanity',
			'Netlify',
			'SVG',
			'GSAP',
		],
	},
	{
		title: 'Domansa Website Renewal',
		slug: 'domansa-renewal',
		date: '2022-10-30',
		link: 'https://domansaseoul.org/',
		deployStatus: 'live',
		githubChipUrl: null, // check for sensitive info
		description:
			'A portfolio site for an urban research and exhibition space platform. Inspired by advertising stickers in Korea.',
		keywords: [
			'Design',
			'Typescript',
			'React',
			'Gatsby',
			'Sanity',
			'Netlify',
			'SCSS',
		],
	},
	{
		title: 'Platform C Website Renewal',
		slug: 'platform-c-renewal',
		date: '2023-01-20',
		link: 'https://platformc.kr/',
		deployStatus: 'live',
		githubChipUrl: null,
		description:
			'A blog site for a social activist NGO. It features a clean design prioritizing simplicity and performance.',
		keywords: [
			'Typescript',
			'React',
			'GraphQL',
			'Gatsby',
			'Sanity',
			'Netlify',
			'SCSS',
		],
	},
	{
		title: 'BIPOC Design History Renewal',
		slug: 'bipoc-design-history-renewal',
		date: 'ongoing',
		link: null, // link when launched?
		deployStatus: 'ongoing',
		githubChipUrl: null,
		description:
			'An eCommerce site for online courses. I focus on securely retrieving customer data from APIs and implementing custom interactivity.',
		keywords: [
			'Wordpress',
			'eCommerce',
			'BigCommerce',
			'PHP',
			'REST API',
			'cURL',
			'Javascript',
			'SCSS',
		],
	},
	{
		title: '와!',
		slug: 'wa',
		date: '2022-09-20',
		link: 'https://github.com/gnjmonroe/wawawa',
		deployStatus: 'archived',
		githubChipUrl: 'https://github.com/gnjmonroe/wawawa',
		description:
			'An exhibition site presenting livestreams of parks around the world.',
		keywords: ['React', 'Vite', 'YouTube API', 'SVG', 'SCSS', 'Typescript'],
	},
	{
		title: 'PRAUD Amplifer',
		slug: 'praud-amplifier',
		date: '2022-11-31',
		link: 'https://github.com/gnjmonroe/praud-amplifier',
		deployStatus: 'archived',
		githubChipUrl: 'https://github.com/gnjmonroe/praud-amplifier',
		description:
			"A progressive web app that illustrates the customization potential of the client's submission to LG Space X's Home as a Service exhibition.",
		keywords: [
			'React',
			'TypeScript',
			'Design',
			'PWA',
			'SCSS',
			'Netlify',
			'Vite',
		],
	},
	{
		title: 'jinsoo.co',
		slug: 'jinsoo-co',
		date: 'ongoing',
		link: 'https://jinsoo.co',
		deployStatus: 'live',
		githubChipUrl: 'https://github.com/gnjmonroe/jinsoo.co',
		description: 'My personal website.',
		keywords: ['React', 'NextJS', 'SCSS', 'TypeScript', 'Vercel'],
	},
];
export default projects;
