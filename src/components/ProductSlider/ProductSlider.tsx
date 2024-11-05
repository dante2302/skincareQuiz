import { useState } from 'react';
import SliderArrow from '../SVGs/SliderArrow';
import CarouselProps from '../../interfaces/CarouselProps.interface';
import "./styles/ProductSlider.css";
import useWindowDimensions from '../../hooks/useWindowDimensions';
import ProductCard from '../ProductCard/ProductCard';

export default function ProductSlider ({ mainItem, items, styleClass }: CarouselProps) {
    const [currentPage, setCurrentPage] = useState(0);
    const winDimensions = useWindowDimensions();
    const WIDTH_BOUNDARY = 768;
    const itemsPerPage = winDimensions.width > WIDTH_BOUNDARY ? 2 : 1;
    const totalPages = Math.ceil(items.length / itemsPerPage);
    const startIdx = currentPage * itemsPerPage;
    const displayedItems = items.slice(startIdx, startIdx + itemsPerPage);

    const handleNext = () => {
        setCurrentPage((prev) => (prev + 1) % totalPages);
    };

    const handlePrev = () => {
        setCurrentPage((prev) => prev > 0 ? (prev - 1) % totalPages : totalPages - 1)
    }

    const handleDotClick = (index: number) => setCurrentPage(index);

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
                    {displayedItems.map((item) => (
                        <div key={item.id} className="side-item">
                            <ProductCard product={item}/>
                        </div>
                    ))}
                    {(winDimensions.width < WIDTH_BOUNDARY && totalPages > 1) &&
                        <button className="arrow right" onClick={handleNext}>
                            <SliderArrow />
                        </button>
                    }
                </div>
                {(winDimensions.width > WIDTH_BOUNDARY && totalPages > 1) &&
                    <button className="arrow right" onClick={handleNext}><SliderArrow /></button>}
            </div>

            {totalPages > 1 &&
                <div className="dots">
                    {new Array(totalPages).fill(0).map((_, index) => (
                        <span
                            key={(items.length % index)+1}
                            className={`dot ${currentPage === index ? 'active' : ''}`}
                            onClick={() => handleDotClick(index)}
                        />
                    ))}
                </div>
            }
        </div>
    );
};