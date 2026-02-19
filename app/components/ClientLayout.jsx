"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import QueryProvider from "./QueryProvider";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const hideNavbar = pathname === "/contact";

  return (
    <QueryProvider>
      {!hideNavbar && <Navbar />}
      {children}
    </QueryProvider>
  );
}
