// BannerCard.tsx is not being used at the moment.


"use client";

import Image from "next/image";
import { useSyncExternalStore } from "react";
import { bannerImages, type BannerImage } from "@/data/bannerImages";

let clientSrc: BannerImage | null = null;

function subscribe() {
  return () => {};
}

function getServerSnapshot(): BannerImage {
  return bannerImages[0];
}

function getClientSnapshot(): BannerImage {
  if (!clientSrc) {
    const index = Math.floor(Math.random() * bannerImages.length);
    clientSrc = bannerImages[index];
  }
  return clientSrc;
}

export default function BannerCard() {
  const src = useSyncExternalStore(
    subscribe,
    getClientSnapshot,
    getServerSnapshot,
  );

  return (
    <section
      aria-label="Featured photo"
      className="w-full border-b border-black bg-white"
    >
      <div className="relative mx-auto aspect-[21/9] w-full max-w-5xl overflow-hidden bg-neutral-100">
        <Image
          src={src}
          alt="Featured landscape photo"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 1024px"
          className="object-cover"
        />
      </div>
    </section>
  );
}
