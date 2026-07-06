import Image from 'next/image';

export default function Hero() {
    return (
        <div className='w-[95%] md:w-[85%] lg:w-[70%] mx-auto flex justify-between gap-20 mt-30'>
            <div id='left' className='w-3/5 flex flex-col gap-7'>
                <h1 className='text-5xl font-bold text-[#7b55ce] leading-tight'>
                    Trust Me, <br /> <span className='font-medium text-black tracking-tight'>I&#39;m a Frontend Developer.</span>
                </h1>
                <p className='text-xl text-[#565d6e] font-light'>
                    I build responsive and interactive web applications with a focus on clean design, smooth user experience, and maintainable code. Most of my work is on the frontend using React, TypeScript, and modern JavaScript, while I&#39;m currently learning backend development to expand my skill set through real-world projects. I enjoy turning ideas into intuitive interfaces, paying close
                    attention to responsiveness, performance, and the small details that improve the overall user experience. Every project I build is an opportunity to learn something new and become a better developer.
                </p>
                <div className='flex gap-5 mt-3'>
                    <button className='text-lg border border-gray-400 font-medium bg-gray-100 hover:bg-white rounded py-2 px-4 text-gray-700 cursor-pointer duration-300 flex gap-2 items-center'>
                        <i className='ri-arrow-down-line'></i>Know more
                    </button>
                    <button className='text-lg bg-[#7b55ce] py-2 px-4 text-white rounded hover:bg-[#6646ac] cursor-pointer duration-300 font-medium'>Get in touch</button>
                </div>
            </div>
            <div id='right' className='size-100 rounded-full overflow-hidden shrink-0 transition-all duration-300 hover:shadow-lg'>
                <Image className='h-full w-full object-cover' src='/profile/farid.png' alt='Farid Hussain' width={450} height={450} />
            </div>
        </div>
    );
}
