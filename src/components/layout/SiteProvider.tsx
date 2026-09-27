"use client";

import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

type SiteContextValue = {
  menuOpen: boolean;
  setMenuOpen: (v: boolean) => void;
  toast: string | null;
  showToast: (msg: string) => void;
  darkHeader: boolean;
  setDarkHeader: (v: boolean) => void;
};

const SiteContext = createContext<SiteContextValue>({
  menuOpen: false,
  setMenuOpen: () => {},
  toast: null,
  showToast: () => {},
  darkHeader: false,
  setDarkHeader: () => {},
});

export function SiteProvider({ children }: { children: ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkHeader, setDarkHeader] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const [toastTimer, setToastTimer] = useState<ReturnType<typeof setTimeout> | null>(null);

  const showToast = useCallback((msg: string) => {
    setToast(msg);
    if (toastTimer) clearTimeout(toastTimer);
    const t = setTimeout(() => setToast(null), 4000);
    setToastTimer(t);
  }, [toastTimer]);

  return (
    <SiteContext.Provider value={{ menuOpen, setMenuOpen, toast, showToast, darkHeader, setDarkHeader }}>
      {children}
    </SiteContext.Provider>
  );
}

export function useSite() {
  return useContext(SiteContext);
}

export function HeaderTheme({ dark }: { dark: boolean }) {
  const { setDarkHeader } = useSite();
  useEffect(() => {
    setDarkHeader(dark);
  }, [dark, setDarkHeader]);
  return null;
}