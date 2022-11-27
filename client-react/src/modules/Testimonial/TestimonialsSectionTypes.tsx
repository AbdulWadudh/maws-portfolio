export interface TestimonialsSectionTypes {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    company?: string;
    feedback?: string;
    imgUrl?: ImgURL | any;
    name?: string;
}

export interface ImgURL {
    _type: string;
    asset?: Asset;
    crop?: Crop;
    hotspot?: Hotspot;
}

export interface Asset {
    _ref: string;
    _type: string;
}

export interface Crop {
    _type: string;
    bottom?: number;
    left?: number;
    right?: number;
    top?: number;
}

export interface Hotspot {
    _type: string;
    height?: number;
    width?: number;
    x?: number;
    y?: number;
}
