import Image from 'next/image';
import Link from 'next/link';

export default function Hero() {
    return (
        <section id='home' className='scroll-mt-24 max-w-350 mx-auto px-6 lg:px-8 mt-5 sm:mt-20 lg:mt-28'>
            <div className='flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-10 sm:gap-14 md:gap-15'>
                <div className='flex-1 flex flex-col gap-7 items-center text-center lg:items-start lg:text-left'>
                    <h1 className='sm:text-4xl text-2xl md:text-5xl lg:text-6xl font-bold leading-tight flex flex-col'>
                        <span className='text-[#7b55ce]'>Trust Me,</span>
                        <span className='tracking-tight'>I&apos;m a Frontend Developer.</span>
                    </h1>

                    <p className='sm:text-lg text-base md:text-xl text-[#565d6e] font-light'>
                        I build responsive and interactive web applications with a focus on clean design, smooth user experience, and maintainable code. Most of my work is on the frontend using React, TypeScript, and modern JavaScript, while I&apos;m currently learning backend development to expand my skill set through real-world projects. I enjoy turning ideas into intuitive interfaces, paying
                        close attention to responsiveness, performance, and the small details that improve the overall user experience. Every project I build is an opportunity to learn something new and become a better developer.
                    </p>

                    <div className='flex flex-col sm:flex-row w-full sm:w-auto gap-4 mt-2'>
                        <Link href='#projects' className='w-full sm:w-auto border border-gray-300 bg-gray-100 hover:bg-white duration-300 rounded-lg md:px-5 md:py-3 py-2 px-4 text-base md:text-lg font-medium flex items-center justify-center gap-2 text-gray-700 cursor-pointer'>
                            <i className='ri-arrow-down-line'></i>
                            Know more
                        </Link>

                        <Link href='#contact' className='w-full sm:w-auto bg-[#7b55ce] hover:bg-[#6942b4] duration-300 rounded-lg md:px-5 md:py-3 py-2 px-4 text-base md:text-lg font-medium text-white cursor-pointer'>
                            Get in touch
                        </Link>
                    </div>
                </div>

                <div className='sm:w-70 sm:h-70 h-60 w-60 md:w-100 md:h-100 lg:w-112.5 lg:h-112.5 rounded-full overflow-hidden shrink-0 shadow-lg'>
                    <Image src='/profile/farid2.png' alt='Farid Hussain' width={450} height={450} className='w-full h-full object-cover' priority />
                </div>
            </div>
        </section>
    );
}
