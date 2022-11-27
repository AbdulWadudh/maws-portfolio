import React from "react";

import { Header, Footer, About, Skills, Testimonial, Work } from "./modules";
import { Navbar } from "./components";
import "./app.scss";

const App = () => {
    return (
        <div className="app">
            <Navbar />
            <Header />
            <About />
            <Work />
            <Skills />
            <Testimonial />
            <Footer />
        </div>
    );
};

export default App;
