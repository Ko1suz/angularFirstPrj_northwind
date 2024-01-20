import { IResponseModel } from "./responseModel";

export interface IListResponseModel<T> extends IResponseModel
{
    data:T[];
}