export interface SITE {
  website: string;
  author: string;
  desc: string;
  title: string;
  ogImage: string;
  ogImageAlt: string;
};

export interface Frontmatter {
  title: string;
  ogImage?: string;
  cover?: string;
  description: string;
  datetime: string;
  featured: boolean;
  draft: boolean;
  tags: string[];
}