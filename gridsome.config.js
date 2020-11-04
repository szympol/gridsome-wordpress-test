module.exports = {
  siteName: "Gridsome",
  siteDescription: "Wordpress + Gridsome test",

  templates: {
    WordPressCategory: "/kategoria/:slug",
    WordPressPost: "/:year/:month/:day/:slug",
    WordPressPostTag: "/tag/:slug",
  },

  plugins: [
    {
      use: "@gridsome/source-wordpress",
      options: {
        baseUrl: "http://li2050-172.members.linode.com/",
        typeName: "WordPress",
        apiBase: "wp-json",
      },
    },
  ],
};
