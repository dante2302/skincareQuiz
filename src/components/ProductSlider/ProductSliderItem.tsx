interface ProductSliderItemProps{
    totalItems: number,
    currentIndex: number.
    items: React.ReactNode[] 
}

export default function ProductSliderItem({})
{
    return (
        totalItems > 0 && (
            <>
                {totalItems >= 1 && (
                    <div className="side-item">{items[(currentIndex + 1) % totalItems]}</div>
                )}
                {totalItems > 2 && (
                    <div className="side-item">{items[(currentIndex + 2) % totalItems]}</div>
                )}
            </>
        )
    );
}