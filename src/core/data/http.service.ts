import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export abstract class HttpService {

  private rootUrl = "http://localhost:8080/api/v1/";
  protected entityName: string | undefined;

  protected constructor(protected http: HttpClient) {
    this.entityName = this.getEntityName();
  }

  protected abstract getEntityName() : string;

  getAll(page: number) {
    const params =  {size: 20, page};
    return this.http.get(`${this.rootUrl}${this.entityName}`,{params});
  }
}
