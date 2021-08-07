import {Injectable} from '@angular/core';
import {HttpService} from "../../core/services/http/http.service";
import {EntityService} from "../../shared/interfaces/EntityInterfaces";
import {Beer} from "../model/beer";
import {QueryParams} from "../../core/interfaces/QueryParams";

@Injectable()
export class BeerService implements EntityService<Beer>{

  private path = "beers"
  constructor(private readonly httpService: HttpService) { }

  public fetchMany(params: QueryParams) {
    return this.httpService.fetchMany<Beer>(this.path, params);
  }

  public fetchOne(id: number, props?: QueryParams) {
    return this.httpService.fetchOne<Beer>(id, this.path, props);
  }
}
