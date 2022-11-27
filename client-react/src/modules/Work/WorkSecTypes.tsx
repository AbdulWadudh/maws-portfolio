export interface WorkSection {
    _id: string;
    _rev: string;
    _type: string;
    codeLink: string;
    description: string;
    imgUrl: ImgURL | any;
    projectLink: string;
    tags: string[];
    title: string;
    _createdAt: string;
    _updatedAt: string;
}

export interface ImgURL {
    _type: string;
    asset: Asset;
}

export interface Asset {
    _ref: string;
    _type: string;
}

export interface AnimateType {
    y: number,
    opacity: number
}