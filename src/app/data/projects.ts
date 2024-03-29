type ProjectName =
  | 'EPFL Blue City'
  | 'unseen.garden'
  | 'Platform C'
  | 'Domansa'
  | 'PRAUD'
  | 'someparts.parts'
  | 'Context / Content';

export class Project {
  name: ProjectName;

  url: string;

  year: number;

  description: string;

  constructor(
    name: ProjectName,
    url: string,
    year: number,
    description: string,
  ) {
    this.name = name;
    this.url = url;
    this.year = year;
    this.description = description;
  }
}

export const projects: Project[] = [
  new Project(
    'EPFL Blue City',
    'https://www.bluecity.store',
    2023,
    "Responsive design and frontend development for EPFL's Blue City Project: a transdisciplinary project aiming to model and simulate a city’s multi-layered, interconnected network of flows.",
  ),
  new Project(
    'unseen.garden',
    'https://www.unseen.garden/',
    2023,
    'AI development for a video captioning model in PyTorch 2. Used 83,000 annotated images from the MS COCO dataset and AWS (p3 instance) to train the model.',
  ),
  new Project(
    'Platform C',
    'https://platformc.kr/',
    2023,
    'Redesign and development for a social activist organization’s web platform.',
  ),
  new Project(
    'Domansa',
    'https://domansaseoul.org/',
    2022,
    'Redesign and development for an urban research and exhibition space platform. Inspired by the advertising stickers in the streets of Korea.',
  ),
  new Project(
    'PRAUD',
    'https://praud.info/',
    2022,
    "Redesign and development for a local architecture office. The visual language of subway maps illustrate the relationship between the office's projects and lines of research and inquiry.",
  ),
  new Project(
    'someparts.parts',
    'https://someparts-parts.vercel.app/',
    2019,
    'Design and development showcasing a modular kit of parts applicable to myriad purposes. The visual language of spreadsheets highlights the modularity and flexibility of the kit.',
  ),
  new Project(
    'Context / Content',
    'https://contextcontent.vercel.app/',
    2019,
    "Design and development for a multimedia exhibition at Taubman College. A reinterpretation of 'sitemap' is used to stage a new working definition of 'Urban Design'.",
  ),
];
