import { PlaywrightTestConfig } from "@playwright/test";


const config: PlaywrightTestConfig = {
  timeout:30000,
  retries:0,
  use: {
    baseURL: "http://localhost:5173",
    headless: false,
    viewport: { width: 800, height: 667 },
    ignoreHTTPSErrors: true,
    video: "retain-on-failure",
    isMobile: true,
  },
};
export default config;

