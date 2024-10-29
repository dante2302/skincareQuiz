import { ProgressBarCircleProps } from "../../interfaces/ProgressBarProps";

export default function Circle({ 
    color, 
    percentage,
    radius=70,
    strokeWidth="2rem",
  }: ProgressBarCircleProps) {
  const r = radius; 
  const circ = 2 * Math.PI * r; // formula for circle
  const strokePct = ((100 - percentage) * circ) / 100; // where stroke will start, e.g. from 15% to 100%.
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? color : ""} // remove color as 0% sets full circumference
      strokeWidth={strokeWidth}
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
    ></circle>
  );
};