import "./globals.css";
import type { Metadata } from "next";
import { GoogleTagManager } from "@next/third-parties/google";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
    metadataBase: new URL("https://snalgo.com"),
    title: {
        template:
            "%s | Snalgo（スナルゴ） 隙間時間にスマホでプログラミング学習をしよう",
        default:
            "Snalgo（スナルゴ） 隙間時間にスマホでプログラミング学習をしよう",
    },
    description:
        "Snalgo（スナルゴ）でアルゴリズムを考える力を鍛えよう。スマホでできるので通勤などの隙間時間に片手で取り組めます。",
    openGraph: {
        title: `%s | Snalgo（スナルゴ） 隙間時間にスマホでプログラミング学習をしよう`,
        description:
            "Snalgo（スナルゴ）でアルゴリズムを考える力を鍛えよう。スマホでできるので通勤などの隙間時間に片手で取り組めます。",
        images: ["/ogp.jpg"],
    },
    alternates: {
        canonical: `https://snalgo.com`,
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
            <GoogleTagManager gtmId="GTM-N337R7JC" />
        </html>
    );
}
