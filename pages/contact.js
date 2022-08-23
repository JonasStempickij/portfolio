import Image from 'next/image';
import Head from 'next/head';
import { ContactForm } from '../components';
import linkedInLogo from '../public/icons/linkedIn_logo.svg';
import githubLogo from '../public/icons/github_logo.svg';
import emailLogo from '../public/icons/email_logo.svg';

const contact = () => {
    const linkedInURL =
        'https://www.linkedin.com/in/jonas-stempickij-940b68220/';
    const githubURL = 'https://github.com/JonasStempickij/';
    const email = 'jonasstempickij@gmail.com';

    return (
        <>
            <Head>
                <title>Contact</title>
            </Head>
            <article className='container mx-auto h-screen grid grid-cols-2 gap-4 content-center'>
                <div className='flex flex-col gap-4'>
                    <h2 className='text-4xl font-medium'>Contact</h2>
                    <p className='text-3xl'>
                        Love to hear from you, Get in touch 👋
                    </p>
                    <div className='flex gap-8'>
                        <a href={linkedInURL} target='_blank' rel='noreferrer'>
                            <Image
                                height={60}
                                width={60}
                                src={linkedInLogo}
                                alt=''
                            />
                        </a>
                        <a href={githubURL} target='_blank' rel='noreferrer'>
                            <Image
                                height={60}
                                width={60}
                                src={githubLogo}
                                alt=''
                            />
                        </a>
                        <a
                            href={`mailto:${email}`}
                            target='_blank'
                            rel='noreferrer'
                        >
                            <Image
                                height={60}
                                width={60}
                                src={emailLogo}
                                alt=''
                            />
                        </a>
                    </div>
                </div>
                <ContactForm />
            </article>
        </>
    );
};

export default contact;
