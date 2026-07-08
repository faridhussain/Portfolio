import Image from 'next/image'
import Link from 'next/link'

export default function Hero() {
    return (
        <section id='home' className='scroll-mt-24 max-w-350 mx-auto px-6 lg:px-8 mt-5 sm:mt-20 lg:mt-28 pb-16 lg:pb-24'>
            <div className='flex flex-col-reverse lg:flex-row items-center lg:items-start justify-between gap-10 sm:gap-10 md:gap-1'>
                <div className='flex-1 flex flex-col gap-5 items-center text-center lg:items-start lg:text-left'>
                    <h1 className='sm:text-4xl text-2xl md:text-5xl lg:text-6xl font-bold leading-tight flex flex-col'>
                        <span className='text-[#7b55ce] mb-1'>Trust Me,</span>
                        <span className='tracking-tight leading-14'>I&apos;m a Frontend Developer.</span>
                    </h1>

                    <p className='sm:text-lg text-base md:text-xl text-[#565d6e] font-light lg:pr-10'>I build responsive, high-performance web applications using React, Next.js, and TypeScript with a focus on clean design, maintainable code, and intuitive user experiences.</p>

                    <div className='shine-badge inline-flex items-center gap-2.5 rounded-full border border-gray-200 bg-gray-50 pl-3 pr-4 py-2'>
                        <span className='relative z-20 flex h-2 w-2 shrink-0'>
                            <span className='animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7b55ce] opacity-75'></span>
                            <span className='relative inline-flex rounded-full h-2 w-2 bg-[#7b55ce]'></span>
                        </span>
                        <span className='relative z-20 text-sm text-gray-500'>
                            Currently learning <span className='text-gray-800 font-medium'>Node.js</span>, <span className='text-gray-800 font-medium'>Express</span> &amp; <span className='text-gray-800 font-medium'>MongoDB</span>
                        </span>
                    </div>

                    <div className='flex flex-col items-center lg:items-start gap-4 w-full sm:w-auto'>
                        <div className='flex flex-col sm:flex-row w-full sm:w-auto gap-4'>
                            <Link href='#contact' className='flex-1 sm:flex-none sm:w-auto bg-[#7b55ce] hover:bg-[#6942b4] duration-300 rounded-lg md:px-6 md:py-3 py-2.5 px-5 text-base md:text-lg font-medium text-white cursor-pointer text-center'>
                                Get in touch
                            </Link>

                            <Link href='/resume.pdf' download className='group w-full sm:w-auto border border-[#7b55ce] bg-white hover:shadow-lg hover:shadow-[#7b55ce]/15 transition-all duration-300 rounded-lg md:px-6 md:py-3 py-2.5 px-5 text-base md:text-lg font-medium flex items-center justify-center gap-2 text-[#7b55ce] cursor-pointer hover:bg-[#7b55ce]/5'>
                                <i className='ri-download-line'></i>
                                Download Resume
                            </Link>
                        </div>
                    </div>
                </div>

                <div className='group sm:w-64 sm:h-64 h-52 w-52 md:w-80 md:h-80 lg:w-95 lg:h-95 rounded-full overflow-hidden ring-4 ring-gray-100 shadow-lg hover:shadow-2xl transition-all duration-300'>
                    <Image src='/profile/farid2.png' alt='Farid Hussain' width={400} height={400} className='w-full h-full object-cover object-top transition-transform duration-300' />
                </div>
            </div>
        </section>
    )
}
