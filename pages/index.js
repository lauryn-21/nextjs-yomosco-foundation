import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
// import logo from '../public/images/yomosco';

import { getSortedPostsData } from '../lib/posts';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
export default function Home({ allPostsData }) {
  return (
   
    
       <div className={styles.container}>
      {/* <Image src="/public/images/yomosco-1.jpeg" width="200px"  height="200px" layout="fill"/>
      <Image src={logo} width="300px"  height="200px"/> */}

      <Head>
        <title>Yomosco Foundation</title>
        <meta name="description" content="" />
        <link rel="" href="" />
      </Head>

      <main className={styles.main}>
      <h1 className="styles.title">
      Yomosco Foundation{' '}
        <Link href="/post/first-post">
        <a>Welcome</a>
        </Link>
      </h1>
          

        

        <div className={styles.grid}>
          <a href="/post/about-post" className={styles.card}>
            <h2>About us &rarr;</h2>
            <p>A brief description about us</p>
          </a>

          <a href="/post/vision-post" className={styles.card}>
            <h2>Vision and mission &rarr;</h2>
            <p>Our vision and mission</p>
          </a>

          <a
            href="/post/goals-post"
            className={styles.card}
          >
            <h2>Organization Goals &rarr;</h2>
            <p>
              Here are some of our best goals
            </p>
          </a>

          <a
            href="/post/structure-post"
            className={styles.card}
          >
            <h2>Organization Structure &rarr;</h2>
            <p>
              Head of the organization
            </p>
          </a>

          <a
            href="/post/training-post"
            className={styles.card}
          >
            <h2>Training Programs &rarr;</h2>
            <p>
              Our Training Programs
            </p>
          </a>

          <a
            href="/post/contact-post"
            className={styles.card}
          >
            <h2>Contact Us &rarr;</h2>
            <p>
              Contact us and be part of our programs
            </p>
          </a>
         
        </div>
      </main>

      <footer className={styles.footer}>
      <a
          href=""
          target="_blank"
          rel=""
        >
          Powered by{' '}
          
        </a>
       
      </footer>
    </div>

  
);
}
  


