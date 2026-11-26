/**
 * Passthrough root layout so `app/[locale]/layout.jsx` owns `<html lang>`.
 * Required by the App Router; locale pages set language for SSR crawlers.
 */
export default function RootLayout({ children }) {
  return children;
}
