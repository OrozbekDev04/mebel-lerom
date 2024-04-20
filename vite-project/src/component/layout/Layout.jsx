import React from 'react';
import {Fragment} from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
const Layout = ({children}) => {
    return (
        <div>
            <Fragment>
                <Header/>
                <main className="container min-h-[90vh]">{children}</main>
                <Footer/>
            </Fragment>
        </div>
    );
};

export default Layout;