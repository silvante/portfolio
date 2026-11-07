/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://xamidov.uz",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  // project images are served from /media — not pages
  exclude: ["/media/*"],
};
