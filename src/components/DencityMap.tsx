"use client";

import { useEffect, useRef, useState } from "react";
import type {
  FeatureCollection,
  Geometry,
} from "geojson";
import type { Map as LeafletMap } from "leaflet";
import "leaflet/dist/leaflet.css";

type ParcelProps = {
  ADDRESS?: string | null;
  PROP_NAME?: string | null;
  YR_BUILT?: string | number | null;
  STATUS_TEXT_1?: string | null;
  ZONING?: string | null;
};

function statusColor(status: string | null | undefined) {
  switch (status) {
    case "Under Developed":
    case "Significantly Under Developed":
      return "#0E8561";
    case "Substantially Developed":
    case "Completely Developed":
      return "#cb997e";
    default:
      return "#1067A6";
  }
}

/* Leaflet map of a sparse Seattle parcel preview for Dencity. */
export default function DencityMap() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<LeafletMap | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      if (!containerRef.current || mapRef.current) {
        return;
      }

      const L = (await import("leaflet")).default;

      const res = await fetch(
        "/data/dencity/parcels-sample.geojson",
      );
      if (!res.ok) {
        throw new Error("Could not load parcel sample.");
      }
      const data =
        (await res.json()) as FeatureCollection<
          Geometry,
          ParcelProps
        >;

      if (cancelled || !containerRef.current) {
        return;
      }

      const southWest = L.latLng(47.50675, -122.43375);
      const northEast = L.latLng(47.696694, -122.238916);
      const bounds = L.latLngBounds(southWest, northEast);

      const map = L.map(containerRef.current, {
        maxBounds: bounds,
        maxBoundsViscosity: 1,
        preferCanvas: true,
      }).setView([47.6062, -122.3321], 12);

      L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
          maxZoom: 19,
          attribution: "&copy; OpenStreetMap",
        },
      ).addTo(map);

      L.geoJSON(data, {
        style: (feature) => ({
          color: statusColor(
            feature?.properties?.STATUS_TEXT_1,
          ),
          weight: 1,
          fillOpacity: 0.45,
        }),
        onEachFeature: (feature, layer) => {
          const p = feature.properties ?? {};
          layer.bindPopup(
            "<b>Address:</b> " +
              (p.ADDRESS ?? "N/A") +
              "<br><b>Name:</b> " +
              (p.PROP_NAME || "N/A") +
              "<br><b>Year built:</b> " +
              (p.YR_BUILT ?? "N/A") +
              "<br><b>Status:</b> " +
              (p.STATUS_TEXT_1 ?? "N/A") +
              "<br><b>Zoning:</b> " +
              (p.ZONING ?? "N/A"),
          );
        },
      }).addTo(map);

      mapRef.current = map;
      setReady(true);
    }

    init().catch((err: unknown) => {
      const message =
        err instanceof Error
          ? err.message
          : "Map failed to load.";
      setError(message);
    });

    return () => {
      cancelled = true;
      if (mapRef.current) {
        mapRef.current.remove();
        mapRef.current = null;
      }
    };
  }, []);

  return (
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
      <p className="mt-4 max-w-2xl leading-relaxed">
        Sparse preview only—a fraction of the parcels available
        in the full Dencity corpus. Click a parcel for address,
        status, and zoning. A production site with complete
        data will ship later. Colors: under developed (green),
        substantially developed (tan), other (blue).
      </p>
      {error ? (
        <p className="mt-6 text-sm text-red-700">{error}</p>
      ) : null}
      {!ready && !error ? (
        <p className="mt-6 text-sm text-neutral-500">
          Loading map…
        </p>
      ) : null}
      <div
        ref={containerRef}
        className={
          "mt-6 h-112 w-full overflow-hidden " +
          "roundh-112rder border-black " +
          "bg-neutral-100 sm:h-128"
        }
      />
    </section>
  );
}
