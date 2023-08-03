import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Montserrat } from "next/font/google";
import NavContainer from "@/components/Nav/NavContainer";
import Head from "next/head";
import { ApolloProvider } from "@apollo/client";
import { SessionProvider } from "next-auth/react";
import client from "@/lib/apollo";

export const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <ApolloProvider client={client}>
        <Head>
          <title>Abhishek Yadav</title>
          <meta
            name="viewport"
            content="initial-scale=1.0, width=device-width"
          />
        </Head>
        <NavContainer />
        <Component {...pageProps} />
      </ApolloProvider>
    </SessionProvider>
  );
}
