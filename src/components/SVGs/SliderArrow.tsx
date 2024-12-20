interface SliderArrowProps
{
    isLeft?: boolean
}

export default function SliderArrow({isLeft}: SliderArrowProps) {
    return (
        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_2_366)" transform={`${isLeft ? "rotate(180, 8.5, 8.5)" : ""}`}>
                <path d="M14.4287 8.02998L6.42371 0.0199776L4.82271 1.62198L11.2267 8.02998L4.82271 14.438L6.42371 16.04L14.4287 8.02998Z" fill="#1C2635" stroke="#1C2635" strokeWidth="0.16" />
            </g>
            <defs>
                <clipPath id="clip0_2_366">
                    <rect width="16.01" height="16.02" fill="white" transform="translate(0.0195312 0.019989)" />
                </clipPath>
            </defs>
        </svg>
    );
}