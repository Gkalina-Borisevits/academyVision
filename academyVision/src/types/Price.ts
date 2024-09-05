import { ReactNode } from "react";

export interface Price {
    text: string | ReactNode; 
    id: number;
    icon: string;
    title: string;
    description: string[]; 
    priceTitle: string;
    price: string;
  }