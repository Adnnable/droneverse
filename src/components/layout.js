import Head from 'next/head';
import Header from './Header';

export default function RootLayout({ children }) {

    return (
        <>
            <Header />
            {children}
        </>
    );
}