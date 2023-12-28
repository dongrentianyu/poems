import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  globalStyles: path.join(__dirname, './src/styles/index.css'),
  root: path.join(__dirname, 'docs'),
  title: 'Poems',
  description: 'Poems for life',
  icon: '/author.png',
  logo: {
    light: '/author.png',
    dark: '/author.png',
  },
  themeConfig: {
    outlineTitle: '目录',
    lastUpdated: true,
    lastUpdatedText: '最后更新于',
    prevPageText: '上一首',
    nextPageText: '下一首',
    sourceCodeText: 'Source',
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/dongrentianyu/poems' },
    ],
  },
});
