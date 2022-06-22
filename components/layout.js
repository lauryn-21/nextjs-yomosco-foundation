import Head from 'next/head';
import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';

export default function Layout({ children }) {
  return <div className={styles.container}>{children}</div>;
}

const name = 'Lauryn';
export const siteTitle = 'Next.js Sample Website';

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="" href="" />
        <meta
          name="description"
          content=""
        />
         <meta
          property="og:image"
          content={encodeURI(
            siteTitle,
          )}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="" content="" />
      </Head>
      <header className={styles.header}>
        {home ? (
           <>
           <Image
             priority
             src="/images/"
             className={utilsStyles.borderCircle}
             height={144}
             width={144}
             alt={name}
           />
           <h1 className={utilsStyles.heading2Xl}>{name}</h1>
         </>
       ) : (
         <>
         <Link href="/">
           <a>
             <Image
               priority
               src="/images/.jpg"
               className={utilsStyles.borderCircle}
               height={108}
               width={108}
               alt={name}
             />
           </a>
         </Link>
         <h2 className={utilsStyles.headingLg}>
           <Link href="/">
             <a className={utilsStyles.colorInherit}>{name}</a>
           </Link>
         </h2>
       </>
     )}
     </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
