import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

// help keep track of the state of our app
import { useState, useEffect } from 'react';
// allows us to interact with our backend
import { API } from 'aws-amplify';
import { listPosts } from './graphql/queries'

export default function Home() {

  if (false) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Mavata</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>

          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.js</code>
          </p>

          <div className={styles.grid}>
            <a href="https://nextjs.org/docs" className={styles.card}>
              <h2>Documentation &rarr;</h2>
              <p>Find in-depth information about Next.js features and API.</p>
            </a>

            <a href="https://nextjs.org/learn" className={styles.card}>
              <h2>Learn &rarr;</h2>
              <p>Learn about Next.js in an interactive course with quizzes!</p>
            </a>

            <a
              href="https://github.com/vercel/next.js/tree/canary/examples"
              className={styles.card}
            >
              <h2>Examples &rarr;</h2>
              <p>Discover and deploy boilerplate example Next.js projects.</p>
            </a>

            <a
              href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              className={styles.card}
            >
              <h2>Deploy &rarr;</h2>
              <p>
                Instantly deploy your Next.js site to a public URL with Vercel.
              </p>
            </a>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span>
          </a>
        </footer>
      </div>
    )
    
  } else {
    const [companies, setCompany] = useState([]);
    // use setPosts to get posts from the API and set them into the setPosts variables so we can get them and show them in the return function
    const [posts, setPosts] = useState([]);

    useEffect(() => {
      // every time Home function is rendered, fetchposts will run and set everything up
      fetchPosts()
    }, [])

    // fetchPosts function invokes the API with AWS Amplify which contains all the methods that allow us to interface with AppSync
    // but it must go inside useEffect to make sure it works
    async function fetchPosts() {
      const postData = await API.graphql({
        query: listPosts
      })
      setPosts(postData.data.listPosts.items)
    }

    return (
      <div>
      <div>
      <Navbar />
      </div>
        <h1 className='text-sky-400 text-6xl font-bold underline'>
          Hello Mavata!
        </h1>

        {posts.map((post, index) => (
          <p key={index}>{post.title}</p>
        ))}
      </div>
    )


  }
}
