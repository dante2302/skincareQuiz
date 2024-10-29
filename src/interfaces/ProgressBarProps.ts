export interface ProgressBarCircleProps
{
    color: string,
    percentage: number,
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

export default interface ProgressBarProps extends ProgressBarCircleProps
{
    width?: number,
    height?: number,
}