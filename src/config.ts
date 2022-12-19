const isProd = import.meta.env.PROD;
const prodIsStaging = true;
const localURL = 'http://localhost:3000/';
const stagingURL = 'https://staging.url.com';
const prodURL = 'https://prod.com/';
const websiteURL = prodIsStaging ? stagingURL : prodURL;


export const SITE = {
  website: isProd ? websiteURL : localURL,
  author: 'Jonh Doe',
  desc: 'Morbi sagittis vehicula enim eget efficitur. Integer ex mauris, viverra et massa eu.',
  title: 'Jonh Doe',
  ogImage: `${isProd ? websiteURL : localURL}default-og.jpg`,
  ogImageAlt: 'og image alt',
  twitter: {
    user: '@user'
  }
};

export const Links = [
  {
    url: "/",
    title: "Inicio",
  },
  {
    url: "/blog",
    title: "Blog",
  },
  {
    url: "/sobre-mi",
    title: "Sobre mí",
  },
  {
    url: "/notas",
    title: "Notas",
  },
  {
    url: "/snippets",
    title: "Snippets",
  },
]