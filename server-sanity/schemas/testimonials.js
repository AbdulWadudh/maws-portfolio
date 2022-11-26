export default {
    name: "testimonials",
    title: "Testimonials",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string",
        },
        {
            name: "company",
            title: "Compnay",
            type: "string",
        },
        {
            name: "imgUrl",
            title: "ImageUrl",
            type: "image",
            options: {
                hotspot: true,
            },
        },
        {
            name: "feedback",
            title: "Feedback",
            type: "string",
        },
    ],
};
