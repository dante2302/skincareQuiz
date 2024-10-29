import { ProgressBarTextProps } from "../../interfaces/ProgressBarProps";

export default function Text({
  percentage,
  fontSize="1.5em",
  x="50%",
  y="50%",
  dominantBaseline="central",
  textAnchor="middle"

}: ProgressBarTextProps)
{
  return (
    <text
      x={x}
      y={y}
      dominantBaseline={dominantBaseline}
      textAnchor={textAnchor}
      fontSize={fontSize}
    >
      {percentage.toFixed(0)}%
    </text>
  );
};
