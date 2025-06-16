"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Footer from "./Footer";

export default function ClientLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isTopPage = pathname === "/";

    return (
        <>
            <Header />
            {children}
            {!isTopPage && <Footer />}
        </>
    );
}
