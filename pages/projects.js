import { logoList } from '../public/Icons/index';
import omsExample from '../public/OMS-example.png';
import Image from 'next/image';
import Head from 'next/head';
import Tooltip from '../components/Tooltip';

const projects = () => {
    return (
        <>
            <Head>
                <title>Projects</title>
            </Head>
            <article className='container flex flex-col gap-6 mt-40 mx-auto text-center'>
                <h2 className='text-4xl'>Projects</h2>
                <p className='text-2xl'>My tech experience</p>

                <div className='flex gap-4 justify-center'>
                    {logoList.map((logo, index) => {
                        return (
                            <Tooltip key={index} text={logo.name}>
                                <Image
                                    src={logo.logo}
                                    alt=''
                                    height={50}
                                    width={50}
                                ></Image>
                            </Tooltip>
                        );
                    })}
                </div>
                <div className='grid grid-cols-2'>
                    <div className='flex flex-col gap-4 px-12 text-left justify-center'>
                        <p className='text-xl font-medium'>
                            Order Managment System
                        </p>
                        <p>
                            Problem: Slow information flow. Laser cutting
                            company was using email to transfer files and
                            information about orders. Managment had no way of
                            getting fast information about order status and had
                            to relay on slow email communication or check status
                            in person which reduced management efficiency.
                            Operations team had unnecessary workload which
                            reduced it’s maximum output.
                        </p>
                        <p>
                            Solution: One-stop web application Order Managment
                            System. CRUD application with filestorage. Built
                            with Next.js framework, Redux state management,
                            Firebase authetication and storage, MongoDB
                            database.
                        </p>
                        <div className='flex gap-4'>
                            <a
                                className='px-4 py-2.5 bg-red-400 text-white hover:bg-red-500 transition-colors'
                                href='https://oms-next.vercel.app/'
                                target='_blank'
                                rel='noreferrer'
                            >
                                Live Site
                            </a>
                            <a
                                className='px-4 py-2.5 capitalize bg-slate-500 text-white hover:bg-slate-600 transition-colors'
                                href='https://github.com/JonasStempickij/oms-next'
                                target='_blank'
                                rel='noreferrer'
                            >
                                Repo
                            </a>
                        </div>
                    </div>

                    <div>
                        <Image
                            className='rounded-lg float-left'
                            src={omsExample}
                            alt=''
                        ></Image>
                    </div>
                </div>
            </article>
        </>
    );
};

export default projects;
