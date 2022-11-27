import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { isEmpty } from "lodash";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { client, urlFor } from "../../client";
import { AppWrap, MotionWrap } from "../../wrapper";

import { TestimonialsSectionTypes } from "./TestimonialsSectionTypes";

import "./Testimonial.scss";

const Testimonial = () => {
    const [brands, setBrands] = useState([]);
    const [testimonials, setTestimonials] = useState<any>([]);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        (async () => {
            setTestimonials(await client.fetch(`*[_type == "testimonials"]`));
            setBrands(await client.fetch(`*[_type == "brands"]`));
        })();
    }, []);

    const currTestimo = testimonials[currentIndex];

    const handleTestimonials = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <>
            {!isEmpty(testimonials) && (
                <>
                    <div className="app__testimonial-item app__flex">
                        <img src={urlFor(currTestimo?.imgUrl).url()} alt="testimonial" />
                        <div className="app__testimonial-content">
                            <p className="p-text">{currTestimo?.feedback}</p>
                            <div>
                                <h4 className="bold-text">{currTestimo?.name}</h4>
                                <h5 className="p-text">{currTestimo?.company}</h5>
                            </div>
                        </div>
                    </div>
                    <div className="app__testimonial-btns app__flex">
                        <div
                            className="app__flex"
                            onClick={() => handleTestimonials(currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1)}
                        >
                            <HiChevronLeft />
                        </div>
                        <div
                            className="app__flex"
                            onClick={() => handleTestimonials(currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1)}
                        >
                            <HiChevronRight />
                        </div>
                    </div>
                </>
            )}

            <div className="app__testimonial-brands app__flex">
                {!isEmpty(brands) &&
                    brands?.map((brand: any) => (
                        <motion.div whileInView={{ opacity: [0, 1] }} transition={{ duration: 0.5, type: "tween" }} key={brand._id}>
                            <img src={urlFor(brand?.imgUrl).url()} alt={brand.name} />
                        </motion.div>
                    ))}
            </div>
        </>
    );
};

export default AppWrap(MotionWrap(Testimonial, "app__testimonial"), "testimonial", "app__primarybg");
