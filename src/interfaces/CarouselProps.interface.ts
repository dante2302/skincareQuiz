import { ReactNode } from "react";
import { FilteredProduct } from "./FilteredProduct.interface";

export default interface CarouselProps {
    mainItem: ReactNode;
    items: FilteredProduct[];
    styleClass?: string
}