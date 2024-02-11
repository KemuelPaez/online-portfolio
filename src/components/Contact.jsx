import React, {useState} from 'react'
import clipboardCopy from 'clipboard-copy'

const Contact = () => {
	const [emailCopied, setEmailCopied] = useState(false);

	const handleCopyEmail = () => {
		clipboardCopy('kemkylepaez@gmail.com');
		setEmailCopied(true);
	
		setTimeout(() => {
		setEmailCopied(false);
		}, 2000);
	};

	return (
		<div name='contact' className='w-full h-screen content-bg text-gray-300'>
			<div className='max-w-[1000px] mx-auto flex flex-col justify-center items-center w-full h-full'>
				<form method='POST' action="https://getform.io/f/e4112371-a20b-42e2-b3e4-9349e3954441" className='flex flex-col max-w-[600px] w-full'>
					<div className='pb-8'>
						<p className='text-4xl font-bold inline border-b-4 border-[#007777]'>Contact</p>
						<p className='py-4'>Send me an email anytime!</p>
						<p className={`underline cursor-pointer text-[#4c9f9f] ${emailCopied ? 'text-[#4c9f9f]' : ''}`} onClick={handleCopyEmail}>
							{emailCopied ? 'Email copied!' : 'kemkylepaez@gmail.com'}
						</p>
					</div>
					<input type="text" placeholder='Name' name='name' className='p-2 bg-[#ccd6f6] text-black' required/>
					<input type="email" placeholder='Email' name='email' className='my-4 p-2 bg-[#ccd6f6] text-black' required/>
					<textarea name="message" rows="10" placeholder='Message' className='p-2 bg-[#ccd6f6] text-black' required></textarea>
					<button className='text-white border-2 rounded hover:bg-[#007777] hover:border-[#007777] duration-200 px-4 py-3 my-8 mx-auto flex items-center'>
						Send Form
					</button>
				</form>
			</div>
		</div>
	)
}

export default Contact