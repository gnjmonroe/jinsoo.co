const projects: {
  title: string;
  date: string; // YYYY-MM-DD
  link: string | null;
  deployStatus: 'live' | 'archived' | 'ongoing';
  githubChipUrl: string | null;
  description: string | null;
  keywords: string[];
}[] = [
  {
    title: 'Context/Content',
    date: '2019-12-00',
    link: 'https://contextcontent.vercel.app/',
    deployStatus: 'archived',
    githubChipUrl: 'https://github.com/gnjmonroe/contextcontent',
    description:
      "Design and development for a multi-media exhibition at Taubman College. I used the idea of 'sitemap' as a play on words to stage an expansive and inclusive working definition of 'Urban Design' in a spatialized digital format.",
    keywords: ['HTML/CSS/JS (vanilla)', 'Graphic Design'],
  },
  {
    title: 'someparts.parts',
    date: '2019-11-00',
    link: 'https://someparts-parts.vercel.app/',
    deployStatus: 'archived',
    githubChipUrl: 'https://github.com/gnjmonroe/someparts.parts',
    description:
      'Design and development for an exhibition of a kit of parts capable of being applied to myriad purposes. I appropriated the visual language of spreadsheets to reflect the range of inventory and suggest interaction with items in cells.',
    keywords: ['HTML/CSS/JS (vanilla)', 'Graphic Design', 'jQuery'],
  },
  {
    title: 'PRAUD Website Renewal',
    date: '2022-06-20',
    link: 'https://praud.info/',
    deployStatus: 'live',
    githubChipUrl: null, // check for sensitive info
    description:
      "Redesign and development for an architecture office's website. Implemented a UI based on the visual language of subway maps to illustrate how the office's research themes intersect through different projects over time.",
    keywords: [
      'React',
      'GraphQL',
      'HTML Canvas',
      'Graphic Design',
      'Gatsby',
      'Sanity',
      'Netlify',
      'SVG',
    ],
  },
  {
    title: 'Domansa Website Renewal',
    date: '2022-10-30',
    link: 'https://domansaseoul.org/',
    deployStatus: 'live',
    githubChipUrl: null, // check for sensitive info
    description:
      "Redesign and development for an urban research and exhibition space platform. Inspired by construction and moving service advertising stickers ubiquitous in Korea to reference the platform's focus on urbanism.",
    keywords: [
      'Graphic Design',
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
    date: '2023-01-20',
    link: 'https://platformc.kr/',
    deployStatus: 'live',
    githubChipUrl: null,
    description:
      'Redesign and development for a local social activist NGO. A clean (깔끔한) design prioritizing simplicity and performance.',
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
    title: '[ongoing project]',
    date: 'ongoing',
    link: null, // link when launched?
    deployStatus: 'ongoing',
    githubChipUrl: null,
    description:
      'An eCommerce site for courses about the role of BIPOC in graphic design history. Working in a small team, focusing on securely retrieving customer data from APIs and implementing custom interactivity.',
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
    date: '2022-09-20',
    link: 'https://github.com/gnjmonroe/wawawa',
    deployStatus: 'archived',
    githubChipUrl: 'https://github.com/gnjmonroe/wawawa',
    description:
      'Exhibition site presenting livestreams of various parks around the world via the YouTube IFrame Player API.',
    keywords: [
      'React',
      'Vite',
      'API',
      'YouTube API',
      'SVG',
      'SCSS',
      'Typescript',
    ],
  },
  {
    title: 'PRAUD Amplifer',
    date: '2022-11-31',
    link: 'https://github.com/gnjmonroe/praud-amplifier',
    deployStatus: 'archived',
    githubChipUrl: 'https://github.com/gnjmonroe/praud-amplifier',
    description:
      "Progressive Web App to illustrate the customization potential of client's submission to LG's Smart Cottage exhibition in Yeouido.",
    keywords: [
      'React',
      'TypeScript',
      'Graphic Design',
      'PWA',
      'SCSS',
      'Netlify',
    ],
  },
  {
    title: 'jinsoo.co',
    date: 'ongoing',
    link: 'https://jinsoo.co',
    deployStatus: 'live',
    githubChipUrl: 'https://github.com/gnjmonroe/jinsoo.co',
    description: 'My personal website.',
    keywords: ['React', 'NextJS', 'SCSS', 'TypeScript', 'Vercel'],
  },
];
export default projects;
