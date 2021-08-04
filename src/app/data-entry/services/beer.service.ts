import { Injectable } from '@angular/core';
import {HttpService} from "../../core/services/http/http.service";
import {EntityService} from "../../shared/interfaces/EntityService";
import {Observable} from "rxjs";
import {Beer} from "../module/beer";

@Injectable()
export class BeerService implements EntityService<Beer>{

  private path = "beers"
  constructor(private readonly httpService: HttpService) { }

  getMany<T>(page: number): Observable<T[]> {
    return this.httpService.get(page, this.path);
  }

}
