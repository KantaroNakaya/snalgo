import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";

export default function Header() {
    return (
        <header className="bg-black/90 text-white shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="block">
                    <p className="text-2xl font-bold">AlgoSnap</p>
                </Link>
                <Menu />
            </div>
        </header>
    );
}
