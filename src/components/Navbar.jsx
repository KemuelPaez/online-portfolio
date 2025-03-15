import React, {useState} from 'react'
import {FaBars, FaTimes, FaLinkedin, FaGithub, FaSteam} from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import {Link} from 'react-scroll'
import clipboardCopy from 'clipboard-copy'
import Logo from '../assets/logo.png'

const Navbar = () => {
	const [nav, setNav] = useState(false);
	const [emailCopied, setEmailCopied] = useState(false);
	
	const handleClick = () => {
		setNav(!nav)
	}

	const handleCopyEmail = () => {
		clipboardCopy('kemkylepaez@gmail.com');
		setEmailCopied(true);
	
		setTimeout(() => {
		setEmailCopied(false);
		}, 2000);
	};

	return (
		<div className='fixed w-full h-[80px] flex justify-between items-center px-4 content-bg text-gray-300'>
			<div>
				<Link 
					to="home" 
					smooth={true} 
					duration={500} 
					className="cursor-pointer"
				>
					<img
						src={Logo}
						alt="Logo"
						className="w-12 cursor-pointer transition-transform duration-300 hover:scale-110 focus:scale-110"
						to="home"
					/>
				</Link>
			</div>
			{/* menu list */}
			<ul className='hidden md:flex cursor-pointer'>
				<li className='hover:scale-110 duration-100'>
					<Link 
						to="home" 
						smooth={true} 
						duration={500} 
					>
						Home
					</Link>
				</li>
				<li className='hover:scale-110 duration-100'>
					<Link 
						to="about" 
						smooth={true} 
						duration={500} 
					>
						About
					</Link>
				</li>
				<li className='hover:scale-110 duration-100'>
					<Link 
						to="skills" 
						smooth={true} 
						duration={500} 
					>
						Skills
					</Link>
				</li>
				<li className='hover:scale-110 duration-100'>
					<Link 
						to="demo" 
						smooth={true} 
						duration={500} 
					>
						Demos
					</Link>
				</li>
				<li className='hover:scale-110 duration-100'>
					<Link 
						to="contact" 
						smooth={true} 
						duration={500} 
					>
						Contact
					</Link>
				</li>
			</ul>
			{/* bars */}
			<div onClick={handleClick} className='md:hidden z-10'>
				{!nav ? <FaBars/> : <FaTimes/>} 
			</div>
			{/* mobile menu */}
			<ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#003333] flex flex-col justify-center items-center'}>
				<li className='py-6 text-4xl'>
					<Link 
						to="home" 
						smooth={true} 
						duration={500}
						onClick={handleClick}
					>
						Home
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					<Link 
						to="about" 
						smooth={true} 
						duration={500} 
						onClick={handleClick}
					>
						About
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					<Link 
						to="skills" 
						smooth={true} 
						duration={500} 
						onClick={handleClick}
					>
						Skills
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					<Link 
						to="demo" 
						smooth={true} 
						duration={500} 
						onClick={handleClick}
					>
						Demos
					</Link>
				</li>
				<li className='py-6 text-4xl'>
					<Link 
						to="contact" 
						smooth={true} 
						duration={500} 
						onClick={handleClick}
					>
						Contact
					</Link>
				</li>
			</ul>
			{/* social icons */}
			<div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
				<ul>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-108px] hover:ml-[-10px] duration-300 bg-blue-600'>
						<a 
						href="https://www.linkedin.com/in/kemuel-kyle-paez-a2a460275/" 
						target="_blank" rel="noopener noreferrer"
						className='flex justify-between items-center w-full text-gray-300'>
							LinkedIn <FaLinkedin size={30}/>
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-108px] hover:ml-[-10px] duration-300 bg-[#333333]'>
						<a 
						href="https://github.com/KemuelPaez" 
						target="_blank" rel="noopener noreferrer"
						className='flex justify-between items-center w-full text-gray-300'>
							Github <FaGithub size={30}/>
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-108px] hover:ml-[-10px] duration-300 bg-[#00adee]'>
						<a 
						href="https://steamcommunity.com/id/kempaez/" 
						target="_blank" rel="noopener noreferrer"
						className='flex justify-between items-center w-full text-gray-300'>
							Steam <FaSteam size={30}/>
						</a>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-108px] hover:ml-[-10px] duration-300 bg-[#407072]'>
						<button 
						onClick={handleCopyEmail}
						className='flex justify-between items-center w-full text-gray-300'>
							{emailCopied ? 'Email Copied!' : 'Email'} <HiOutlineMail size={30}/>
						</button>
					</li>
					<li className='w-[160px] h-[60px] flex justify-between items-center ml-[-108px] hover:ml-[-10px] duration-300 bg-[#9e9e9e]'>
						<a 
						href="https://drive.google.com/file/d/1FM5QaqUq_nvaSU-aDBZzgTr2JXxeRwBs/view?usp=sharing" 
						target="_blank" rel="noopener noreferrer"
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