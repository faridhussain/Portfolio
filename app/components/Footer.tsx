type SocialLink = {
    label: string;
    href: string;
    icon: string;
};

const socialLinks: SocialLink[] = [
    {
        label: 'GitHub',
        href: 'https://github.com/faridhussain',
        icon: 'ri-github-fill',
    },
    {
        label: 'X',
        href: 'https://x.com/Farid_HussainX',
        icon: 'ri-twitter-x-fill',
    },
    {
        label: 'LinkedIn',
        href: 'https://linkedin.com/in/farid-codes',
        icon: 'ri-linkedin-fill',
    },
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/___faridhere___',
        icon: 'ri-instagram-fill',
    },
];

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className='w-full max-w-350 mx-auto px-4 sm:px-6 lg:px-8 mt-8 sm:mt-20 lg:mt-28'>
            <div className='border-t border-gray-200 py-6 flex sm:flex-row items-center justify-between gap-4'>
                <div className='flex items-center gap-3 sm:gap-5'>
                    {socialLinks.map((social) => (
                        <a key={social.label} href={social.href} target='_blank' rel='noopener noreferrer' aria-label={social.label} className='group relative text-base sm:text-xl text-gray-500 hover:text-gray-800 duration-300'>
                            <i className={social.icon}></i>

                            <span className='pointer-events-none absolute left-1/2 -translate-x-1/2 -top-9 whitespace-nowrap rounded-md bg-gray-900 px-2.5 py-1 text-xs font-light text-white opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100 duration-200'>{social.label}</span>
                        </a>
                    ))}
                </div>

                <p className='sm:text-sm text-xs text-[#565d6e] font-light tracking-tight'>&copy; {year}</p>
            </div>
        </footer>
    );
}
