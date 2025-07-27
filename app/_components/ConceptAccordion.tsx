"use client";

import { useState } from "react";

interface ConceptAccordionProps {
    title: string;
    items: string[];
    index: number;
}

export default function ConceptAccordion({ title, items, index }: ConceptAccordionProps) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSection = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="mb-4">
            <button
                onClick={toggleSection}
                className="w-full mb-8 p-2 bg-bg-sub text-text-sub text-xl font-bold text-center rounded-lg flex items-center justify-between"
            >
                <h2>{title}</h2>
                <span
                    className={`transform transition-transform ${
                        isOpen ? "rotate-180" : ""
                    }`}
                >
                    ▼
                </span>
            </button>
            {isOpen && (
                <ul className="flex flex-col gap-8 mb-10 text-xl font-bold">
                    {items.map((item, idx) => (
                        <li key={idx}>{item}</li>
                    ))}
                </ul>
            )}
        </section>
    );
} 