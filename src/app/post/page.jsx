import { Suspense } from 'react'
import HeaderBlog from "../components/header-blog";
import PostListing from "../AllPages/PostListing";
import Footer from "../components/Footer";

export default function AllBlogs() {
  return (
    <>
      <HeaderBlog />
         <Suspense>
            <PostListing />
         </Suspense> 
      <Footer />
    </>
  );
}
