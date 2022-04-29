import Head from 'next/head'
import Header from './Header'

export default function Layout({children}) {
    return (
        <>
            <Head>
                <title>Awesome Next World</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header/>
                {children}
            <div>
                <h2>This will be an awesome Footer!</h2>
            </div>
        </>
    )
    
}