import {Observable} from "rxjs";
import {QueryParams} from "../../core/interfaces/QueryParams";

export interface EntityService<T> {
  fetchMany(params: QueryParams): Observable<Response<T>>;
  fetchOne(id: number, params: QueryParams): Observable<T>;
}

export interface Response<T> {
  content: T[];
  total: number;
}