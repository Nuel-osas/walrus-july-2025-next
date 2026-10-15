import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Walrus — July 2025",
  description: "A reconstruction of the July 2025 Walrus website.",
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="w-mod-js">
      <body>{children}</body>
    </html>
  );
}
