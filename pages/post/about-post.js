import Link from 'next/link';
import Head from 'next/head';
import styles from '../../components/layout.module.css'




export default function AboutPost() {
   return ( 
   <layout className={styles.layout}>
      <div className={styles.container}>

      <Head>
      <h1 className={styles.profile} >YOMOSCO PROFILE</h1>
      <h2 className={styles.history}>Foundation History</h2>

      </Head>
      
      

      <p>Founded in 2019 and officially registered in 2021, Young Mothers and Street Families Charity Organization. YOMOSCO is a community-based organization dedicated to providing services to young single mothers and street children n Nairobi as well as its immediate environs. Currently, we are offering services in Nairobi Kenya in addition to identified areas that are deemed necessary. By partnering with local schools, churches, businesses, non-governmental organizations, governmental organizations, and community leaders, YOMOSCO establishes community programs that surround young single mothers with various opportunities for positive engagements.
      The work of YOMOSCO was initiated in direct response to the growing needs of young mothers and street families in Kenya.
      </p>

      
      
   </div>
   </layout>

   


);
}