import {Observable} from "rxjs";

export interface EntityService<T> {
  getMany<T>(page: number): Observable<T[]>;
}
