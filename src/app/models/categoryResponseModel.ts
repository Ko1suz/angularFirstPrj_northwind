import { ICategory } from "./category";
import { IResponseModel } from "./responseModel";

export interface ICategoryResponseModel extends IResponseModel
{
    data:ICategory[];
}