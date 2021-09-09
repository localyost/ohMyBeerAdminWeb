import {Injectable} from '@angular/core';
import {EntityService} from "../../shared/interfaces/entity-interfaces";
import {BeerType} from "../model/beerType";
import {QueryParams} from "../../core/interfaces/QueryParams";
import {HttpService} from "../../core/services/http/http.service";
import {HttpParams} from "@angular/common/http";

@Injectable()
export class BeerTypeService implements EntityService<BeerType>{

  private path = "beerType";
  constructor(private readonly httpService: HttpService) { }


  public fetchMany(params: QueryParams) {
    return this.httpService.fetchMany<BeerType>(this.path, params);
  }

  public fetchOne(id: number, params: QueryParams) {
    return this.httpService.fetchOne<BeerType>(id, this.path, params);
  }

  public search(name: string) {
    let httpParams = new HttpParams().set('q', name);
    return this.httpService.get<BeerType[]>(`${this.path}/search`, httpParams)
  }

  createOne(entity: BeerType): Promise<BeerType> {
    return this.httpService.createOne<BeerType>(this.path, entity).toPromise();
  }

  updateOne(entity: BeerType): Promise<BeerType> {
    return this.httpService.updateOne<BeerType>(this.path, entity).toPromise();
  }

}
