import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class HttpService {

  private rootUrl = "http://localhost:8080/api/v1/";

  public constructor(protected http: HttpClient) { }

  public get<T>(page: number, path: string) {
    const params =  {size: 20, page};
    return this.http.get<T>(`${this.rootUrl}${path}`,{params});
  }
}
