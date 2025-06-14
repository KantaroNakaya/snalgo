import "./globals.css";
import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
    metadataBase: new URL("https://snalgo.vercel.app/"),
    title: {
        template: "%s | Snalgo（スナルゴ） 隙間時間にスマホでドリル学習しよう",
        default: "Snalgo（スナルゴ） 隙間時間にスマホでドリル学習しよう",
    },
    description:
        "Snalgo（スナルゴ）でアルゴリズムを考える力を鍛えよう。スマホでできるので通勤などの隙間時間に片手で取り組めます。",
    openGraph: {
        title: `%s | Snalgo（スナルゴ） 隙間時間にスマホでドリル学習しよう`,
        description:
            "Snalgo（スナルゴ）でアルゴリズムを考える力を鍛えよう。スマホでできるので通勤などの隙間時間に片手で取り組めます。",
        images: ["/ogp.jpg"],
    },
    alternates: {
        canonical: `http://localhost:3000`,
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ja">
            <body className="bg-bg-main text-text-main min-h-screen">
                <Header />
                {children}
                <Footer />
            </body>
            <GoogleTagManager gtmId="GTM-WK2KH6VZ" />
        </html>
    );
}
