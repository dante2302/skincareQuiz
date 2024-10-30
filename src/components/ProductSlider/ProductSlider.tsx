import { useState } from 'react';
import SliderArrow from '../SVGs/SliderArrow';
import CarouselProps from '../../interfaces/CarouselProps.interface';
import "./styles/ProductSlider.css";
import useWindowDimensions from '../../hooks/useWindowDimensions';

export default function ProductSlider ({ mainItem, items, styleClass }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const winDimensions = useWindowDimensions();
    const WIDTH_BOUNDARY = 768;

    const totalItems = items.length;

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % totalItems);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => prev > 0 ? (prev - 1) % totalItems : items.length-1)
    }

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className={`carousel ${styleClass} `}>
            <div className={`carousel-container ${winDimensions.width > WIDTH_BOUNDARY ? "with-main" : ""}`}>
                <div className="main-item">{mainItem}</div>
                {winDimensions.width < WIDTH_BOUNDARY && 
                <button className="arrow left" onClick={handlePrev}>
                    <SliderArrow isLeft={true} />
                </button>
}
                <div className="side-items">
                </div>
                {items.length > 1 &&
                    <button className="arrow right" onClick={handleNext}><SliderArrow /></button>}
            </div>

            {items.length > 1 &&
                <div className="dots">
                    {items.map((_, index) => (
                        <span
                            key={index}
                            className={`dot ${currentIndex === index ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </div>
            }
        </div>
    );
};