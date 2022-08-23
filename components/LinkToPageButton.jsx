import React from 'react';
import Link from 'next/link';

const LinkToPageButton = ({ href, text }) => {
    return (
        <Link href={href}>
            <a className='px-4 py-2.5 capitalize bg-slate-500 text-white hover:bg-slate-600 transition-colors'>
                {text}
            </a>
        </Link>
    );
};

export default LinkToPageButton;
