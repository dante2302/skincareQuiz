export interface ProgressBarCircleProps
{
    color: string,
    percentage: number,
    radius?: number,
    strokeWidth?: string
}

export interface ProgressBarTextProps
{
    percentage: number,
    fontSize?: string,
    x?: number | string,
    y?: number | string,
    textAnchor? : string,
    dominantBaseline?: string
}

export default interface ProgressBarProps 
{
    trailColor?: string,
    pathColor?: string,
    percentage: number,
    width?: number,
    height?: number,
}