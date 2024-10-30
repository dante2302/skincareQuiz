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
    
                <div className="side-items">
                    {(winDimensions.width < WIDTH_BOUNDARY && items.length > 1) &&
                        <button className="arrow left" onClick={handlePrev}>
                            <SliderArrow isLeft={true} />
                        </button>
                    }
                    {totalItems > 0 && (
                        <>
                            {totalItems >= 1 && (
                                <div className="side-item">{items[(currentIndex + 1) % totalItems]}</div>
                            )}
                            {(totalItems > 2 && winDimensions.width > WIDTH_BOUNDARY) && (
                                <div className="side-item">{items[(currentIndex + 2) % totalItems]}</div>
                            )}
                        </>
                    )}
                    {(winDimensions.width < WIDTH_BOUNDARY && items.length > 1) &&
                        <button className="arrow right" onClick={handleNext}>
                            <SliderArrow />
                        </button>
                    }
                </div>
                {(winDimensions.width > WIDTH_BOUNDARY && items.length > 1) &&
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