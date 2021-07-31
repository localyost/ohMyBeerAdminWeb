import { Injectable } from '@angular/core';
import {HttpService} from "../http.service";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BreweryService extends HttpService {

  public constructor(protected http: HttpClient) {
    super(http);
  }

  protected getEntityName(): string {
    return "breweries";
  }
}
