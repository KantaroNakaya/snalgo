import ContactForm from "@/app/_components/ContactForm";

export default function Page() {
    return (
        <div className="max-w-3xl mx-auto p-6">
            <p className="mb-10">
                ご質問やご相談は、下記のフォームをご利用ください。
                <br />
                内容確認後、担当者より通常３営業日以内に連絡いたします。
            </p>
            <ContactForm />
        </div>
    );
}
