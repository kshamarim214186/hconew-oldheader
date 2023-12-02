"use client";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import Image from "next/image";
import getLocationType from "../api/getLocationType";
import getDeveloperList from "../api/getDeveloperList";
import Search from "./Search";


export default async function Header() {
   const page = '';
   const props = getDeveloperList(page);
   const result = await props;
   const pageData = result.pagedata;
   const builderData = result.builderdata;

   const residential = getLocationType('residential');
   const resData = await residential;
   const residentialData = resData.loctype;


   const commercial = getLocationType('commercial');
   const commData = await commercial;
   const commercialData = commData.loctype;
   
   return (
   <>
      <Navbar bg="white" expand="lg" className="shadow-sm headderContainer">
         <div className="container-xl">
            <Navbar.Toggle aria-controls="offcanvasNavbar-expand-lg" />
            <Navbar.Brand href="/">
               <Image src="https://www.hcorealestates.com/images/logo.svg" alt="Hcorealestates" width={170} height={40} />
            </Navbar.Brand>
            <div className="search-control">
               <Search />
            </div>
            <Navbar.Offcanvas id="offcanvasNavbar-expand-lg" aria-labelledby="offcanvasNavbarLabel-expand-lg" placement="start">
               <Offcanvas.Header closeButton>
                  <Offcanvas.Title id="offcanvasNavbarLabel-expand-lg"></Offcanvas.Title>
               </Offcanvas.Header>
               <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                     <NavDropdown title="Residential" id="offcanvasNavbarDropdown-expand-lg">
                        {residentialData.map(function(data,idx) {
                           return (
                              <NavDropdown.Item href={data.url} key={idx}>{data.menuname}</NavDropdown.Item>
                           )
                        })}                        
                     </NavDropdown>
                     <NavDropdown title="Commercial" id="offcanvasNavbarDropdown-expand-lg">
                        {commercialData.map(function(data,idx) {
                           return (
                              <NavDropdown.Item href={data.url} key={idx}>{data.menuname}</NavDropdown.Item>
                           )
                        })} 
                     </NavDropdown>
                     <NavDropdown title="Developers" id="offcanvasNavbarDropdown-expand-lg">
                        {builderData.map(function(data,idx) {
                           if (idx <= 3) {
                              return (
                                 <NavDropdown.Item href={data.url} key={idx}>{data.name}</NavDropdown.Item>
                              )
                           }
                        })}
                        <NavDropdown.Divider />
                        <NavDropdown.Item href={pageData.builderurl}>All Developers</NavDropdown.Item>
                     </NavDropdown>
                  </Nav>
               </Offcanvas.Body>
            </Navbar.Offcanvas>
         </div>
      </Navbar>
   </>
   );
}