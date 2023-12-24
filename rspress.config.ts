import * as path from 'path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  base: "/poems",
  root: path.join(__dirname, 'docs'),
  title: 'Poems',
  description: 'Poems for life',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    socialLinks: [
      { icon: 'github', mode: 'link', content: 'https://github.com/web-infra-dev/rspress' },
    ],
  },
});
