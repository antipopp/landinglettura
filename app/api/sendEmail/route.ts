import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
	try {
		const { to, cc, bcc, message } = await req.json();

		const transporter = nodemailer.createTransport({
			host: process.env.SMTP_HOST,
			port: Number(process.env.SMTP_PORT),
			secure: true,
			auth: {
				user: process.env.SMTP_USER,
				pass: process.env.SMTP_PASS,
			},
		});

		const info = await transporter.sendMail({
			from: process.env.NEXT_PUBLIC_EMAIL_TO,
			to,
			cc,
			bcc,
			subject: message.subject || "No Subject",
			text: message.text,
			html: message.html,
		});

		return NextResponse.json(
			{ message: "Email sent successfully", info },
			{ status: 200 },
		);
	} catch (error) {
		console.error("Error sending email:", error);
		return NextResponse.json(
			// biome-ignore lint/suspicious/noExplicitAny: <explanation>
			{ message: "Failed to send email", error: (error as any).message },
			{ status: 500 },
		);
	}
}
