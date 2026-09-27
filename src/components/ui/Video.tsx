"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type VideoProps = {
  video: string
  mobileVideo?: string
  poster?: string
  mobilePoster?: string
  alt?: string
  className?: string
  mediaClassName?: string
  /** play only when scrolled into view (default true) */
  inViewOnly?: boolean
  animateIn?: boolean
}

/**
 * Cover-aspect muted looping video with poster-first loading.
 * Chooses the mobile source/poster under 768px. Only fetches the
 * file (preload=none) once the element approaches the viewport,
 * mirroring clay.global's lazy intro-video behavior.
 */
export default function Video({
  video,
  mobileVideo,
  poster,
  mobilePoster,
  alt = "",
  className,
  mediaClassName,
  inViewOnly = true,
  animateIn = false,
}: VideoProps) {
  const ref = useRef<HTMLVideoElement | null>(null)
  const [playing, setPlaying] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [visible, setVisible] = useState(!inViewOnly)

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)")
    const update = () => setIsMobile(mq.matches)
    update()
    mq.addEventListener("change", update)
    return () => mq.removeEventListener("change", update)
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el || !inViewOnly) {
      if (ref.current) ref.current.load()
      return
    }
    const io = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting)
        if (entry.isIntersecting) {
          const v = ref.current
          if (!v) return
          v.load()
          v.play().then(() => setPlaying(true)).catch(() => setPlaying(false))
        } else {
          ref.current?.pause()
        }
      },
      { rootMargin: "150px 0px" },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [inViewOnly, video, mobileVideo])

  const src = isMobile && mobileVideo ? mobileVideo : video
  const image = isMobile && mobilePoster ? mobilePoster : poster

  return (
    <div className={cn("video", animateIn && "video--animate", playing && "video--playing", className)}>
      <div className={cn("video__media", mediaClassName)}>
        {image ? <img className="video__poster" src={image} alt={alt} aria-hidden={Boolean(visible)} /> : null}
        <video
          ref={ref}
          className="video__el"
          src={src}
          poster={image}
          muted
          loop
          playsInline
          autoPlay={!inViewOnly}
          preload={inViewOnly ? "none" : "metadata"}
          aria-label={alt}
        />
      </div>
    </div>
  )
}