import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'
import {Link} from 'react-scroll'
import ProfileImage from '../assets/gradpic.jpeg'

const Home = () => {
	return (
		<div name='home' className='w-full h-screen content-bg'>
			<div className='max-w-[1080px] mx-auto px-8 flex flex-col justify-center h-full'>
				<div className='flex flex-col sm:flex-row'>
					<div className='sm:w-1/8 p-4'>
						<p className='text-[#e84d5f] text-1xl'>Hi, my name is</p>
						<h1 className='text-4xl sm:text-6xl font-bold text-[#f2f0ec]'>
							Kemuel Kyle Paez
						</h1>
						<h2 className='text-4xl sm:text-4xl font-bold text-[#9a9996]'>
							I'm a Developer
						</h2>
						<p className='text-[#9a9996] py-4 max-w-[700px] hover:text-white duration-200'>
							a passionate developer with a strong desire to learn and grow.
							With a proactive mindset and a hunger for knowledge, I eagerly
							embrace emerging technologies and seek out innovative solutions.
							I am excited to contribute my skills and dedication to create
							impactful and meaningful projects.
						</p>
					<div>
						<button className='text-white group border-2 px-6 py-3 my-2 flex items-center rounded hover:bg-[#007777] hover:border-[#007777]'>
							<Link 
								to="about" 
								smooth={true} 
								duration={500} 
							>
								About Me
							</Link>
							<span className='group-hover:rotate-90 duration-300'>
								<HiArrowNarrowRight className='ml-3' />
							</span>
						</button>
					</div>
					</div>
					<div className='sm:w-1/2 flex items-center justify-end'>
						<div className='w-[300px] h-[300px] rounded-full border-2 border-[#007777] hover:border-[#FFFFFF] hover:scale-110 duration-200 hidden sm:block'>
							<img
								src={ProfileImage}
								alt='Profile Img'
								className='w-full h-full rounded-full'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Home