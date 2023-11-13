import EmailTemplate from "@/components/EmailTemplate";
import { MISSING_FIELDS } from "@/consts";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const validateFields = (fields: {
  name: string;
  email: string;
  message: string;
}): boolean => {
  const schema = z.object({
    name: z.string().min(2),
    email: z.string().email(),
    message: z.string().min(2),
  });

  const result = schema.safeParse(fields);
  return !result.success;
};

export async function POST(req: Request) {
  try {
    const data = await req.formData();
    const { searchParams } = new URL(req.url);
    const nojs = searchParams.get("nojs");

    const body = {
      name: data.get("name") as string,
      email: data.get("email") as string,
      message: data.get("message") as string,
    };

    const errors = validateFields(body);

    if (errors) {
      return NextResponse.json(
        {},
        {
          status: 400,
          statusText: MISSING_FIELDS,
        },
      );
    } else {
      const resend = new Resend(process.env.RESEND_KEY);
      const data = await resend.emails.send({
        from: `${body.name} <onboarding@resend.dev>`,
        to: [process.env.NEXT_PUBLIC_EMAIL_ADDRESS as string],
        subject: body.email,
        react: EmailTemplate(body),
      });

      if (data.data?.id) {
        if (nojs) {
          return NextResponse.redirect(
            `${process.env.BASE_URL}/thanks?to=${body.name}`,
            301,
          );
        } else {
          return NextResponse.json({}, { status: 200 });
        }
      } else {
        throw new Error("Resend error");
      }
    }
  } catch (error) {
    console.log("Server Error: " + error);

    return NextResponse.json(
      {},
      {
        status: 500,
        statusText: "Server Error",
      },
    );
  }
}
