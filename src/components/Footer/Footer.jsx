import React from 'react'
import { IoIosArrowForward } from 'react-icons/io';

const Footer = () => {

    const year = () => {
       return new Date().getFullYear();
    }

    return (
        <footer className='bg-zinc-100 py-20'>
            <div className='flex flex-wrap gap-y-10 max-w-[1200px] mx-auto px-10'>

                <div className='flex-1 basis-[300px]'>
                    <a href="#" className='text-3xl font-bold'>
                        Gr<span className='text-orange-500 uppercase'>o</span>cify
                    </a>

                    <p className='text-zinc-600 mt-5 max-w-[350px]'>
                        Bred for a high content of beneficial substances. Our products are all fresh and healty.
                    </p>

                    <p className='text-zinc-800 mt-5'>
                      {year()}  &copy; All Right Reserved 
                    </p>

                </div>

                <ul className='flex-1'>
                    <li>
                        <h5 className='text-zinc-800 text-2xl font-bold'>Company</h5>
                    </li>
                    <li className='mt-5'>
                        <a href="#" className='text-zinc-800 hover:text-orange-500'>About</a>
                    </li>
                    <li className='mt-5'>
                        <a href="#" className='text-zinc-800 hover:text-orange-500'>FAQ's</a>
                    </li>
                </ul>

                <ul className='flex-1'>
                    <li>
                        <h5 className='text-zinc-800 text-2xl font-bold'>Support</h5>
                    </li>
                    <li className='mt-5'>
                        <a href="#" className='text-zinc-800 hover:text-orange-500'>Support Center</a>
                    </li>
                    <li className='mt-5'>
                        <a href="#" className='text-zinc-800 hover:text-orange-500'>Contact Us</a>
                    </li>
                </ul>

                <div className='flex-1'>

                    <h5 className='text-zinc-800 text-2xl font-bold'>Stay Connected</h5>
                    <p className='text-zinc-600 mt-5'>
                        Question or Feedback ? <br />
                        we'd love to hear from you.
                    </p>

                    <div className='flex mt-5 bg-white rounded-lg p-1'>
                        <input type='email' name='email' id='email' autoComplete='off' placeholder='Type your email here' className='h-[5vh] flex-1 pl-2 focus:outline-none bg-white' />
                        <button className='bg-gradient-to-b from-orange-400 to-orange-500 p-2 rounded-lg text-white text-2xl hover:to-orange-600 cursor-pointer'>
                            <IoIosArrowForward />
                        </button>
                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer
