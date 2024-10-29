import { ReactNode } from "react";

export default interface CarouselProps {
    mainItem: ReactNode;
    items: ReactNode[];
    styleClass?: string
}