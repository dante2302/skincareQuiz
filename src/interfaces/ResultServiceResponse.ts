import { ProductResponse } from "./ProductResponse.interface"
import {  ServiceResponse } from "./ServiceResponse.interface"

interface ResultServiceDataResponse extends ServiceResponse
{
    data?: ProductResponse
}

export type ResultServiceResponse = ResultServiceDataResponse;