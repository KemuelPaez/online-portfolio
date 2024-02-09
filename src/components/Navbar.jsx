import React, {useState} from 'react'
import {FaBars, FaTimes, FaLinkedin, FaGithub, FaSteam} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo.png'

const Navbar = () => {
	const [nav, setNav] = useState(false);
	
	const handleClick = () => {
		setNav(!nav)
	}

	return (
		<div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#003333] text-gray-300'>
			<div>
				<img src={Logo} alt='Logo' style={{width: '50px'}} />
			</div>
			{/* menu list */}
			<ul className='hidden md:flex'>
				<li>Home</li>
				<li>About</li>
				<li>Skills</li>
				<li>Contact</li>
			</ul>
			{/* bars */}
			<div onClick={handleClick} className='md:hidden z-10'>
				{!nav ? <FaBars/> : <FaTimes/>} 
			</div>
			{/* mobile menu */}
			<ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#003333] flex flex-col justify-center items-center'}>
				<li className='py-6 text-4xl'>Home</li>
				<li className='py-6 text-4xl'>About</li>
				<li className='py-6 text-4xl'>Skills</li>
				<li className='py-6 text-4xl'>Contact</li>
			</ul>
			{/* social icons */}
			<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
				<ul>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-108px] hover:ml-[-10px] duration-300 bg-blue-600'>
						<a 
						href="/" 
						className='flex justify-between items-center w-full text-gray-300'>
							LinkedIn <FaLinkedin size={30}/>
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-108px] hover:ml-[-10px] duration-300 bg-[#333333]'>
						<a 
						href="/" 
						className='flex justify-between items-center w-full text-gray-300'>
							Github <FaGithub size={30}/>
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-108px] hover:ml-[-10px] duration-300 bg-[#00adee]'>
						<a 
						href="/" 
						className='flex justify-between items-center w-full text-gray-300'>
							Steam <FaSteam size={30}/>
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-108px] hover:ml-[-10px] duration-300 bg-[#407072]'>
						<a 
						href="/" 
						className='flex justify-between items-center w-full text-gray-300'>
							Email <HiOutlineMail size={30}/>
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-108px] hover:ml-[-10px] duration-300 bg-[#9e9e9e]'>
						<a 
						href="/" 
						className='flex justify-between items-center w-full text-gray-300'>
							Resume <BsFillPersonLinesFill size={30}/>
						</a>
					</li>
				</ul>
			</div>
		</div>
	)
}

export default Navbar