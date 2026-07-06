import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',

    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

type SendMailProps = {
    name: string;
    email: string;
    message: string;
};

export async function sendContactEmail({ name, email, message }: SendMailProps) {
    await transporter.sendMail({
        from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_TO,
        replyTo: email,

        subject: `New Contact Form Submission from ${name}`,

        html: `
            <div style="font-family: Arial, sans-serif;">
                <h2>New Contact Message</h2>

                <p><strong>Name:</strong> ${name}</p>

                <p><strong>Email:</strong> ${email}</p>

                <p><strong>Message:</strong></p>

                <p>${message.replace(/\n/g, '<br />')}</p>
            </div>
        `,
    });
}
