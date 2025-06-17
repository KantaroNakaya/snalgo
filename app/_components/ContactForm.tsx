"use client";

import { createContactData } from "@/app/_actions/contact";
import { useFormState } from "react-dom";
import { sendGTMEvent } from "@next/third-parties/google";

const initialState = {
    status: "",
    message: "",
};

export default function ContactForm() {
    const [state, formAction] = useFormState(createContactData, initialState);
    console.log(state);

    const handleSubmit = () => {
        sendGTMEvent({
            event: "contact",
            value: "submit",
        });
    };

    if (state.status === "success") {
        return (
            <p className="text-center py-4">
                お問い合わせいただき、ありがとうございます。
                <br />
                お返事まで今しばらくお待ちください。
            </p>
        );
    }
    return (
        <form action={formAction} className="space-y-6" onSubmit={handleSubmit}>
            <div className="space-y-2">
                <label
                    htmlFor="name"
                    className="block text-sm font-medium"
                >
                    名
                </label>
                <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="name"
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="company" className="block text-sm font-medium">
                    会社名
                </label>
                <input
                    type="text"
                    id="company"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="company"
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                    メールアドレス
                </label>
                <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="email"
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                    メッセージ
                </label>
                <textarea
                    id="message"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px]"
                    name="message"
                />
            </div>
            <div className="space-y-4">
                {state.status === "error" && (
                    <p className="text-red-600">{state.message}</p>
                )}
                <input
                    type="submit"
                    value="送信する"
                    className="w-full px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors cursor-pointer"
                />
            </div>
        </form>
    );
}
