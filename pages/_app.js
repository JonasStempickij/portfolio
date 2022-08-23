import '../styles/globals.css';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from '../components/Navbar';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Navbar />
            <Component {...pageProps} />
            <ToastContainer position='top-center' />
        </>
    );
}

export default MyApp;
