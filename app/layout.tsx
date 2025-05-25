import "./globals.css";
import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";
import { GoogleTagManager } from "@next/third-parties/google";

export const metadata: Metadata = {
    metadataBase: new URL("https://algo-snap-js.vercel.app/"),
    title: {
        template:
            "%s | AlgoSnap（JavaScript編） スマホでサクッと学べるアルゴリズム基礎ドリル",
        default:
            "AlgoSnap（JavaScript編） スマホでサクッと学べるアルゴリズム基礎ドリル",
    },
    description:
        "AlgoSnap（JavaScript編）でアルゴリズムの基本を学ぼう。スマホでできるので通勤などの隙間時間にサクッとできます。",
    openGraph: {
        title: `%s | AlgoSnap（JavaScript編） スマホでサクッと学べるアルゴリズム基礎ドリル`,
        description:
            "AlgoSnap（JavaScript編）でアルゴリズムの基本を学ぼう。スマホでできるので通勤などの隙間時間にサクッとできます。",
        images: ["/ogp.png"],
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
            <body>
                <Header />
                {children}
                <Footer />
            </body>
            <GoogleTagManager gtmId="GTM-KQJ4KX4V" />
        </html>
    );
}
