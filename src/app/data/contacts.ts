export class Contact {
  title: string;

  url: string;

  constructor(title: string, url: string) {
    this.title = title;
    this.url = url;
  }
}

export const contacts: Contact[] = [
  new Contact('GitHub', 'https://github.com/gnjmonroe'),
  new Contact('LinkedIn', 'https://www.linkedin.com/in/gnjmonroe/'),
  new Contact('Email', 'gnjmonroe@gmail.com'),
];
