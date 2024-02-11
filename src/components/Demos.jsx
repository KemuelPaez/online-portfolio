import React from 'react'
import QuizDemo from '../assets/quizz-app.png'
import TicTacDemo from '../assets/tictactoe.jpg'

const Demos = () => {
	return (
		<div name='demo' className='w-full md:h-screen text-gray-300 bg-[#003333] pb-8'>
			<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
				<div className='pb-8'>
					<p className='text-4xl font-bold inline border-b-4 text-gray-300 border-[#007777]'>Demos</p>
					<p className='py-6'>Some of the works that I have both contributed and made.</p>
				</div>
				<div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
					{/* card1 */}
					<div
						style={{backgroundImage: `url(${QuizDemo})`}} 
						className='shadow-lg shadow-[#000000] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						<div className='opacity-0 group-hover:opacity-100'>
							<span className='text-2xl font-bold text-white tracking-wider'>
								Pop Buzz Quiz App
							</span>
							<div className='pt-8 text-center'>
								<a href="https://youtu.be/3Rxvfofqwlw?si=Fod6vu7PA8Ab92wl" target="_blank" rel="noopener noreferrer"> {/* link demo here */}
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
								</a>
								<a href="https://github.com/KemuelPaez/popbuzz-quiz-app.git" target="_blank" rel="noopener noreferrer"> {/* link repo here */}
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
								</a>
							</div>
						</div>
					</div>
					{/* card2 */}
					<div
						style={{backgroundImage: `url(${TicTacDemo})`}} 
						className='shadow-lg shadow-[#000000] group container rounded-md flex justify-center items-center mx-auto content-div'
					>
						<div className='opacity-0 group-hover:opacity-100'>
							<span className='text-2xl font-bold text-white tracking-wider'>
								Tic Tac Toe Game
							</span>
							<div className='pt-8 text-center'>
								<a href="https://drive.google.com/file/d/1i5seuVYM5FHArfAlPbIhRHg3hmVA_SA2/view?usp=sharing" target="_blank" rel="noopener noreferrer">
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
								</a>
								<a href="https://github.com/KemuelPaez/tictactoe-python.git" target="_blank" rel="noopener noreferrer">
									<button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Demos