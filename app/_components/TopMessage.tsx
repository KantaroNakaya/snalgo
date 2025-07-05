"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { topMessageData } from "../_data/topMessageData";

export default function TopMessage() {
    const [visibleElements, setVisibleElements] = useState<boolean[]>(
        new Array(topMessageData.paragraphs.length).fill(false)
    );
    const elementRefs = useRef<(HTMLParagraphElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = elementRefs.current.findIndex(
                            (ref) => ref === entry.target
                        );
                        if (index !== -1) {
                            setVisibleElements((prev) => {
                                const newState = [...prev];
                                newState[index] = true;
                                return newState;
                            });
                        }
                    }
                });
            },
            {
                threshold: 0.1,
                rootMargin: "0px 0px -50px 0px",
            }
        );

        elementRefs.current.forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section>
            <p className="max-w-3xl mx-auto py-4 text-center">
                <span className="text-2xl font-bold">
                    {topMessageData.title.line1}
                    <br />
                    {topMessageData.title.line2}
                    <br />
                    {topMessageData.title.line3}
                </span>
            </p>
            <Image
                className="mx-auto mb-16 animate-head-wiggle"
                src="/illust.png"
                alt=""
                width={300}
                height={300}
            />
            <div className="flex flex-col gap-8 max-w-lg mx-auto mb-8 px-10 text-2xl font-bold">
                {topMessageData.paragraphs.map((paragraph, index) => (
                    <p
                        key={paragraph.id}
                        ref={(el) => {
                            elementRefs.current[index] = el;
                        }}
                        className={`transition-all duration-1000 ease-out delay-${
                            paragraph.delay
                        } ${
                            visibleElements[index]
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                    >
                        {paragraph.text}
                    </p>
                ))}
            </div>
        </section>
    );
}
