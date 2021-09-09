import {Injectable} from '@angular/core';
import {HttpService} from "../../core/services/http/http.service";
import {EntityService} from "../../shared/interfaces/entity-interfaces";
import {Ingredient} from "../model/ingredient";
import {QueryParams} from "../../core/interfaces/QueryParams";
import {Observable} from "rxjs";
import {HttpParams} from "@angular/common/http";

@Injectable()
export class IngredientService implements EntityService<Ingredient> {

  private path = 'ingredients';

  constructor(private httpService: HttpService) { }


  public fetchMany(params: QueryParams) {
    return this.httpService.fetchMany<Ingredient>(this.path, params);
  }

  public fetchOne(id: number, params: QueryParams) {
    return this.httpService.fetchOne<Ingredient>(id, this.path, params);
  }

  public search(name: string): Observable<Ingredient[]> {
    let httpParams = new HttpParams().set('q', name);
    return this.httpService.get<Ingredient[]>(`${this.path}/search`, httpParams);
  }

  createOne(entity: Ingredient) {
    return this.httpService.createOne<Ingredient>(this.path, entity).toPromise();
  }

  updateOne(entity: Ingredient) {
    return this.httpService.updateOne<Ingredient>(this.path, entity).toPromise();
  }

}
