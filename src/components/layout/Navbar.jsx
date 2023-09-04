import React, { Fragment, useState } from 'react'
import Logo from "../../assets/images/logo.png"
import {GrLanguage} from "react-icons/gr"
import {FaXmark, FaBars} from "react-icons/fa6"
import { Link } from 'react-scroll'
const Navbar = () => {

    const [menuOpen,setMenuOpen] = useState(false)

    const menuToggle = ()=>{
        setMenuOpen(!menuOpen);
    }

    const navItem = [
        {link:"Overview",path:"home"},
        {link:"Feature",path:"feature"},
        {link:"About",path:"about"},
        {link:"Priching",path:"priching"},
    ]
  return (
    <Fragment>
        <nav className='bg-white md:px-14 p-4 max-w-screen-2xl mx-auto text-primary fixed top-0 left-0 right-0 nav'>
            <div className="text-lg container mx-auto flex justify-between items-center font-medium">
                <div className="flex space-x-14">
                    <a href="/" 
                       className='text-2xl font-semibold flex items-center space-x-3 text-primary'
                    >
                        <img src={Logo} 
                             className='w-10 inline-block items-center'           
                             alt="Logo" 
                        />
                        <span>Milon</span>
                    </a>
                    <ul className='md:flex space-x-12 hidden mt-1'>
                        {
                            navItem.map(({link,path})=> <Link spy={true} activeClass={'active'} smooth={true} offset={-100} key={link} to={path} className='block hover:text-gray-300 cursor-pointer' >{link}</Link>)
                        }
                    </ul>
                </div>
                <div className="space-x-12 hidden md:flex items-center">
                    <a href="/" className="hidden md:flex items-center hover:text-secondery"><GrLanguage className="mr-2"/> <span>Language</span></a>
                    <button className='bg-secondery py-2 px-4 transition-all duration-300 rounded hover:text-white hover:bg-indigo-600'>Sign up</button>
                </div>
                {/* Mobile Menu */}
                <div className="md:hidden">
                    <button onClick={menuToggle} className='text-white focus:outline-none focus:text-gray-300'>
                        {
                            menuOpen ? (<FaXmark className='w-6 h-6 text-primary'/>):(<FaBars className='w-6 h-6 text-primary'/>)
                        }
                    </button>
                </div>
            </div>
        </nav>
        <div className={`md:hidden space-y-4 px-4 pt-24 py-5 bg-secondery transition-all duration-75 ${menuOpen ? "block fixed top-0 left-0 right-0" : "hidden"}`}>
            {
                navItem.map(({link,path})=> <Link spy={true} activeClass={'active'} smooth={true} offset={-90} key={link} to={path} className='block text-white hover:text-gray-300 cursor-pointer' onClick={menuToggle}>{link}</Link>)
                
            }
        </div>
    </Fragment>
  )
}

export default Navbar