import Head from 'next/head';
import Header from './Header';
import Footer  from "./Footer";
import Presence from './Presence';

export default function RootLayout({ children }) {

    return (
        <>
            <Header />
            {children}
             <Presence />
            <Footer />
        </>
    );
}