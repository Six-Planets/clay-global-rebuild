import { cn } from "@/lib/utils";

export function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg width="1em" height="0.62em" viewBox="0 0 21 13" fill="none" className={cn("chevron", className)} aria-hidden="true">
      <path d="m1.467 1.732 9.018 8.852 8.684-8.524" stroke="currentColor" strokeWidth="2.5" />
    </svg>
  );
}

export function ArrowIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      preserveAspectRatio="none"
      fill="currentColor"
      role="presentation"
      className={cn("icon-arrow", className)}
      aria-hidden="true"
    >
      <path d="M16.6075 11.8572L13.255 8.40897L14.1388 7.5L19 12.5L14.1388 17.5L13.255 16.591L16.6075 13.1428H5V11.8572H16.6075Z" />
    </svg>
  );
}

export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="none" className={className} width="16" height="16" aria-hidden="true">
      <path
        fill="#fff"
        fillRule="evenodd"
        d="M19.216 6.393 8.332 17.277l-7.55-7.55 1.767-1.769 5.783 5.783 9.116-9.116 1.768 1.768Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const socialPaths: Record<string, string> = {
  Dribbble: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.6 4.6c1.3 1.6 2.1 3.6 2.2 5.7-1.8-.6-3.2-1-6.4-1.1l-.9-2c1.2-1 2.7-1.9 5.1-2.6ZM12 3.3c1.8 0 3.5.6 4.9 1.5-2 .7-3.3 1.5-4.6 2.6-1.4-1.9-2.9-3.5-5.7-4.6A8.7 8.7 0 0 1 12 3.3Zm-4.6 1A17 17 0 0 1 11 7.4c-3.9 1.3-6.2 3-7.5 6A8.7 8.7 0 0 1 3.4 12c0-3 1.6-5.6 4-7.7ZM5.4 18c-1.3-1.5-2.1-3.4-2.2-5.4 1.5 1.9 3.5 3.2 5.6 3.9-.7 1-1.8 2.2-3.4 3.4A8.6 8.6 0 0 1 5.4 18Zm2.2 1c1.5-1 2.6-2 3.3-3 1.9.3 5.2.5 7.3.9a8.7 8.7 0 0 1-10.6 2Zm5.4-4.3c.6-1 1.2-2.2 1.4-3.7 2.8.1 5.5.5 7.2 1.1-.7 2.6-2.4 4.8-4.6 6.1-.6-1.5-1.9-2.7-4-3.5Z",
  Instagram:
    "M12 2.2c2.7 0 3 0 4.1.1 2.5.1 3.9 1.4 4 4 .1 2.5 0 3 0 5.7s.1 3.2-.1 5.7c-.1 2.6-1.5 3.9-4 4-2.5.1-3 0-5.7 0s-3.2.1-5.7 0c-2.6-.1-3.9-1.4-4-4-.1-2.5 0-3 0-5.7s-.1-3.2 0-5.7c.1-2.6 1.5-3.9 4-4C8.8 2.2 9 2.2 12 2.2Zm0 2.1c-3.2 0-3.5 0-4 0-1.7.1-2.6 1-2.7 2.9-.1 2.2 0 2.7 0 5.8s-.1 3.6.1 5.8c.1 1.9 1 2.8 2.7 2.9 2.3.1 2.6 0 5.9 0s3.6.1 5.9 0c1.6-.2 2.6-1.1 2.7-2.9.1-2.2 0-2.7 0-5.8s.1-3.6 0-5.8c-.1-1.9-1.1-2.8-2.7-2.9-2.3-.1-2.7 0-5.9 0Zm0 .5a4.2 4.2 0 1 1 0 8.4 4.2 4.2 0 0 1 0-8.4Zm0 2a2.2 2.2 0 1 0 0 4.4 2.2 2.2 0 0 0 0-4.4Zm4.4-3.2A1 1 0 1 1 18 5a1 1 0 0 1 0 2Z",
  LinkedIn:
    "M6.9 8.7H3.4v12h3.5v-12ZM5.2 3.4 3.4 3.5a1.7 1.7 0 0 0-.3 3.4l1.8.1a1.7 1.7 0 0 0 .3-3.4Zm8.7 5.3c-1.1 0-1.9.5-2.5 1.1V8.7H8v12h3.4v-6a1.4 1.4 0 0 1 .6-1.3c.4-.2.8-.3 1.3-.3.9 0 1.4.6 1.4 1.7v6h3.5v-6.7c0-2.8-1.3-4-3.5-4.1Z",
  Twitter:
    "M13.9 10.8 21.4 2h-1.8l-6.5 7.6L7.3 2H1.6l7.9 11.5L1.6 22.8h1.8l6.9-8 5.5 8h5.7l-8.2-11.9Zm-2.4 2.9-.8-1.2-6.4-9.2h2.8l5.2 7.4.8 1.2 6.7 9.6h-2.8l-5.5-7.8Z",
  Behance:
    "M8.4 5.3c.6.1 1.2.1 2 .2.5.1 1 .2 1.4.5.4.2.7.5 1 .9.2.4.3.9.3 1.4-.1 1.1-.6 2-1.4 2.4.6.3 1.2 1 1.4 2 .2 1.2 0 2.5-.9 3.3-.5.5-1.2.9-2 .9-.9.1-1.8.1-2.8.1H1.5V5.3h6.9Zm-.6 4.1c.8 0 1.5 0 2.3-.1.4-.1.7-.3 1-.6.3-.3.4-.7.4-1.1 0-.5-.2-1-.6-1.3-.3-.3-.8-.5-1.3-.5h-4.6l4.3 3.6Zm4.1 4.6c.3.4.5.8.5 1.3 0 .4-.1.8-.4 1.1-.4.4-.9.6-1.4.6-.8.1-1.7.1-2.5.1H2.6v-3.6h4.6c1 0 2 0 2.9.1.6.1 1.2.4 1.5.8l.9.5Z",
  Facebook:
    "M20.9 2H3.1C2.5 2 2 2.5 2 3.1v17.8c0 .6.5 1.1 1.1 1.1h9.6v-7.7H9.9v-3h2.8V8.7c0-2.8 1.7-4.3 4.2-4.3 1.2 0 2.2.1 2.5.1v2.9h-1.7c-1.4 0-1.6.7-1.6 1.6v2.1h3.2l-.4 3h-2.8V22h5.6c.6 0 1.1-.5 1.1-1.1V3.1c0-.6-.5-1.1-1.1-1.1Z",
};

export function SocialIcon({ name, className }: { name: string; className?: string }) {
  const d = socialPaths[name] ?? socialPaths.Dribbble;
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} width="22" height="22" aria-hidden="true">
      <path d={d} />
    </svg>
  );
}