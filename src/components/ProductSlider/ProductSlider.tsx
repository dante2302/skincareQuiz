import { useState } from 'react';
import SliderArrow from '../SVGs/SliderArrow';
import CarouselProps from '../../interfaces/CarouselProps.interface';
import "./styles/ProductSlider.css";

export default function ProductSlider ({ mainItem, items, styleClass }: CarouselProps) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const totalItems = items.length;

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    };

    const handleDotClick = (index: number) => {
        setCurrentIndex(index);
    };

    return (
        <div className={`carousel ${styleClass} `}>
            <div className='a'>

                <div className="main-item">{mainItem}</div>
                <div className="side-items">
                    {totalItems > 0 && (
                        <>
                            {totalItems >= 1 && (
                                <div className="side-item">{items[(currentIndex + 1) % totalItems]}</div>
                            )}
                            {totalItems > 2 && (
                                <div className="side-item">{items[(currentIndex + 2) % totalItems]}</div>
                            )}
                        </>
                    )}
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