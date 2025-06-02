import Image from "next/image";
import Link from "next/link";
import Menu from "./Menu";

export default function Header() {
    return (
        <header className="shadow-sm">
            <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
                <Link href="/" className="block">
                    <Image
                        src="/logo.jpg"
                        alt="AlgoSnap"
                        width={120}
                        height={63}
                    />
                </Link>
                <Menu />
            </div>
        </header>
    );
}
