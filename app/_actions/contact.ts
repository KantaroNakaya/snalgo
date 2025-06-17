"use server";

import nodemailer from "nodemailer";

function validateEmail(email: string) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

export async function createContactData(_prevState: any, formData: FormData) {
    const rawFormData = {
        type: formData.get("type") as string,
        name: formData.get("name") as string,
        company: formData.get("company") as string,
        email: formData.get("email") as string,
        inquiryType: formData.get("inquiryType") as string,
        message: formData.get("message") as string,
    };

    if (!rawFormData.name) {
        return {
            status: "error",
            message: "名を入力してください",
        };
    }
    if (rawFormData.type === "corporate" && !rawFormData.company) {
        return {
            status: "error",
            message: "会社名を入力してください",
        };
    }
    if (!rawFormData.email) {
        return {
            status: "error",
            message: "メールアドレスを入力してください",
        };
    }

    if (!validateEmail(rawFormData.email)) {
        return {
            status: "error",
            message: "有効なメールアドレスを入力してください",
        };
    }

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.GMAIL_USER,
            pass: process.env.GMAIL_APP_PASSWORD,
        },
    });

    const inquiryTypeMap = {
        snalgo: "「Snalgo」に関するお問い合わせ",
        serviceRequest: "サービス提供等のご依頼",
        other: "その他",
    };

    const mailOptions = {
        from: process.env.GMAIL_USER,
        to: process.env.GMAIL_USER,
        subject: `お問い合わせ: ${
            rawFormData.type === "corporate"
                ? rawFormData.company
                : rawFormData.name
        }様より`,
        text: `
            【お問い合わせ種別】
            ${rawFormData.type === "corporate" ? "法人" : "個人"}

            【お名前】
            ${rawFormData.name}

            【会社名】
            ${rawFormData.type === "corporate" ? rawFormData.company : "個人"}

            【メールアドレス】
            ${rawFormData.email}

            【お問い合わせ内容】
            ${
                inquiryTypeMap[
                    rawFormData.inquiryType as keyof typeof inquiryTypeMap
                ] || "未選択"
            }

            【メッセージ】
            ${rawFormData.message}
        `,
    };

    try {
        await transporter.sendMail(mailOptions);
        return {
            status: "success",
            message: "お問い合わせを受け付けました",
        };
    } catch (e) {
        console.error(e);
        return {
            status: "error",
            message: "お問い合わせに失敗しました",
        };
    }
}
