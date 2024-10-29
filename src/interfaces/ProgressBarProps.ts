export interface CircleProps
{
    color: string,
    percentage: number,
}

export default interface ProgressBarProps extends CircleProps
{
    width?: number,
    height?: number,
}