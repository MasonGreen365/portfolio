export const bannerImages = [
  "/images/000056230005.webp",
  "/images/000056230006.webp",
  "/images/000056230007.webp",
  "/images/000056230008.webp",
  "/images/000056230009.webp",
  "/images/000056230010.webp",
  "/images/000056230011.webp",
  "/images/000056230012.webp",
  "/images/000056230013.webp",
  "/images/000056230014.webp",
  "/images/000056230016.webp",
] as const;

export type BannerImage = (typeof bannerImages)[number];
