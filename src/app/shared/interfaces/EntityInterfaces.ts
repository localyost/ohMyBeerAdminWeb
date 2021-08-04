import {Observable} from "rxjs";

export interface EntityService<T> {
  getMany(page: number): Observable<Response<T>>;
}

export interface Response<T> {
  content: T[];
  total: number;
}
