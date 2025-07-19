import Head from 'next/head';
import Header from './Header';
import Footer from "./Footer";
import Presence from './Presence';
import Partners from './Partners';
import NewsSection from './NewsSection';
import Certification from './Certification';
import Training from './Training';

export default function RootLayout({ children }) {

    return (
        <>
            <Header />
            {children}
            <Training />
            <Certification />
            <NewsSection />
            <Partners />
            <Presence />
            <Footer />
        </>
    );
}