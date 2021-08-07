import {Observable} from "rxjs";

export interface EntityService<T> {
  fetchMany(page: number): Observable<Response<T>>;
  fetchOne(id: number): Observable<T>;
}

export interface Response<T> {
  content: T[];
  total: number;
}
