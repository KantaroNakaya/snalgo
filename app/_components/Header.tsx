import Link from "next/link";
import Menu from "./Menu";
import { Iceland } from "next/font/google";

const iceland = Iceland({
    weight: "400",
    subsets: ["latin"],
});

export default function Header() {
    return (
        <header className="shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="block">
                    <span className={`text-2xl font-bold ${iceland.className}`}>
                        Snalgo
                    </span>
                </Link>
                <Menu />
            </div>
        </header>
    );
}
