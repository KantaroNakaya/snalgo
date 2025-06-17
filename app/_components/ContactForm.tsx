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
                <label className="block text-sm font-medium">
                    法人/個人
                </label>
                <div className="flex items-center space-x-4">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="type"
                            value="corporate"
                            className="form-radio"
                        />
                        <span className="ml-2">法人</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="type"
                            value="individual"
                            className="form-radio"
                        />
                        <span className="ml-2">個人</span>
                    </label>
                </div>
            </div>
            <div className="space-y-2">
                <label htmlFor="company" className="block text-sm font-medium">
                    会社名　※法人の場合は入力必須です
                </label>
                <input
                    type="text"
                    id="company"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-text-sub focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="company"
                />
            </div>
            <div className="space-y-2">
                <label
                    htmlFor="name"
                    className="block text-sm font-medium"
                >
                    お名前　※フルネームでお願いします
                </label>
                <input
                    type="text"
                    id="name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-text-sub focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="name"
                />
            </div>
            <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-medium">
                    メールアドレス
                </label>
                <input
                    type="email"
                    id="email"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-text-sub focus:outline-none focus:ring-2 focus:ring-blue-500"
                    name="email"
                />
            </div>
            <div className="space-y-2">
                <label className="block text-sm font-medium">
                    お問い合わせ内容
                </label>
                <div className="flex flex-col space-y-1">
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="inquiryType"
                            value="snalgo"
                            className="form-radio"
                        />
                        <span className="ml-2">「Snalgo」に関するお問い合わせ</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="inquiryType"
                            value="serviceRequest"
                            className="form-radio"
                        />
                        <span className="ml-2">サービス提供等のご依頼</span>
                    </label>
                    <label className="flex items-center">
                        <input
                            type="radio"
                            name="inquiryType"
                            value="other"
                            className="form-radio"
                        />
                        <span className="ml-2">その他</span>
                    </label>
                </div>
            </div>
            <div className="space-y-2">
                <label htmlFor="message" className="block text-sm font-medium">
                    メッセージ
                </label>
                <textarea
                    id="message"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md text-text-sub focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[150px]"
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
