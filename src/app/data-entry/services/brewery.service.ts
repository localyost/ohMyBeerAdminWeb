import {Injectable} from '@angular/core';
import {EntityService} from "../../shared/interfaces/entity-interfaces";
import {Brewery} from "../model/brewery";
import {Observable} from "rxjs";
import {HttpService} from "../../core/services/http/http.service";
import {QueryParams} from "../../core/interfaces/QueryParams";
import {HttpParams} from "@angular/common/http";

@Injectable()
export class BreweryService implements EntityService<Brewery>{

  private path = 'breweries';
  constructor(private readonly httpService: HttpService) { }

  public fetchMany(params: QueryParams) {
    return this.httpService.fetchMany<Brewery>(this.path, params);
  }

  public fetchOne(id: number, props: QueryParams): Observable<Brewery> {
    return this.httpService.fetchOne<Brewery>(id, this.path, props);
  }

  public searchBrewery(breweryName: string) : Observable<Brewery[]> {
    let httpParams = new HttpParams().set('q', breweryName);
    return this.httpService.get<Brewery[]>(`${this.path}/search`, httpParams);
  }

}
