import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import { AppWrap } from "../../wrapper";
import { client, urlFor } from "../../client";

import { AboutSection } from "./AboutSecTypes";
import "./about.scss";

const About = () => {
    const [abouts, setAbouts] = useState([]);

    useEffect(() => {
        (async () => setAbouts(await client.fetch(`*[_type == "abouts"]`)))();
    }, []);

    return (
        <>
            <h2 className="head-text">
                {" "}
                I Know That <span>Good Design</span>
                <br />
                means <span>Good Business</span>
            </h2>
            <div className="app__profiles">
                {abouts &&
                    abouts?.map(({ title, description, imgUrl }: AboutSection, idx) => (
                        <motion.div
                            whileInView={{ opacity: 1 }}
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.5, type: "tween" }}
                            className="app__profile-item"
                            key={`${title}${idx}`}
                        >
                            <img src={urlFor(imgUrl).url()} alt={title} />
                            <h2 className="bold-text" style={{ marginTop: 20 }}>
                                {title}
                            </h2>
                            <p className="p-text" style={{ marginTop: 10 }}>
                                {description}
                            </p>
                        </motion.div>
                    ))}
            </div>
        </>
    );
};

export default AppWrap(About, "about");
