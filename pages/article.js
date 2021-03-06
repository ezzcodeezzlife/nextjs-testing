import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home({ data }) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Create Next App</title>
                <meta
                    name="description"
                    content="Generated by create next app"
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <h1>{data.title}</h1>
            <h2>{data.text}</h2>
            <h3>{data.date}</h3>
        </div>
    )
}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch(
        `https://nextjs-testing-sigma-sepia.vercel.app/api/articles`
    )
    const data = await res.json()
    console.log(data)

    // Pass data to the page via props
    return { props: { data } }
}
