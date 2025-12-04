export type Gallery = {
    thumb: string;
    original: string;
}

export type Review = {
    reviewer_name: string;
    reviewer_rating: number;
    comment: string;
}

export type Camper = {
    id: string;
    name: string;
    price: number;
    rating: number;
    locaiton: string;
    description: string;
    form: string;
    length: string;
    width: string;
    height: string;
    tank: string;
    consumption: string;
    transmission: string;
    engine: string;
    AC: boolean;
    bathroom: boolean;
    kitchen: boolean;
    TV: boolean;
    radio: boolean;
    refrigerator: boolean;
    microwave: boolean;
    gas: boolean;
    water: boolean;
    gallery: Gallery[];
    reviews: Review[];
}

export type Equipment = 
{
    type: 'AC' | 'Bathroom' | 'Kitchen' | 'TV' | 'Radio' | 'Refrigerator' | 'Microwave' | 'Gas' | 'Water'
    engine: 'Petrol' | 'Diesel' | 'Hybrid';
    transmission: 'Automatic' | 'Manual';
};

export type FilterOptions = {
    equipment?: 'AC' | 'Bathroom' | 'Kitchen' | 'TV' | 'Automatic' | 'Manual';
    type?: 'Van' | 'Fully Integrated' | 'Alcove';
}

