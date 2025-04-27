// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

// 网站配置
export const SITE_TITLE = "CS4016 - Computación Gráfica";
export const SITE_DESCRIPTION = "Bienvenido a la pagina oficial de Computer Graphics - CS4016 (UTEC)";
export const COPYRIGHT = "© 2025 CS4016 Team All Rights Reserved";
export const ICP_NUMBER = "";

// 社交媒体链接, 留空或注释=不显示
export const SOCIAL_LINKS = {
  Github: "https://github.com/Munay-K/CS4016_web_page/tree/main",
  //   Twitter: "https://twitter.com/yourusername",
  //   LinkedIn: "https://www.linkedin.com/in/yourusername",
  //   Instagram: "https://www.instagram.com/yourusername",
  //   Facebook: "https://www.facebook.com/yourusername",
  //   YouTube: "https://www.youtube.com/yourusername",
};

// SEO 相关
export const SEO_CONFIG = {
  ogImage: "/hero-img.png", // 默认的社交媒体分享图片
  keywords: "blog, tech, programming", // 默认关键词
};

// 导航配置
export const NAV_ITEMS = [
  { text: "Inicio", link: "/" },
  { text: "Sobre el curso", link: "/about" },
  { text: "Proyectos", link: "/blog" },
  { text: "Recursos", link: "/about" },
  { text: "Cronograma", link: "/crono" },
  { text: "Contacto", link: "/about" },
];

// 博客配置
export const BLOG_CONFIG = {
  locale: "en-us", // 日期格式化语言
  profile: "https://github.com/churchTao",
  authorName: "Author Name", // 作者名称
  email: "mailto:your-email@example.com",
  tags: {
    title: "Tags", // 标签页面标题
    description: "All the tags used in posts.", // 标签页面描述
  },
};
