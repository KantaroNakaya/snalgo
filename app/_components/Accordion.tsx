import { useState } from "react";

type Props = {
    title: string;
    children: React.ReactNode;
};

export default function Accordion({ title, children }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="mb-4 border border-white-400 p-2 rounded-md cursor-pointer"
            onClick={() => setIsOpen(!isOpen)}
        >
            <h2 className="text-l font-bold flex justify-between items-center">
                {title}
                <span className="text-sm">{isOpen ? "▲" : "▼"}</span>
            </h2>
            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                    isOpen ? "max-h-40" : "max-h-0"
                }`}
            >
                <ul className="text-sm text-white-400 mt-4">{children}</ul>
            </div>
        </div>
    );
}
