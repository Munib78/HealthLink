import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { AuthProvider } from "./provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className} style={{ maxHeight: "100vh" }}>
        <AuthProvider>
          <Navbar />
          {children}
          <footer className="mt-auto bg-gray-800 text-white p-4 text-center">
            <p>&copy; 2024 Your Website Name. All rights reserved.</p>
          </footer>
        </AuthProvider>
      </body>
    </html>
  );
}
