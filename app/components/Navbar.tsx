import Link from 'next/link';

export default function Navbar() {
    return (
        <div className='w-full border-b border-gray-200'>
            <div className='flex justify-between w-[95%] md:w-[85%] lg:w-[70%] mx-auto py-2 md:py-3 lg:py-4 items-center'>
                <Link href='/' className='text-xl md:text-2xl lg:text-3xl font-medium tracking-tighter'>
                    Farid Hussain
                </Link>
                <div className='hidden md:flex gap-3'>
                    <Link className='bg-transparent hover:bg-gray-100 md:text-base lg:text-lg tracking-tight rounded py-2 px-3 font-medium text-[#626b77] hover:text-[#4a515c] duration-300 transition-all' href='/'>
                        Home
                    </Link>
                    <Link
                        className='bg-transparent hover:bg-gray-100 md:text-base lg:text-lg tracking-tight rounded py-2 px-3 font-medium text-[#626b77] hover:text-[#4a515c] duration-300 transition-all'
                        href='/about'
                    >
                        About
                    </Link>
                    <Link
                        className='bg-transparent hover:bg-gray-100 md:text-base lg:text-lg tracking-tight rounded py-2 px-3 font-medium text-[#626b77] hover:text-[#4a515c] duration-300 transition-all'
                        href='/projects'
                    >
                        Projects
                    </Link>
                    <Link
                        className='bg-transparent hover:bg-gray-100 md:text-base lg:text-lg tracking-tight rounded py-2 px-3 font-medium text-[#626b77] hover:text-[#4a515c] duration-300 transition-all'
                        href='/contact'
                    >
                        Contact
                    </Link>
                </div>

                {/* Mobile Menu Icon */}
                <button className='md:hidden text-3xl'>
                    <i className='ri-menu-3-line'></i>
                </button>
            </div>
        </div>
    );
}
