import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
	return (
		<div name='home' className='w-full h-screen bg-[#003333]'>
			<div className='max-w-[1080px] mx-auto px-8 flex flex-col justify-center h-full'>
				<p className='text-[#e84d5f] text-1xl'>Hi, my name is</p>
				<h1 className='text-4xl sm:text-6xl font-bold text-[#f2f0ec]'>Kemuel Kyle Paez</h1>
				<h2 className='text-4xl sm:text-4xl font-bold text-[#9a9996]'>I'm a Developer</h2>
				<p className='text-[#9a9996] py-4 max-w-[700px]'>
					a passionate developer with a strong desire to learn and grow. 
					With a proactive mindset and a hunger for knowledge, I eagerly embrace emerging technologies and seek out innovative solutions. 
					I am excited to contribute my skills and dedication to create impactful and meaningful projects.
				</p>
				<div>
					<button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#007777] hover:border-[#007777]'>
						Learn More 
						<span className='group-hover:rotate-90 duration-300'>
							<HiArrowNarrowRight className='ml-3 '/>
						</span>
					</button>
				</div>
			</div>
		</div>
	)
}

export default Home