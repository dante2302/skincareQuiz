export interface ProgressBarCircleProps extends OptionalCircleProps
{
    color: string,
    percentage: number,
}

interface OptionalCircleProps
{
    radius?: number,
    strokeWidth?: string
}

export interface ProgressBarTextProps
{
    fontSize?: string,
    x?: number | string,
    y?: number | string,
    textAnchor? : string,
    dominantBaseline?: string,
    percentage?: number,
    idx?: number,
    listLength?: number
}

interface BaseProgressBarProps extends OptionalCircleProps
{
    trailColor?: string,
    pathColor?: string,
    width?: number,
    height?: number,
    radius?: number,
}

export interface PercentageBarProps extends BaseProgressBarProps
{
    percentage: number
}

export interface IndexBarProps extends BaseProgressBarProps
{
    currentIndex: number,
    listLength: number,
}