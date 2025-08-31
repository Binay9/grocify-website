import React, { useState } from 'react'
import { IoMdHeart } from "react-icons/io";
import { RiShoppingBagFill } from "react-icons/ri";
import { ImSearch } from "react-icons/im";
import { FiMenu } from "react-icons/fi";
import { TbMenu3 } from "react-icons/tb";

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    const toggleMenu = () => {
      setShowMenu(!showMenu)
    }

  return (
    <header className='bg-white fixed top-0 right-0 left-0'>
        <nav className='max-w-[1200px] mx-auto px-10 max-w-[1200px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center'>

            {/* Logo */}

            <a href="#" className='text-3xl font-bold'>
                Gr<span className='text-orange-500 uppercase'>o</span>cify
            </a>

            {/* Desktop Menu */}

            <ul className='md:flex items-center gap-x-15 hidden'>
              <li>
                <a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a>
              </li>
              <li>
                <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
              </li>
              <li>
                <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
              </li>
              <li>
                <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
              </li>
            </ul>

            {/* Nav Action */}
            <div className='flex item-center gap-x-5 '>

                    {/* Search Input */}
                <div className='md:flex p-1 border-2 border-orange-500 rounded-full hidden'>
                  <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off' 
                  className='flex-1 h-1px px-2 focus:outline-none' />
                  <button className='bg-gradient-to-b from-orange-300 to-orange-500 w-10 h-10 flex justify-center items-center rounded-full text-xl'>
                    <ImSearch />
                  </button>
                </div>

              <a href="" className='text-zinc-800 text-2xl my-auto'>
                <IoMdHeart />
              </a>
              <a href="" className='text-zinc-800 text-2xl my-auto'>
                <RiShoppingBagFill />
              </a>

                   {/* Hamberger */}
              <a href="#" className='my-auto text-3xl md:hidden' onClick={toggleMenu}>

                {showMenu ? <TbMenu3 /> : <FiMenu />}
                
              </a>

            </div>

            {/* Mobile Menu */}

            <ul className={`flex flex-col gap-y-10 bg-orange-500/15 backdrop-blur-xl rounded-xl p-10 items-center gap-x-15 md:hidden absolute top-30
               -left-full transform -translate-x-1/2 transition-all duration-500 ${showMenu ? 'left-1/2' : ""}`}>
              <li>
                <a href="#" className='font-semibold tracking-wider text-orange-500'>Home</a>
              </li>
              <li>
                <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About Us</a>
              </li>
              <li>
                <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
              </li>
              <li>
                <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
              </li>
              <li className='flex p-1 border-2 border-orange-500 rounded-full md:hidden'>
                  <input type="text" name='text' id='text' placeholder='Search...' autoComplete='off' 
                  className='flex-1 h-1px px-2 focus:outline-none' />
                  <button className='bg-gradient-to-b from-orange-300 to-orange-500 w-10 h-10 flex justify-center items-center rounded-full text-xl'>
                    <ImSearch />
                  </button>
              </li>

            </ul>
            

        </nav>
    </header>
  )
}

export default Navbar