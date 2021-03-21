export type CategoryType = {
    ID_Category: number;
    name_c: string;
    description_c: string;
};

export type ProductType = {
    ID_Product: number;
    name_p: string;
    price: string;
    description_p: string;
    tax_p: number;
    color?: any;
    size: string;
    ID_Category: number;
  }
