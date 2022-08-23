import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';

export const ContactForm = () => {
    const form = useRef();

    const SERVICE_ID = 'service_rpw3eoc';
    const TEMPLATE_ID = 'template_aeheole';
    const PUBLIC_KEY = 'P0rU_p13WjK2nVwYh';

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
            .then(
                (result) => {
                    toast.success('Thank you for sending me a message 📧');
                    console.log(result.text);
                },
                (error) => {
                    toast.error(
                        'Something went wrong try contacting via email'
                    );
                    console.log(error.text);
                }
            );
    };

    return (
        <form
            className='flex flex-col gap-4 px-4 sm:px-0'
            ref={form}
            onSubmit={sendEmail}
        >
            <div className='flex flex-col'>
                <label className='text-sm'>Your name</label>
                <input
                    className='bg-neutral-100 p-2'
                    type='text'
                    name='user_name'
                    placeholder='John Smith'
                    required
                />
            </div>
            <div className='flex flex-col'>
                <label>Your email</label>
                <input
                    className='bg-neutral-100 p-2'
                    type='email'
                    name='user_email'
                    placeholder='johnsmith@gmail.com'
                    required
                />
            </div>
            <div className='flex flex-col'>
                <label>Message</label>
                <textarea
                    className='bg-neutral-100 p-2'
                    name='message'
                    placeholder='Here you can leave job opportunities or leave a message :)'
                    required
                />
            </div>

            <button
                className='px-4 py-2.5 uppercase bg-slate-500 text-white hover:bg-slate-600 transition-colors'
                type='submit'
                value='Send'
            >
                Send
            </button>
        </form>
    );
};
