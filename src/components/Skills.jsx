import React from 'react'
import AndroidStudio from '../assets/androidstudio.png'
import CSharp from '../assets/c-sharp.png'
import Javascript from '../assets/javascript.png'
import Node from '../assets/node.png'
import Postgres from '../assets/postgresql.png'
import ReactNative from '../assets/react-native.png'
import ReactJS from '../assets/react.png'
import Unity from '../assets/unity.png'
import VScode from '../assets/vscode.png'
import VisualStudio from '../assets/vstudio.png'

const Skills = () => {
	return (
		<div name='skills' className='w-full h-screen content-bg text-gray-300'>
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div>
					<p className='text-4xl font-bold inline border-b-4 border-[#007777]'>Skills</p>
					<p className='py-4'>These are the tech stacks that I have used. </p>
				</div>
				<div className='w-full grid grid-cols-2 sm:grid-cols-6 gap-4 text-center py-4'>
					<div className='shadow-md shadow-[#191919] hover:scale-110 duration-500'>
						<img src={ReactJS} alt="ReactJS icon" className='w-20 mx-auto'/>
					</div>
					<div className='shadow-md shadow-[#191919] hover:scale-110 duration-500'>
						<img src={CSharp} alt="CSharp icon" className='w-20 mx-auto'/>
					</div>
					<div className='shadow-md shadow-[#191919] hover:scale-110 duration-500'>
						<img src={Node} alt="Node icon" className='w-20 mx-auto'/>
					</div>
					<div className='shadow-md shadow-[#191919] hover:scale-110 duration-500'>
						<img src={Javascript} alt="Javascript icon" className='w-20 mx-auto'/>
					</div>
					<div className='shadow-md shadow-[#191919] hover:scale-110 duration-500'>
						<img src={Postgres} alt="Postgres icon" className='w-20 mx-auto'/> 
						{/* change icon */}
					</div>
				</div>
				<div>
					<p className='py-4'>Some of the Frameworks/IDE's that i have used. </p>
				</div>
				<div className='w-full grid grid-cols-2 sm:grid-cols-6 gap-4 text-center py-4'>
					<div className='shadow-md shadow-[#191919] hover:scale-110 duration-500'>
						<img src={VScode} alt="VScode icon" className='w-20 mx-auto'/>
					</div>
					<div className='shadow-md shadow-[#191919] hover:scale-110 duration-500'>
						<img src={VisualStudio} alt="VisualStudio icon" className='w-20 mx-auto'/>
					</div>
					<div className='shadow-md shadow-[#191919] hover:scale-110 duration-500'>
						<img src={ReactNative} alt="ReactNative icon" className='w-20 mx-auto'/>
					</div>
					<div className='shadow-md shadow-[#191919] hover:scale-110 duration-500'>
						<img src={AndroidStudio} alt="AndroidStudio icon" className='w-20 mx-auto'/>
					</div>
					<div className='shadow-md shadow-[#191919] hover:scale-110 duration-500'>
						<img src={Unity} alt="Unity icon" className='w-20 mx-auto'/>
					</div>
				</div>
				<p>learn more on my 
					<a 
						href="https://drive.google.com/file/d/1A2Mnqq26UdvH37j04l6QM_Xms7xaMWQB/view?usp=sharing" 
						target="_blank" rel="noopener noreferrer"
						className=' text-[#4c9f9f] underline'
					>
					Resume
					</a></p>
			</div>
		</div>
	)
}

export default Skills