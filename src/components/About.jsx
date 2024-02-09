import React, { useState } from 'react';

const About = () => {
	const [expanded, setExpanded] = useState(false);

	const toggleExpanded = () => {
		setExpanded(!expanded);
	};

	return (
		<div name='about' className='w-full h-screen bg-[#003333] text-gray-300'>
			<div className='flex flex-col justify-center items-center w-full h-full'>
				<div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
					<div className='sm:text-right pb-8 pl-4'>
						<p className='text-4xl font-bold inline border-b-4 border-[#007777]'>About</p>
					</div>
					<div></div>
				</div>
				<div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
					<div className='sm:text-right text-4xl font-bold'>
						<p>Hi, I'm Kemuel Kyle Paez, Nice to meet you!</p>
					</div>
					<div>
						<p>
						Greetings! Once again I'm Kemuel Kyle Paez, a versatile developer, holding a Bachelor's degree in Computer Science from the University of St. La Salle. 
						{expanded ? (
							<>
							<br/>
							<br/>
								During my time at university, I honed my skills and knowledge in creating diverse applications and learning different algorithms.
								I further expanded my expertise through a one-month internship at iReply Back Office Services, where I contributed to the development of their HRIS web application.
							<br/>
							<br/>
								Additionally, I gained valuable hands-on experience as a junior full-stack developer at CHuGO, working on their e-commerce web application and mobile apps for a rewarding five-month period.
								I'm enthusiastic about leveraging my diverse background to tackle new challenges and create innovative solutions.
							</>
						) : null}
						</p>
						{!expanded && (
							<button className='text-[#007777] underline mt-2 font-extralight hover:text-[#ffff] hover:duration-300' onClick={toggleExpanded}>
								Read More
							</button>
						)}
						{expanded && (
							<button className='text-[#007777] underline mt-2 font-extralight hover:text-[#ffff] hover:duration-300' onClick={toggleExpanded}>
								See Less
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;