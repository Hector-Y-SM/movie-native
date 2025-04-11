export interface Companies {
    production_companies: ProductionCompany[];
}

export interface ProductionCompany {
    id:             number;
    logo_path:      string;
    name:           string;
    origin_country: string;
}
