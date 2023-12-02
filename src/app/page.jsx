"use client";
import Header from "./components/Header";
import HomePage from "./AllPages/HomePage";
import Footer from "./components/Footer";

export default function Home() {
   return (
      <>
         <Header />
            <HomePage />
         <Footer />
      </>
   );
}