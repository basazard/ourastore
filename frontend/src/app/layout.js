import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./context/authContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OURASTORE - Top Up Game Termurah dan Tercepat Se-Indonesia",
  description: "Ourastore",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          {children}
          <ToastContainer position="top-center" theme="dark" />
        </AuthProvider>
      </body>
    </html>
  );
}
