"use client";

import { useSite } from "./SiteProvider";

export default function Toasts() {
  const { toast } = useSite();

  if (!toast) return null;

  return (
    <div className="toast" role="status" aria-live="polite">
      {toast}
    </div>
  );
}