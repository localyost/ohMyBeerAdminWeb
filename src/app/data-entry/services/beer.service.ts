import {Injectable} from '@angular/core';
import {HttpService} from "../../core/services/http/http.service";
import {EntityService} from "../../shared/interfaces/entity-interfaces";
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

  public updateOne(entity: Beer) {
   return this.httpService.updateOne<Beer>(this.path, entity).toPromise();
  }

  public createOne(entity: Beer) {
    return this.httpService.createOne<Beer>(this.path, entity).toPromise();
  }

  public uploadImages(id: number, fileList: FileList) {
    const formData = new FormData();
    for (let index in fileList) { formData.append('files', fileList[index]) }
    this.httpService.post(`${this.path}/${id}/image`, formData).toPromise();
  }

  public getImagePath(path: string): string {
    return this.httpService.appendUrl(`${this.path}/image/${path}`);
  }
}
