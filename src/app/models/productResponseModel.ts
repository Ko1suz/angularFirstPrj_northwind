import { IProduct } from "./product";
import { IResponseModel } from "./responseModel";


export interface IProductResponseModel extends IResponseModel
{
    data:IProduct[],
}