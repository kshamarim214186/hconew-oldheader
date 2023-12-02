import { Suspense } from 'react'
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import PropertiesListing from "../AllPages/PropertiesListing";


export default function Properties() {
   return (
      <>
      <Header />
         <Suspense>
            <PropertiesListing />
         </Suspense> 
      <Footer />
      </>
   );
}