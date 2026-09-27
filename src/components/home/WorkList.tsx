import Link from "next/link";
import MainImage from "../ui/MainImage";
import Video from "../ui/Video";
import Reveal from "../ui/Reveal";
import { cn } from "@/lib/utils";
import { workMedia } from "@/data/projects";
import type { Project } from "@/data/projects";

const tileClass = (size: Project["size"]): string => {
  switch (size) {
    case "small":
      return "mosaic__tile--w2 mosaic__tile--w2h3";
    case "medium":
      return "mosaic__tile--w3 mosaic__tile--w3h2";
    case "large":
      return "mosaic__tile--w6 mosaic__tile--w6h3";
  }
};

export function WorkCard({ project, className }: { project: Project; className?: string }) {
  const href = project.href ?? (project.label === "View case study" ? `/work/${project.slug}` : undefined);
  const media = workMedia[project.slug];

  const inner = (
    <>
      <div
        className="workcard__media"
        style={
          media?.bg
            ? { backgroundColor: media.bg, ["--workcard-fg" as string]: media.fg ?? "#ffffff" }
            : undefined
        }
      >
        <div className="workcard__aspect">
          {media?.video ? (
            <Video
              video={media.video}
              mobileVideo={media.mobileVideo}
              poster={media.poster}
              mobilePoster={media.mobilePoster}
              alt={project.client}
              className="workcard__videoRoot"
            />
          ) : (
            <MainImage src={media?.poster ?? project.image} alt={project.client} sizes="(min-width: 768px) 50vw, 100vw" className="workcard__img" />
          )}
          <span className="workcard__pill" style={media?.fg ? { color: media.fg } : undefined}>
            {project.category}
          </span>
          {media?.caption ? <span className="workcard__pill workcard__pill--ghost">{media.caption}</span> : null}
        </div>
      </div>
      <div className="workcard__body">
        <h3 className="h-card workcard__title">{project.client}</h3>
        <p className="t-sm workcard__desc">{project.description}</p>
      </div>
    </>
  );

  if (!href) {
    return <div className={cn("workcard", className)}>{inner}</div>;
  }

  return (
    <Link className={cn("workcard", className)} href={href}>
      {inner}
    </Link>
  );
}

export function WorkList({
  projects,
  className,
}: {
  projects: Project[];
  className?: string;
}) {
  return (
    <div className={cn("mosaic", className)}>
      {projects.map((p, i) => (
        <Reveal
          className={cn("mosaic__tile", tileClass(p.size))}
          delay={(i % 3) * 90}
          key={p.slug}
          as="div"
        >
          <WorkCard project={p} />
        </Reveal>
      ))}
    </div>
  );
}