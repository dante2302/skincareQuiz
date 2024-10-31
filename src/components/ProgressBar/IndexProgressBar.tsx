import { IndexBarProps } from "../../interfaces/ProgressBarProps.interface";
import Circle from "./Circle";
import Text from "./Text";

export default function IndexProgressBar({
    pathColor = "#d5dfe3",
    trailColor = "#aaddf3",
    width = 200,
    height = 200,
    radius,
    listLength,
    strokeWidth,
    currentIndex
}: IndexBarProps) {
    const pct = ( currentIndex / listLength) * 100;
    currentIndex = filterIndex(currentIndex, listLength);

    return (
        <svg width={width} height={height}>
            <g transform={`rotate(-90 ${"100 100"})`}>
                {/* Setting initial percentage to 100 of the first circle so that  
            There's a grey circle to be filled
        */}
                <Circle 
                    color={pathColor} 
                    percentage={100} 
                    radius={radius}
                    strokeWidth={strokeWidth}
                />
                <Circle 
                    color={trailColor} 
                    percentage={pct} 
                    radius={radius}
                    strokeWidth={strokeWidth}
                />
            </g>
            <Text idx={currentIndex} listLength={listLength} />
        </svg>
    );
};

function filterIndex(index: number, listLength: number) {
  const isNegativeOrNaN = !Number.isFinite(+index) || index < 0; // We can set non-numbers to 0 here
  const isTooHigh = index > listLength;

  if (isNegativeOrNaN) return 0;
  if (isTooHigh) return listLength;
  return +index;
}