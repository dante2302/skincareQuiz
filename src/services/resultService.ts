import { STATUS } from "../enums/Statuses.enum";
import { ProductResponse } from "../interfaces/ProductResponse.interface";
import { ResultServiceResponse } from "../interfaces/ResultServiceResponse";

const RESULTS_URL = "https://jeval.com.au/collections/hair-care/products.json";
export async function getProducts(): Promise<ResultServiceResponse>
{
    try{
        const page1Response = await fetch(`${RESULTS_URL}?page=1`,{
            method: "GET",
            mode: "cors"
        })
        const page2Response = await fetch(`${RESULTS_URL}?page=2`,{
            method: "GET",
            mode: "cors"
        })

        const page1Data: ProductResponse = await page1Response.json();
        const page2Data: ProductResponse = await page2Response.json();
        const mergedData = {...page1Data, ...page2Data};

        const status = STATUS.Success;
        return { status, data: mergedData };
    }
    catch(e){
        console.log("Something wrong with fetching...");
        console.log(e);
        return { status: STATUS.Error };
    }
}