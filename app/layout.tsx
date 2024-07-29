"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import store from "@/lib/store";
import Navbar from "@/components/admin/Navbar";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname()
  const isDisabledNav = pathname.startsWith('/admin') || pathname === '/sign-up' || pathname === '/sign-in' || pathname === '/sign-in/factor-one'
  return (
    <Provider store={store}>
      <html lang="en">
        <body className={inter.className}>
        {!isDisabledNav && <Navbar />}
          {children}</body>
      </html>
    </Provider>
  );
}
