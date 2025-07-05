"use client";

import { useState, useEffect, useRef } from "react";
import ButtonLink from "./ButtonLink";

export default function TopButtons() {
    const [visibleButtons, setVisibleButtons] = useState<boolean[]>([
        false,
        false,
        false,
    ]);
    const buttonRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = buttonRefs.current.findIndex(
                            (ref) => ref === entry.target
                        );
                        if (index !== -1) {
                            setVisibleButtons((prev) => {
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

        buttonRefs.current.forEach((ref) => {
            if (ref) {
                observer.observe(ref);
            }
        });

        return () => observer.disconnect();
    }, []);

    const buttons = [
        { href: "/concept", text: "コンセプト", delay: 0 },
        { href: "/workbook", text: "問題一覧", delay: 200 },
        { href: "/news", text: "お知らせ一覧", delay: 400 },
    ];

    return (
        <>
            <section className="flex flex-col items-center pb-6">
                {buttons.map((button, index) => (
                    <div
                        key={button.href}
                        ref={(el) => {
                            buttonRefs.current[index] = el;
                        }}
                        className={`transition-all duration-1000 ease-out delay-${
                            button.delay
                        } ${
                            visibleButtons[index]
                                ? "opacity-100 translate-y-0"
                                : "opacity-0 translate-y-8"
                        }`}
                    >
                        <ButtonLink href={button.href}>
                            {button.text}
                        </ButtonLink>
                    </div>
                ))}
            </section>
        </>
    );
}
