import Link from 'next/link';
import Head from 'next/head';
import styles from '../../components/layout.module.css'




export default function TrainingPost() {
   return ( 
      // <layout> className={styles.layout}
      <div className={styles.training}>

         <Head>
            <h1 className={styles.program}>TRAINING PROGRAMS</h1>
         </Head>
         <ol>
            <li>Tailoring</li>
            <li>Events management</li>
            <li>Catering</li>
         </ol>
      </div>
   );
}