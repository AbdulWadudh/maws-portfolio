export interface SkillsSection {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    icon?: Icon | any;
    bgColor?: string;
    name: string;
}

export interface Icon {
    _type: string;
    asset: Asset;
}

export interface Asset {
    _ref: string;
    _type: string;
}

export interface ExperienceTypes {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    company?: string;
    desc?: string;
    name: string;
}

export interface WorkExperiencesType {
    _createdAt: string;
    _id: string;
    _rev: string;
    _type: string;
    _updatedAt: string;
    works: WorksType[];
    year: string;
}

export interface WorksType {
    _key: string;
    _type: string;
    company?: string;
    desc?: string;
    name?: string;
}
