"use client";
import { Inter } from "next/font/google";
import Sidebar from "@/components/admin/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <html lang="en">
        <body className={inter.className}>
           <div className="flex w-full">
            <div className="">
              <Sidebar/>
            </div>
            <div className="bg-white w-full ">
                {children}
              </div> 
           </div>
            </body>
      </html>
  );
}
