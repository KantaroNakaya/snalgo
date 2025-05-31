import Image from "next/image";

type Props = {
    title: string;
    sub: string;
};

export default function Hero({ title, sub }: Props) {
    return (
        <section className="h-[60vh] min-h-[400px] flex items-center bg-black/90">
            <div className="max-w-7xl mx-auto px-4">
                <h1 className="text-4xl font-bold text-white mb-4">
                    {title}
                </h1>
                <p className="text-xl text-white">{sub}</p>
            </div>
        </section>
    );
}
