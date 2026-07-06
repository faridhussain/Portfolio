import { NextRequest, NextResponse } from 'next/server';
import { sendContactEmail } from '../../lib/mail';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();

        const { name, email, message } = body;

        if (!name || !email || !message) {
            return NextResponse.json(
                {
                    success: false,
                    message: 'All fields are required.',
                },
                {
                    status: 400,
                },
            );
        }

        await sendContactEmail({
            name,
            email,
            message,
        });

        return NextResponse.json({
            success: true,
            message: 'Email sent successfully.',
        });
    } catch (error) {
        console.error(error);

        return NextResponse.json(
            {
                success: false,
                message: 'Failed to send email.',
            },
            {
                status: 500,
            },
        );
    }
}
