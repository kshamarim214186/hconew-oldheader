"use client";
import Image from "next/image";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import "swiper/scss/pagination";
import styles from "../scss/home.module.scss";
import { useState } from "react";
import Search from "../components/Search";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faIndianRupeeSign } from "@fortawesome/pro-regular-svg-icons";
import { Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import CustomButton from "../UI/CustomButton";
import ListItems from "../UI/ListItems";
import AllDevelopers from "../UI/all-developers";


const testimonialsData = {
   heading: ["Customer", "Testimonials"],
   description: "Some content here for Testimonials minimum length 20",
   buttonName: "Know More",
   testimonialDataList: [
      {
         id: 1,
         image: "/images/home/blog-01.jpg",
         title: "Best Countries To Invest In Real Estate 2023",
         shortDescription: "Real estate investment is a type of financial investment that includes any property",
         url: "/post/anant-raj-tripundra/",
      },
      {
         id: 2,
         image: "/images/home/blog-02.jpg",
         title: "Best Countries To Invest In Real Estate 2023",
         shortDescription: "Real estate investment is a type of financial investment that includes any property",
         url: "/post/anant-raj-tripundra/",
      },
      {
         id: 3,
         image: "/images/home/blog-03.jpg",
         title: "Best Countries To Invest In Real Estate 2023",
         shortDescription: "Real estate investment is a type of financial investment that includes any property",
         url: "/post/anant-raj-tripundra/",
      },
   ],
};

export default async function HomePage() {
   const props = getHomePageData();
   const result = await props;
   const pageData = result.pagedata;
   const spotlight = result.spotlight;
   const featuredPro = result.featuredproject;
   const developers = result.developerdata;
   const blogs = result.blogdata;
   const popularsearch = result.popularsearch;
   const otherproject = result.otherproject;

   return (
      <>
         <main className="position-relative">
            <title>{pageData.seotitle}</title>
            <meta name="description" content={pageData.seodesc} />
            <section className={styles.bannerSection}>
              <div className={styles.banner}>
                <Image src={pageData.banner} className="img-fluid w-100" sizes="(min-width:768) 768vw, 100vw" alt={pageData.name} width={1500} height={550} />
              </div>
              <div className={styles.homeSearch}>
                <div className="container-xl">
                  <div className="row justify-content-center">
                    <div className="col-sm-8 col-md-7">
                      <div className={`${styles.h1} h1`}>{pageData.name}</div>
                      <div className={styles.inner}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="buy">
                          <Nav variant="underline">
                            <Nav.Item>
                              <Nav.Link eventKey="buy">BUY</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="resale">RESALE</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="rent">RENT</Nav.Link>
                            </Nav.Item>
                          </Nav>
                          <Tab.Content className="customSearches">
                            <Tab.Pane eventKey="buy">
                              <Search />
                            </Tab.Pane>
                            <Tab.Pane eventKey="resale">
                              <Search />
                            </Tab.Pane>
                            <Tab.Pane eventKey="rent">
                              <Search />
                            </Tab.Pane>
                          </Tab.Content>
                        </Tab.Container>
                        <div className={styles.popularSearch}>
                           <div className={styles.heading}>Popular Searches:</div>
                           <ul>
                              {popularsearch.map((item) => (
                              <li key={item.id}>
                                 <Link href={item.url}>{item.text}</Link>
                              </li>
                              ))}
                           </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            
            <section className={styles.topProjectContent}>
               <div className="container-xl">
                  <h2 dangerouslySetInnerHTML={{ __html: pageData.h2 }}></h2>
                  <p>{pageData.htwodesc}</p>
                  <Swiper
                     className={styles.swiperCustomControl}
                     modules={[Navigation]}
                     spaceBetween={32}
                     slidesPerView={1}
                     navigation={{ clickable: true }}
                     breakpoints={{
                       768: { slidesPerView: 2 },
                     }}
                  >
                  {spotlight.map((item) => (
                     <SwiperSlide key={item.id}>
                        <figure className={styles.bigThumb}>
                           <div className={styles.thumb}>
                             <Image src={item.property_image} className="img-fluid w-100" alt={item.name} width={636} height={405} />
                             {/*item.isOffer && <div className={styles.offers}>Offers</div>*/}
                           </div>
                           <figcaption>
                             <div>
                               <h4>{item.name}</h4>
                               <ul>
                                 <li>
                                   {item.locationname}, {item.locationname}
                                 </li>
                                 <li>{item.propbhk}</li>
                                 <li>{item.propertytypename}</li>
                               </ul>
                               <div className="price">
                                 <FontAwesomeIcon icon={faIndianRupeeSign} /> <span>{item.price}</span>
                               </div>
                             </div>
                             <Link href={item.url} className={`${styles.viewProjects} stretched-link`}>
                               <FontAwesomeIcon icon={faChevronRight} />
                             </Link>
                           </figcaption>
                        </figure>
                     </SwiperSlide>
                  ))}
                  </Swiper>
               </div>
            </section>

            <section className={styles.featureProject}>
               <div className="container-xl">
                  <h2 dangerouslySetInnerHTML={{ __html: pageData.fhead }}></h2>
                  <p>{pageData.fdesc }</p>
                  <Swiper
                     className={styles.swiperCustomControl}
                     modules={[Navigation]}
                     spaceBetween={32}
                     slidesPerView={1}
                     navigation={{ clickable: true }}
                     breakpoints={{
                       640: { slidesPerView: 2 },
                       1025: { slidesPerView: 3 },
                     }}
                     >
                     {featuredPro.map((item) => (
                        <SwiperSlide key={item.id}>
                           <ListItems itemObj={item} />
                        </SwiperSlide>
                     ))}
                  </Swiper>
              </div>
            </section>

            <section className={styles.featureCollection}>
              <div className="container-xl">
                <h2  dangerouslySetInnerHTML={{ __html: pageData.thirdhead }}></h2>
                <p>{pageData.thirddesc}</p>
                <Swiper
                  className={styles.swiperCustomControl}
                  modules={[Navigation]}
                  spaceBetween={32}
                  slidesPerView={1}
                  navigation={{ clickable: true }}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                  }}
                >
                  {otherproject.map((item) => (
                    <SwiperSlide key={item.id}>
                      <figure className={styles.list}>
                        <Image src={item.property_image} className="img-fluid w-100" alt={item.name} width={636} height={405} />
                        <figcaption>
                          <h5>
                            <Link href={item.url} className="stretched-link">
                              {item.name}
                            </Link>
                          </h5>
                          <p>{item.smalldesc}</p>
                        </figcaption>
                      </figure>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </section>

            <section className={styles.developers}>
               <div className="container-xl">
                  <h2 dangerouslySetInnerHTML={{ __html: pageData.devhead }}></h2>
                  <p>{pageData.devdesc}</p>
                  <Swiper
                     className={styles.swiperCustomControl}
                     modules={[Navigation]}
                     spaceBetween={24}
                     slidesPerView={"auto"}
                     navigation={{ clickable: true }}
                     breakpoints={{
                       640: { slidesPerView: 3 },
                       768: { slidesPerView: 4 },
                       992: { slidesPerView: 5 },
                       1025: { slidesPerView: 7 },
                     }}
                  >
                     {developers.map((item) => (
                       <SwiperSlide key={item.id}>
                         <AllDevelopers developerObj={item} />
                       </SwiperSlide>
                     ))}
                  </Swiper>
                <CustomButton url={pageData.builderurl} buttonName="Know More" />
               </div>
            </section>

            <section className={styles.news}>
              <div className="container-xl">
                <h2 dangerouslySetInnerHTML={{ __html: pageData.bloghead }}></h2>
                <p>{pageData.blogdesc}</p>
                <Swiper
                  className={styles.swiperCustomControl}
                  modules={[Navigation]}
                  spaceBetween={24}
                  slidesPerView={1}
                  navigation={{ clickable: true }}
                  breakpoints={{
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                  }}
                >
                  {blogs.map((item) => (
                    <SwiperSlide key={item.id}>
                      <figure className={styles.news__item}>
                        <Image src={item.listingimage} className="img-fluid" alt={item.name} width={1500} height={500} />
                        <figcaption>
                          <h4>
                            <Link href={item.url} className=" stretched-link">
                              {item.name}
                            </Link>
                          </h4>
                          <p>{item.shortdesc}</p>
                        </figcaption>
                      </figure>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <CustomButton url={pageData.posturl} buttonName="Know More" />
              </div>
            </section>

            <section className={styles.testimonials}>
              <div className="container-xl">
                <h2>
                  <small>{testimonialsData.heading[0]}</small>
                  {testimonialsData.heading[1]}
                </h2>
                <p>{testimonialsData.description}</p>
                <div className={styles.testimonials__bg}>
                  <div className={styles.leftBg}>
                    <Image src="/images/shape01.svg" className="img-fluid w-100" alt="bg" width={150} height={150} />
                  </div>
                  <div className={styles.rightBg}>
                    <Image src="/images/shape01.svg" className="img-fluid w-100" alt="bg" width={150} height={150} />
                  </div>
                  <Swiper className={styles.swiperCustomControl} modules={[Pagination]} pagination={true} spaceBetween={24} slidesPerView={1}>
                    <SwiperSlide>
                      <figure className={styles.items}>
                        <div className={styles.thumbs}>
                          <Image src="/images/home/blog-03.jpg" className="img-fluid w-100" alt="Best Countries To Invest" width={150} height={150} />
                        </div>
                        <div className={styles.right}>
                          <div className="h4">S K Jalan</div>
                          <div className={styles.location}>Sector 64, Gurgaon</div>
                          <p>
                            I went through the site and the best part is, this site elicits trust because they display everything perfectly, I m happy I got my delectable home in Delhi, DLF Capital Greens.
                          </p>
                        </div>
                      </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                      <figure className={styles.items}>
                        <div className={styles.thumbs}>
                          <Image src="/images/home/blog-03.jpg" className="img-fluid w-100" alt="Best Countries To Invest" width={150} height={150} />
                        </div>
                        <div className={styles.right}>
                          <div className="h4">S K Jalan</div>
                          <div className={styles.location}>Sector 64, Gurgaon</div>
                          <p>
                            I went through the site and the best part is, this site elicits trust because they display everything perfectly, I m happy I got my delectable home in Delhi, DLF Capital Greens.
                          </p>
                        </div>
                      </figure>
                    </SwiperSlide>
                    <SwiperSlide>
                      <figure className={styles.items}>
                        <div className={styles.thumbs}>
                          <Image src="/images/home/blog-03.jpg" className="img-fluid w-100" alt="Best Countries To Invest" width={150} height={150} />
                        </div>
                        <div className={styles.right}>
                          <div className="h4">S K Jalan</div>
                          <div className={styles.location}>Sector 64, Gurgaon</div>
                          <p>
                            I went through the site and the best part is, this site elicits trust because they display everything perfectly, I m happy I got my delectable home in Delhi, DLF Capital Greens.
                          </p>
                        </div>
                      </figure>
                    </SwiperSlide>
                  </Swiper>
                </div>
              </div>
            </section>
            <div className={styles.bg}>
              <Image src="/images/home-bg.svg" className="img-fluid" sizes="(min-width:768) 768vw, 100vw" alt="Dynamic required" width={700} height={1500} />
            </div>
         </main>
      </>
   );
}

async function getHomePageData() {
   const formData = new URLSearchParams();
   formData.append('token1', process.env.token1);
   formData.append('token2', process.env.token2);
   const finalresult = await fetch(process.env.API_URL+'pages/', {
      method: 'POST',
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData,
   });  
   return finalresult.json();
}