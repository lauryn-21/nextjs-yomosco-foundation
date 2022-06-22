import Link from 'next/link';
import Head from 'next/head';
import styles from '../../components/layout.module.css'




export default function StructurePost() {
   return ( 
      <div className={styles.structure}>

         <Head>
            <h1 className={styles.h}>ORGANIZATIONAL STRUCTURE</h1>
         </Head>
         <i className={styles.i}>YOMOSCO is administered by a Management Committee including;</i>
         <ol className={styles.ul}>
            <li className={styles.li}>The Chairperson</li>
            <li className={styles.li}>The Treasure</li>
            <li className={styles.li}>The Secretary</li>

         </ol>
      </div>
   );
}