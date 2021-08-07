import {Injectable} from '@angular/core';
import {EntityService} from "../../shared/interfaces/EntityInterfaces";
import {Brewery} from "../model/brewery";
import {Observable} from "rxjs";
import {HttpService} from "../../core/services/http/http.service";
import {QueryParams} from "../../core/interfaces/QueryParams";

@Injectable()
export class BreweryService implements EntityService<Brewery>{

  private path = 'breweries';
  constructor(private readonly httpService: HttpService) { }

  fetchMany(params: QueryParams) {
    return this.httpService.fetchMany<Brewery>(this.path, params);
  }

  fetchOne(id: number, {props}: QueryParams): Observable<Brewery> {
    return this.httpService.fetchOne<Brewery>(id, this.path, {props});
  }

}
