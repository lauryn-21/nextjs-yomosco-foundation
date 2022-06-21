import Link from 'next/link';
import Head from 'next/head';



export default function StructurePost() {
   return ( 
      <layout>
         <Head>
            <h1>TRAINING PROGRAMS</h1>
         </Head>
         <ul>
            <li>Tailoring</li>
            <li>Events management</li>
            <li>Catering</li>
         </ul>
      </layout>
   );
}