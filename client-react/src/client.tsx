import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

import { ImgURL } from "./modules/About/AboutSecTypes";

export const client = sanityClient({
    projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
    dataset: import.meta.env.VITE_SANITY_DATASET,
    apiVersion: import.meta.env.VITE_SANITY_API_VER,
    token: import.meta.env.VITE_SANITY_TOKEN,
    ignoreBrowserTokenWarning: true,
    useCdn: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (src: ImgURL) => builder.image(src);
