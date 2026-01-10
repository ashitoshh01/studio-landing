import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, project, message } = body;

        const { data, error } = await resend.emails.send({
            from: 'Contact Form <onboarding@resend.dev>',
            to: ['ashitoshh01@gmail.com'], // Defaulting to an email or ideally the user's email if known. I'll use a placeholder or ask. 
            // User said "our team contacts them". I'll send to a generic address or the user's likely email. 
            // For now I will use a dummy 'delivered@resend.dev' or similar if they haven't verified a domain.
            // Actually, 'onboarding@resend.dev' can only send TO the verified email address (usually the one who signed up).
            // Since I don't know the verified email, I'll assume the user wants it sent to *them*.
            // I'll leave a comment.
            subject: `New Project Inquiry from ${name}`,
            html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Project Type:</strong> ${project || 'Not specified'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        if (error) {
            return NextResponse.json({ error }, { status: 400 });
        }

        return NextResponse.json({ data });
    } catch (error) {
        return NextResponse.json({ error }, { status: 500 });
    }
}
