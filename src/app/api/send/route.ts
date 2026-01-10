import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
    const resend = new Resend(process.env.RESEND_API_KEY);

    try {
        const body = await request.json();
        const { name, email, project, message } = body;

        const { data, error } = await resend.emails.send({
            from: 'Studio Landing <onboarding@resend.dev>',
            to: ['ashitoshlavhate2@gmail.com'],
            replyTo: email as string,
            subject: `New Project Inquiry from ${name}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2>New Inquiry Received</h2>
                    <p>You have a new project request from your website.</p>
                    <hr style="border: 1px solid #eaeaea; margin: 20px 0;" />
                    
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                    <p><strong>Message:</strong></p>
                    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; color: #333;">
                        ${message}
                    </div>
                </div>
            `,
        });

        if (error) {
            console.error('Resend API Error:', error);
            return NextResponse.json({ error }, { status: 400 });
        }

        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
