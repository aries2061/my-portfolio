export const metadata = {
  title: "Aung Thura | Fullstack Developer",
  description:
    "Portfolio of Aung Thura — Fullstack Developer and Digital Solutions Specialist based in Bangkok, Thailand.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
