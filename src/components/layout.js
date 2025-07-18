import Head from 'next/head';
import Header from './Header';
import Footer  from "./Footer";

export default function RootLayout({ children }) {

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
}