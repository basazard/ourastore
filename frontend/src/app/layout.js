import "./globals.css";

export const metadata = {
  title: "Ourastore",
  description: "Top Up Game Termurah Dan Tercepat Se-Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>

        <main>{children}</main>
      </body>
    </html>
  );
}
