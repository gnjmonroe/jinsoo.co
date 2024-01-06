type Title = 'GitHub' | 'LinkedIn' | 'Email';

export class Contact {
  title: Title;

  url: string;

  constructor(title: Title, url: string) {
    this.title = title;
    this.url = url;
  }
}

export const contacts: Contact[] = [
  new Contact('GitHub', 'https://github.com/gnjmonroe'),
  new Contact('LinkedIn', 'https://www.linkedin.com/in/gnjmonroe/'),
  new Contact('Email', 'gnjmonroe@gmail.com'),
];
