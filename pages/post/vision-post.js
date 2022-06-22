import Link from 'next/link';
import Head from 'next/head';
import styles from '../../components/layout.module.css'




export default function VisionPost() {
   return (
      // <layout className={styles.layout}>
      <div className={styles.page}>

         <Head>
            <h1 className={styles.post}>Vision and Mission</h1>
         </Head>
         <h2 className={styles.vision}>Vision</h2>
         <p>Our vision is that every young single mother and street child will be afforded the opportunity to enjoy the fullness of life without restrictions and limitations. As a result, YOMOSCO has been established to provide love, care, and support for young mothers and street families.</p>

         <h3 className={styles.mission}>Mission</h3>
         <p>The purpose of these community programs is to make poor street children get education; Young and Single mother get socio-economic empowerment and handicap children and youths to get opportunity to lead and play a role in the society by giving them opportunity to exploit their full potentials.
         By partnering withlocal schools, churches, businesses, non-governmental organizations, governmentalorganizations, and community leaders, YOMOSCO establishes community programs that surround identified groups with various opportunities for positive engagement and overallachievement. These positive engagements reduce the number of risks encountered andultimately lead to higher rates of successful transitions into adulthood.
         </p>
      </div>

 );
}