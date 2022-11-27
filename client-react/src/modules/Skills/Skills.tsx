import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ReactToolTip from "react-tooltip";

import { client, urlFor } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

import { SkillsSection, WorksType, WorkExperiencesType } from "./SkillsSectionTypes";
import "./skills.scss";

const Skills = () => {
    const [skills, setSkills] = useState([]);
    const [experiences, setExperiences] = useState<any>([]);

    useEffect(() => {
        (async () => {
            setExperiences(await client.fetch(`*[_type == "experiences"]`));
            setSkills(await client.fetch(`*[_type == "skills"]`));
        })();
    }, []);

    return (
        <>
            <h2 className="head-text">Skills & Experiences</h2>
            <div className="app__skills-container">
                <motion.div className="app__skills-list">
                    {skills?.map(({ name, bgColor, icon }: SkillsSection) => (
                        <motion.div
                            whileInView={{ opacity: [0, 1] }}
                            transition={{ duration: 0.5 }}
                            className="app__skills-item app__flex"
                            key={name}
                        >
                            <div className="app__flex" style={{ backgroundColor: bgColor }}>
                                <img src={urlFor(icon).url()} alt={name} />
                            </div>
                            <p className="p-text">{name}</p>
                        </motion.div>
                    ))}
                </motion.div>
                <motion.div className="app__skills-exp">
                    {experiences?.map(({ year, works }: WorkExperiencesType) => (
                        <motion.div className="app__skills-exp-item" key={year}>
                            <div className="app__skills-exp-year">
                                <p className="bold-text">{year}</p>
                            </div>
                            <motion.div className="app__skills-exp-works">
                                {works?.map(({ name, company, desc }: WorksType, idx) => (
                                    <>
                                        <motion.div
                                            whileInView={{ opacity: [0, 1] }}
                                            transition={{ duration: 0.5 }}
                                            className="app__skills-exp-work"
                                            data-tip
                                            data-for={name}
                                            key={name}
                                        >
                                            <h4 className="bold-text">{name}</h4>
                                            <p className="p-text">{company}</p>
                                        </motion.div>
                                        <ReactToolTip id={name} effect="solid" arrowColor="#fff" className="skills-tooltip">
                                            {desc}
                                        </ReactToolTip>
                                    </>
                                ))}
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </>
    );
};

export default AppWrap(MotionWrap(Skills, "app__skills"), "skills", "app__whitebg");
