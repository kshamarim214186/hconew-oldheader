import { Suspense } from 'react'
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import BuilderListing from "../AllPages/BuilderListing";

export default function AllDevelopers() {
   return (
      <>
      <Header />
         <Suspense>
            <BuilderListing />
         </Suspense>         
      <Footer />
      </>
   );
}