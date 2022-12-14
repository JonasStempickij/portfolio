import Head from 'next/head';
import Link from 'next/link';
import GetResumeButton from '../components/GetResumeButton';
import LinkToPageButton from '../components/LinkToPageButton';

export default function Home() {
    return (
        <div>
            <Head>
                <title>JS Portfolio</title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <main>
                <section
                    id='home'
                    className='h-screen container flex items-center justify-center grid-cols-2 mx-auto content-center sm:grid animate-fadeIn'
                >
                    <div className='flex flex-col gap-3'>
                        <h1 className='text-6xl'>
                            Hi, I am <b>Jonas</b>
                        </h1>
                        <p className='text-2xl font-light'>
                            Your next junior Front-end developer
                        </p>
                        <div className='flex gap-4'>
                            <GetResumeButton />
                            <LinkToPageButton href='/about' text='About Me' />
                        </div>
                    </div>
                </section>
            </main>

            <footer></footer>
        </div>
    );
}
