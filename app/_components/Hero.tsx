import Image from "next/image";

type Props = {
    title: string;
    sub: string;
};

export default function Hero({ title, sub }: Props) {
    return (
        <section className="relative h-[60vh] min-h-[400px] flex items-center">
            <div className="relative z-10 max-w-7xl mx-auto px-4">
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                    {title}
                </h1>
                <p className="text-xl text-white">{sub}</p>
            </div>
            <Image
                className="absolute inset-0 w-full h-full object-cover"
                src="/img-mv.jpg"
                alt=""
                width={4000}
                height={1200}
                priority
            />
            <div className="absolute inset-0 bg-black/40" />
        </section>
    );
}
