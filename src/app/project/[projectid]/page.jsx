"use client";
import Header from "@/app/components/Header";
import ProjectPage from "../../AllPages/ProjectPage";
import Footer from "@/app/components/Footer";

export default function Page({ params }) {
   return (
      <>
      <Header />
         <ProjectPage itemObj={params.projectid} />
      <Footer />
      </>
   );
}