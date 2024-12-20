import { PercentageBarProps } from "../../interfaces/ProgressBarProps.interface";
import Circle from "./Circle";
import Text from "./Text";

export default function PercentageProgressBar({
  pathColor = "lightgrey",
  trailColor = "lightblue",
  width = 200,
  height = 200,
  radius = 70,
  percentage,
  strokeWidth
}: PercentageBarProps) {
  const pct = filterPercentage(percentage);
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
      <Text percentage={pct} />
    </svg>
  );
};

function filterPercentage(percentage: number) {
  const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0; // We can set non-numbers to 0 here
  const isTooHigh = percentage > 100;

  if (isNegativeOrNaN) return 0;
  if (isTooHigh) return 100;
  return +percentage;
}