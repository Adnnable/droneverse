import { useRouter } from "next/router";
import RootLayout from "@/components/layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
    const router = useRouter();

    return (
        <RootLayout>
            <Component {...pageProps} />
        </RootLayout>
    );
}
