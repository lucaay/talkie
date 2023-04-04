import { AppProps } from "next/app";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import "../styles/globals.css";
import LogoSneaky from "@/components/LogoSneaky";
import { AuthContextProvider } from "@/context/AuthContext";
import { Notifications } from "@mantine/notifications";

export default function App(props: AppProps) {
    const { Component, pageProps } = props;

    return (
        <>
            <Head>
                <title>Talkie</title>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width"
                />
                <link
                    rel="shortcut icon"
                    href="http://localhost:3006/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FlogoAlb.f1e397ff.png&w=3840&q=75"
                />
            </Head>

            <MantineProvider withGlobalStyles withNormalizeCSS>
                <Notifications />
                <AuthContextProvider>
                    <Component {...pageProps} />
                    <p className="absolute right-1 flex flex-row items-center text-white top-1 text-sm ">
                        Powered by
                        <LogoSneaky className="w-10 h-10" />
                    </p>
                </AuthContextProvider>
            </MantineProvider>
        </>
    );
}
