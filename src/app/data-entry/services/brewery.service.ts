import {Injectable} from '@angular/core';
import {EntityService} from "../../shared/interfaces/EntityInterfaces";
import {Brewery} from "../model/brewery";
import {Observable} from "rxjs";
import {HttpService} from "../../core/services/http/http.service";

@Injectable()
export class BreweryService implements EntityService<Brewery>{

  private path = 'breweries';
  constructor(private readonly httpService: HttpService) { }

  fetchMany(page: number) {
    return this.httpService.fetchMany<Brewery>(page, this.path);
  }

  fetchOne(id: number): Observable<Brewery> {
    return this.httpService.fetchOne<Brewery>(id, this.path);
  }
}
