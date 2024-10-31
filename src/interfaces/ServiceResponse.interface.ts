import { Status } from "../enums/Statuses.enum";

export interface ServiceResponse
{
    data?: any,
    status: Status
}