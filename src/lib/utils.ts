export function cn(...classes: (string | false | null | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

export function sanitizeUrl(href?: string): string | undefined {
  if (!href) return undefined
  if (href === '#') return '/'
  return href
}