export interface AboutSection {
    title: string;
    description?: string;
    imgUrl?: ImgURL | any;
    _id?: string;
    _rev?: string;
    _type?: string;
    _createdAt?: string;
    _updatedAt?: string;
}

export interface ImgURL {
    _type?: string;
    asset?: Asset;
}

export interface Asset {
    _ref?: string;
    _type?: string;
}
