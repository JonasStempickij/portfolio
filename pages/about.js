import profilePhoto from '../public/Jonas.png';
import Image from 'next/image';
import LinkToPageButton from '../components/LinkToPageButton';
import GetResumeButton from '../components/GetResumeButton';
import Head from 'next/head';

const about = () => {
    return (
        <>
            <Head>
                <title>About Me</title>
            </Head>
            <article className='h-screen container flex grid-cols-2 mx-auto sm:grid'>
                <div className='flex flex-col justify-center gap-3 px-4'>
                    <h2 className='text-4xl'>About</h2>
                    <p>
                        Hello! I&apos;m Jonas Stempickij, a passionate front-end
                        developer from Lithuania. My core skills are Javascript,
                        React, Next.js and MongoDB. I&apos;m interested in
                        creating useful and efficient solutions for people with
                        real life problems. You can learn more about my
                        experience as a developer and practical solutions in
                        PROJECTS section.
                    </p>
                    <div className='flex gap-4'>
                        <GetResumeButton />
                        <LinkToPageButton href='/projects' text='projects' />
                    </div>
                </div>
                <div className='my-auto ml-auto hidden sm:block'>
                    <Image
                        priority={true}
                        width={340}
                        height={380}
                        src={profilePhoto}
                        className='rounded-xl'
                        alt='Photo'
                    />
                </div>
            </article>
        </>
    );
};

export default about;
