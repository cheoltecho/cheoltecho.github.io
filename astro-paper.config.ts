import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://cheoltecho.github.io/",
    title: "철테코",
    description:
      "soon(박철순)의 기술 블로그 — 가상화·인프라·백엔드. QEMU/KVM 기반 프라이빗 클라우드를 만들며 배운 것들.",
    author: "Park Cheolsoon",
    profile: "https://github.com/cheolsoonP",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Asia/Seoul",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: true,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/cheoltecho/cheoltecho.github.io/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github", url: "https://github.com/cheolsoonP" },
    { name: "linkedin", url: "https://www.linkedin.com/in/cheolsoon-park-04935b228/" },
  ],
  shareLinks: [
    { name: "x", url: "https://x.com/intent/post?url=" },
    { name: "telegram", url: "https://t.me/share/url?url=" },
    { name: "mail", url: "mailto:?subject=See%20this%20post&body=" },
  ],
});
