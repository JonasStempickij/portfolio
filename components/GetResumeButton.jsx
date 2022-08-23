import React from 'react';
import Link from 'next/link';

const GetResumeButton = () => {
    const resumeURL =
        'https://drive.google.com/file/d/1ab1KkYoXcpQJahQPPEuKyq0VoNFbz1N3/';
    return (
        <Link href='contact'>
            <a
                href={resumeURL}
                target='_blank'
                rel='noreferrer'
                className='px-4 py-2.5 bg-red-400 text-white hover:bg-red-500 transition-colors'
            >
                Get Resume
            </a>
        </Link>
    );
};

export default GetResumeButton;
