import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Response} from "../../../shared/interfaces/EntityInterfaces";

@Injectable()
export class HttpService {

  private rootUrl = "http://localhost:8080/api/v1/";

  public constructor(protected http: HttpClient) { }

  public get<T>(page: number, path: string) {
    const params =  {size: PAGE_SIZE, page};
    return this.http.get<Response<T>>(`${this.rootUrl}${path}`,{params});
  }
}

export const PAGE_SIZE = 50;
