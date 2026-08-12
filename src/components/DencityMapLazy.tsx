"use client";

import dynamic from "next/dynamic";

const DencityMap = dynamic(
  () => import("@/components/DencityMap"),
  {
    ssr: false,
    loading: () => (
      <section
        id="dencity-demo"
        className={
          "mx-auto max-w-5xl scroll-mt-24 " +
          "border-t border-black px-6 py-12"
        }
      >
        <h2 className="text-2xl font-semibold tracking-wide">
          Interactive demo
        </h2>
        <p className="mt-4 text-sm text-neutral-500">
          Loading map…
        </p>
      </section>
    ),
  },
);

/* Client-only dynamic import wrapper for the Dencity Leaflet map. */
export default function DencityMapLazy() {
  return <DencityMap />;
}
