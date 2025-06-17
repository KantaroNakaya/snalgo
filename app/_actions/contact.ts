"use server";

function validateEmail(email: string){
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

export async function createContactData(_prevState: any,formData: FormData){
    const rawFormData = {
        name: formData.get("name") as string,
        company: formData.get("company") as string,
        email: formData.get("email") as string,
        message: formData.get("message") as string,
    };

    if(!rawFormData.name){
        return{
            status: "error",
            message: "名を入力してください",
        }
    };
    if(!rawFormData.company){
        return{
            status: "error",
            message: "会社名を入力してください",
        }
    };
    if(!rawFormData.email){
        return{
            status: "error",
            message: "メールアドレスを入力してください",
        }
    };

    const result = await fetch(
        `https://api.hsforms.com/submissions/v3/integration/submit/${process.env.HUBSPOT_PORTAL_ID}/${process.env.HUBSPOT_FORM_ID}`,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fields: [
                    {
                        objectTypeId: "0-1",
                        name: "name",
                        value: rawFormData.name,
                    },
                    {
                        objectTypeId: "0-1",
                        name: "company",
                        value: rawFormData.company,
                    },
                    {
                        objectTypeId: "0-1",
                        name: "email",
                        value: rawFormData.email,
                    },
                    {
                        objectTypeId: "0-1",
                        name: "message",
                        value: rawFormData.message,
                    },
                ],
            }),
        },
    );

    try{
        await result.json();
    } catch(e){
        console.log(e);
        return{
            status: "error",
            message: "お問い合わせに失敗しました",
        };
    }

    return{
        status: "success", message: "OK"
    }
}