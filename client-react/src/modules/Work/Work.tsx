import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { AiFillEye, AiFillGithub } from "react-icons/ai";

import { client, urlFor } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

import { AnimateType, WorkSection } from "./WorkSecTypes";
import "./work.scss";

const Work = () => {
    const [activeFilter, setActiveFilter] = useState("All");
    const [animateCard, setAnimateCard] = useState<AnimateType>({ y: 0, opacity: 1 });
    const [works, setWorks] = useState([]);
    const [filterWork, setFilterWork] = useState([]);

    const handleFilter = (item: string) => {
        setActiveFilter(item);
        setAnimateCard({ y: 100, opacity: 0 });

        setTimeout(() => {
            setAnimateCard({ y: 0, opacity: 1 });
            if (item === "All") setFilterWork(works);
            else setFilterWork(works?.filter((work: WorkSection) => work.tags.includes(item)));
        }, 500);
    };

    useEffect(() => {
        (async () => {
            const worksData = await client.fetch(`*[_type == "works"]`);
            setWorks(worksData);
            setFilterWork(worksData);
        })();
    }, []);

    return (
        <>
            <h2 className="head-text">
                My Collective <span>Portfolio</span> Section.
            </h2>
            <div className="app__work-filter">
                {["UI/UX", "Web App", "Mobile App", "React JS", "All"].map((item, idx) => (
                    <div
                        key={idx}
                        onClick={() => handleFilter(item)}
                        className={`app__work-filter-item app__flex p-text ${activeFilter === item ? "item-active" : ""}`}
                    >
                        {item}
                    </div>
                ))}
            </div>

            <motion.div animate={animateCard} transition={{ duration: 0.5, delayChildren: 0.5 }} className="app__work-portfolio">
                {filterWork?.map(({ imgUrl, description, tags, title, projectLink, codeLink }: WorkSection, idx) => (
                    <div className="app__work-item app__flex" key={idx}>
                        <div className="app__work-img app__flex">
                            {" "}
                            <img src={urlFor(imgUrl).url()} alt={title} />
                            <motion.div
                                whileHover={{ opacity: [0, 1] }}
                                transition={{ duration: 0.25, ease: "easeInOut", staggerChildren: 0.5 }}
                                className="app__work-hover app__flex"
                            >
                                <a href={projectLink} target="_blank" rel="noreferr">
                                    <motion.div
                                        whileHover={{ scale: [1, 0.9] }}
                                        whileInView={{ scale: [0, 1] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                        <AiFillEye />
                                    </motion.div>
                                </a>
                                <a href={codeLink} target="_blank" rel="noreferr">
                                    <motion.div
                                        whileHover={{ scale: [1, 0.9] }}
                                        whileInView={{ scale: [0, 1] }}
                                        transition={{ duration: 0.25 }}
                                        className="app__flex"
                                    >
                                        <AiFillGithub />
                                    </motion.div>
                                </a>
                            </motion.div>
                        </div>
                        <div className="app__work-content app__flex">
                            <h4 className="bold-text">{title}</h4>
                            <p className="p-text" style={{ marginTop: 10 }}>
                                {description}
                            </p>

                            <div className="app__work-tag app__flex">
                                <p className="p-text">{tags[0]}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </motion.div>
        </>
    );
};

export default AppWrap(MotionWrap(Work, "app__works"), "work", "app__primarybg");
