'use client';
import { useState } from 'react';

type ContactMethod = {
    label: string;
    value: string;
    href: string;
    icon: string;
    external: boolean;
};

const contactMethods: ContactMethod[] = [
    {
        label: 'Email',
        value: 'faridhussain0011@gmail.com',
        href: 'mailto:faridhussain0011@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Farid,%0A%0AI%20would%20like%20to%20talk%20about...',
        icon: 'ri-mail-line',
        external: false,
    },
    {
        label: 'GitHub',
        value: 'github.com/faridhussain',
        href: 'https://github.com/faridhussain',
        icon: 'ri-github-fill',
        external: true,
    },
    {
        label: 'LinkedIn',
        value: 'linkedin.com/in/farid-codes',
        href: 'https://linkedin.com/in/farid-codes',
        icon: 'ri-linkedin-fill',
        external: true,
    },
    {
        label: 'X',
        value: 'x.com/Farid_HussainX',
        href: 'https://x.com/Farid_HussainX',
        icon: 'ri-twitter-x-line',
        external: true,
    },
];

export default function Contact() {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(form),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || 'Something went wrong.');
            }

            alert('Email sent successfully!');

            setForm({
                name: '',
                email: '',
                message: '',
            });
        } catch (error) {
            console.error(error);
            alert(error instanceof Error ? error.message : 'Failed to send email.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className='w-full max-w-350 mx-auto px-4 sm:px-6 lg:px-8 mt-25 lg:mt-33 mb-3'>
            <div className='flex flex-col items-center text-center lg:items-start lg:text-left gap-1 mb-12'>
                <h2 className='sm:text-4xl text-2xl md:text-5xl font-bold leading-tight'>
                    <span className='tracking-tight'>Let&apos;s Build Something.</span>
                </h2>

                <p className='md:text-lg text-base text-[#565d6e] font-light max-w-2xl'>Have a project in mind or just want to say hi? I&apos;d love to hear from you.</p>
            </div>

            <div className='w-full grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch'>
                <div className='w-full flex flex-col gap-5'>
                    {contactMethods.map((method) => (
                        <a key={method.label} href={method.href} target={method.external ? '_blank' : undefined} rel={method.external ? 'noopener noreferrer' : undefined} className='group w-full flex items-center gap-4 rounded-lg border border-[#F3F4F7] bg-gray-50 md:p-5 p-2'>
                            <div className='shrink-0 flex items-center justify-center h-7 w-7 md:w-11 md:h-11 rounded-lg bg-white border border-gray-200 text-[#7b55ce] text-base sm:text-xl'>
                                <i className={method.icon}></i>
                            </div>

                            <div className='flex flex-col'>
                                <span className='text-xs md:text-sm text-[#565d6e] font-light'>{method.label}</span>
                                <span className='text-sm sm:text-lg font-medium tracking-tight'>{method.value}</span>
                            </div>

                            <i className='ri-arrow-right-up-line md:text-lg text-gray-400 ml-auto transition-all duration-300 group-hover:text-[#7b55ce] group-hover:-translate-y-1 group-hover:translate-x-1'></i>
                        </a>
                    ))}
                </div>

                <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4 rounded-lg border border-gray-200 p-2 sm:p-5'>
                    <div className='flex flex-col gap-1.5'>
                        <label htmlFor='name' className='text-sm text-[#565d6e] font-light'>
                            Name
                        </label>

                        <input id='name' name='name' type='text' value={form.name} onChange={handleChange} required placeholder='Your name' className='w-full rounded-lg border border-gray-300 bg-gray-50 px-3 sm:px-4 sm:py-2.5 py-1.5 text-sm sm:text-base outline-none duration-300 focus:border-[#7b55ce] focus:bg-white' />
                    </div>

                    <div className='flex flex-col gap-1.5'>
                        <label htmlFor='email' className='text-sm text-[#565d6e] font-light'>
                            Email
                        </label>

                        <input id='email' name='email' type='email' value={form.email} onChange={handleChange} required placeholder='you@example.com' className='w-full rounded-lg border border-gray-300 bg-gray-50 px-3 sm:px-4 sm:py-2.5 py-1.5 text-sm sm:text-base outline-none duration-300 focus:border-[#7b55ce] focus:bg-white' />
                    </div>

                    <div className='flex flex-col gap-1.5'>
                        <label htmlFor='message' className='text-sm text-[#565d6e] font-light'>
                            Message
                        </label>

                        <textarea id='message' name='message' rows={5} value={form.message} onChange={handleChange} required placeholder='Tell me about your project...' className='w-full resize-none rounded-lg border border-gray-300 bg-gray-50 px-3 sm:px-4 sm:py-2.5 py-1.5 text-sm sm:text-base outline-none duration-300 focus:border-[#7b55ce] focus:bg-white' />
                    </div>

                    <button type='submit' disabled={loading} className='w-full group/submit mt-2 flex items-center justify-center gap-1.5 bg-[#7b55ce] hover:bg-[#6942b4] duration-300 rounded-lg px-4 sm:px-5 sm:py-3 py-2 text-base sm:text-lg font-medium text-white cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed'>
                        {loading ? 'Sending...' : 'Send Message'}

                        {!loading && <i className='ri-arrow-right-up-line text-lg transition-transform duration-300 group-hover/submit:-translate-y-0.5 group-hover/submit:translate-x-0.5'></i>}
                    </button>
                </form>
            </div>
        </section>
    );
}