import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  // 배포 주소가 정해지면 바꿔 주세요.
  site: 'https://example.com',
});
