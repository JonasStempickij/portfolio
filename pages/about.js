import profilePhoto from '../public/Jonas.png';
import Image from 'next/image';

const about = () => {
    return (
        <article className='h-screen container grid grid-cols-2 mx-auto'>
            <div className='flex flex-col justify-center gap-3'>
                <h2 className='text-4xl'>About</h2>
                <p>
                    Hello! I&apos;m Jonas Stempickij, a passionate front-end
                    developer from Lithuania. My core skills are Javascript,
                    React, Next.js and MongoDB. I&apos;m interested in creating
                    useful and efficient solutions for people with real life
                    problems. You can learn more about my experience as a
                    developer and practical solutions in PROJECTS section.
                </p>
                <div className='flex gap-4'>
                    <a className='px-4 py-2.5 bg-red-400 text-white' href=''>
                        Resume
                    </a>
                    <a
                        className='px-4 py-2.5 bg-neutral-500 text-white'
                        href='#projects'
                    >
                        Projects
                    </a>
                </div>
            </div>
            <div className='my-auto ml-auto'>
                <Image src={profilePhoto} className='rounded-xl' alt='Photo' />
            </div>
        </article>
    );
};

export default about;
