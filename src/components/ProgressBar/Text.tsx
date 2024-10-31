import { ProgressBarTextProps } from "../../interfaces/ProgressBarProps.interface";

export default function Text({
  fontSize="1.5em",
  x="50%",
  y="50%",
  dominantBaseline="central",
  textAnchor="middle",
  percentage,
  idx,
  listLength

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
      {percentage ? `${percentage.toFixed(0)}%` : `${idx} / ${listLength}`}
    </text>
  );
};
