import React from "react";

import { Header, Footer, About, Skills, Testimonials, Work } from "./modules";
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
            <Testimonials />
            <Footer />
        </div>
    );
};

export default App;
