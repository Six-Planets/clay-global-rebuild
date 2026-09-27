import { sanitizeUrl } from "@/lib/utils";
import { socials } from "@/data/site";
import { SocialIcon } from "./Icon";

export function Socials({ className }: { className?: string }) {
  return (
    <ul className={className}>
      {socials.map((s) => (
        <li key={s.label}>
          <a className="socials-button" href={sanitizeUrl(s.href)} target="_blank" rel="noopener noreferrer">
            <SocialIcon name={s.label} />
            <span>{s.label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
}