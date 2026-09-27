import type { CSSProperties } from "react";
import { cn } from "@/lib/utils";

type ImgProps = {
  src: string;
  alt?: string;
  className?: string;
  sizes?: string;
  quality?: number;
  /** Sanity raw width of this asset (used only to build srcset) */
  width?: number;
  priority?: boolean;
  style?: CSSProperties;
};

/**
 * Plain <img> backed by Sanity CDN. Keeps the exact treatment of the reference
 * site: images are resized client-side through `?w=` params, lazy loaded,
 * and sit in CSS-provided aspect-ratio boxes.
 */
export default function MainImage({
  src,
  alt = "",
  className,
  sizes = "(min-width: 1536px) 1536px, 100vw",
  quality = 80,
  priority = false,
  style,
}: ImgProps) {
  const base = src.split("?")[0];
  const mk = (w: number) => `${base}?w=${w}&q=${quality}&fit=clip&auto=format`;

  return (
    <img
      src={mk(1200)}
      srcSet={`${mk(480)} 480w, ${mk(768)} 768w, ${mk(1200)} 1200w, ${mk(1920)} 1920w, ${mk(2560)} 2560w`}
      sizes={sizes}
      alt={alt}
      className={className}
      loading={priority ? "eager" : "lazy"}
      decoding="async"
      style={style}
    />
  );
}