import Link from 'next/link';
import Head from 'next/head';
import styles from '../../components/layout.module.css'




export default function GoalsPost() {
   return ( 
      <div className={styles.div}>
      
         <Head>
            <h1 className={styles.goal}>Organization Goals</h1>
         </Head>
         
      <p>The strategic objectives that YOMOSCO has established to outline expected outcomes and guidethe efforts of board members, employees and volunteers are as follows:</p>

      <b><i>Sustainability</i></b>
      <p>Environmental sustainability is the responsible use of resources. It is the goal ofYOMOSCO to engage in the responsible use of environmental resources to ensure theavailability of resources for future generations. We are committed to preparing our stakeholders for the future and equally committed to preserving future resources for our youths.</p>

      <b><i>High Quality Services</i></b>
      <p>Our goal is to provide the highest quality services. Asan organization, we recognize that rendering quality services is essential to the growth and development of the people we serve. We will maintain high quality standardsas we develop and implement our community programs in the most effective andefficient manner possible. </p>

      <b><i>Financial Strength</i></b>
      <p>It is the goal of YOMOSCO to demonstrate strength in our organization's financialperformance and health to ensure continued ability to fulfill our organizations missionand vision. YOMOSCO focuses on implementing plans and strategies that secure streamsof revenue that continue over time.</p>

      <b><i>Community Value</i></b>
      <p>Our goal is to plan, support, sponsor, and implement events, activities, and services thatcontribute to the quality of life of the communities we serve and that support our vision. As an organization, YOMOSCO is committed to strengthen the women in order to strengthen families and ultimately strengthen the community.</p>

      <b><i>Core Values</i></b>
      <p>The core values of YOMOSCO align with the vision, mission and goals of the organization. Thefollowing core values are the guiding principles of the organization:</p>

      <b><i>Honor God</i></b>
      <p>YOMOSCO strives to bring honor to God in every effort of service to young women and the communities we serve.</p>

      <b><i>Sustainability</i></b>
      <p>YOMOSCO implements strategies that promise to further ensure programs thatendure over time.</p>

      <b><i> Multiculturalism</i></b>
      <p>YOMOSCO develops programs that are shaped and strengthened by the perspectives andexperiences of diverse communities.</p>

      <b><i>Leadership</i></b>
      <p>YOMOSCO models excellence and leads by example as an organization committed to helping young single mothers and street children move forward in life.
      </p>

      <b><i>Social Equity</i></b>
      <p>YOMOSCO is an organization that works in pursuit of a fair, just, and healthy society for all vulnerable groups.
      </p>

      <b><i>Education</i></b>
      <p>YOMOSCO makes available greater assortments of educational resources and tools for young single mothers.
      </p>
   
      <b><i>Advocacy</i></b>
      <p>We champion causes associated with the societyespecially young mothers and street families who are vulnerable.
      </p>

      <b><i>Integrity</i></b>
      <p>YOMOSCO remains true to our mission and works to produce quality programs, provideexceptional service and maximizes the support of the community.
      </p>

      </div>

   );
}