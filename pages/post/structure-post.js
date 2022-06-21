import Link from 'next/link';
import Head from 'next/head';



export default function StructurePost() {
   return ( 
      <layout>
         <Head>
            <h1>ORGANIZATIONAL STRUCTURE</h1>
         </Head>
         <i>YOMOSCO is administered by a Management Committee including;</i>
         <ul>
            <li>The Chairperson</li>
            <li>The Treasure</li>
            <li>The Secretary</li>

         </ul>
      </layout>
   );
}