import React from "react";
import Home from "./Home.tsx";
import AboutMe from "./AboutMe.tsx";
import Contact from "./Contact.tsx";
import StarWars from "./StarWars.tsx";
import {navItems} from "../utils/constants.ts";
import {Route, Routes} from "react-router-dom";
import ErrorPage from "./ErrorPage.tsx";
import {Outlet} from "react-router-dom";
import Header from "./Header.tsx";
import Footer from "./Footer.tsx";

const Layout = () => (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
);

const Main: React.FC = () => {
    const homePath = navItems[0].replace(/\s/g, '').toLowerCase();
    const aboutMePath = navItems[1].replace(/\s/g, '').toLowerCase();
    const starWarsPath = navItems[2].replace(/\s/g, '').toLowerCase();
    const contactPath = navItems[3].replace(/\s/g, '').toLowerCase();

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                {['', homePath].map(path =>
                    <Route key={path} index={path === ''} path={path} element={<Home/>}/>
                )}
                <Route path={`${aboutMePath}/:heroId`} element={<AboutMe />} />
                <Route path={`${aboutMePath}`} element={<AboutMe />} />
                <Route path={`${starWarsPath}`} element={<StarWars />} />
                <Route path={`${contactPath}`} element={<Contact />} />
                <Route path="*" element={<ErrorPage />} />
            </Route>
        </Routes>
    );
};

export default Main;