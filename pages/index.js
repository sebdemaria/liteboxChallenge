import { Layout } from "@/templates/base/Layout";
import Head from "next/head";

export default function Home() {
    return (
        <>
            <Head>
                <title>LiteFlix - Challenge</title>
                <meta
                    name="description"
                    content="LiteFlix Challenge for LiteBox"
                />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1"
                />
                <link rel="shortcut icon" href="/images/favicon.ico" />
            </Head>
            <Layout>
                <h1 className="text-3xl">Hello World!</h1>
            </Layout>
        </>
    );
}
