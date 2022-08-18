import { useState, useEffect } from 'react';
import Link from 'next/link';

function useScrollDirection() {
    const [scrollDirection, setScrollDirection] = useState(null);

    useEffect(() => {
        let lastScrollY = window.pageYOffset;

        const updateScrollDirection = () => {
            const scrollY = window.pageYOffset;
            const direction = scrollY > lastScrollY ? 'down' : 'up';
            if (
                direction !== scrollDirection &&
                (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)
            ) {
                setScrollDirection(direction);
            }
            lastScrollY = scrollY > 0 ? scrollY : 0;
        };
        window.addEventListener('scroll', updateScrollDirection); // add event listener
        return () => {
            window.removeEventListener('scroll', updateScrollDirection); // clean up
        };
    }, [scrollDirection]);

    return scrollDirection;
}

const Navbar = () => {
    const scrollDirection = useScrollDirection();
    return (
        <nav
            className={`w-full fixed bg-stone-100 transition-all duration-500 ${
                scrollDirection === 'down' ? '-top-20' : 'top-0'
            }`}
        >
            <div className='container flex justify-between mx-auto py-4'>
                <Link href='/'>
                    <a className='text-5xl font-semibold italic'>JS</a>
                </Link>
                <div className='flex items-center gap-7'>
                    <Link href='about'>
                        <a className='text-2xl'>About Me</a>
                    </Link>
                    <Link href='projects'>
                        <a className='text-2xl'>Projects</a>
                    </Link>
                    <Link href='contact'>
                        <a className='text-2xl'>Contact</a>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
