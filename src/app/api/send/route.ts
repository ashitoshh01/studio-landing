import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
        console.error('Missing RESEND_API_KEY environment variable');
        return NextResponse.json({ error: { message: 'Server misconfiguration: Missing email API key' } }, { status: 500 });
    }

    const resend = new Resend(apiKey);

    try {
        const body = await request.json();
        const { name, email, phone, projectType, message } = body;

        // Simple HTML escape helpers
        const escapeHtml = (unsafe: string) => {
            return (unsafe || '').replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        }

        const safeName = escapeHtml(name);
        const safeEmail = escapeHtml(email);
        const safeMessage = escapeHtml(message);
        const safePhone = escapeHtml(phone || 'None');

        const projectTypesValue = Array.isArray(projectType) && projectType.length > 0
            ? projectType.map((t: string) => escapeHtml(t)).join(', ')
            : 'None';

        const { data, error } = await resend.emails.send({
            from: 'Studio Landing <onboarding@resend.dev>',
            to: ['apixbuild@gmail.com'],
            replyTo: email as string,
            subject: `New Project Inquiry from ${name}`,
            html: `
                <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
                    <h2>New Inquiry Received</h2>
                    <p>You have a new project request from your website.</p>
                    <hr style="border: 1px solid #eaeaea; margin: 20px 0;" />
                    
                    <p><strong>Name:</strong> ${safeName}</p>
                    <p><strong>Email:</strong> <a href="mailto:${safeEmail}">${safeEmail}</a></p>
                    <p><strong>Phone:</strong> ${safePhone}</p>
                    <p><strong>Interested In:</strong> ${projectTypesValue}</p>
                    <p><strong>Message:</strong></p>
                    <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; color: #333;">
                        ${safeMessage}
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
