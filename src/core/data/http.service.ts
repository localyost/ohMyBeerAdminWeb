import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export abstract class HttpService {

  private rootUrl = "http://localhost:8080/api/v1/";
  protected entityName: string | undefined;

  protected constructor(protected http: HttpClient) {}

  public getAll(page: number) {
    const params =  {size: 20, page};
    this.http.get(`${this.rootUrl}${this.entityName}`,{params}).subscribe(value => console.log(value))
  }
}
