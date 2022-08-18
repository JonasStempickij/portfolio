import { logo } from '../public/Icons/index';

const projects = () => {
    return (
        <article className='h-screen grid content-center'>
            <h2>Projects</h2>
            <p>My tech experience</p>
            <svg
                height='50px'
                width='50px'
                src={logo.bootstrapLogo}
                alt='asd'
            />
        </article>
    );
};

export default projects;
