import {Injectable} from '@angular/core';
import {HttpService} from "../../core/services/http/http.service";
import {EntityService} from "../../shared/interfaces/EntityInterfaces";
import {Beer} from "../model/beer";

@Injectable()
export class BeerService implements EntityService<Beer>{

  private path = "beers"
  constructor(private readonly httpService: HttpService) { }

  public fetchMany(page: number) {
    return this.httpService.fetchMany<Beer>(page, this.path);
  }

  public fetchOne(id: number) {
    return this.httpService.fetchOne<Beer>(id, this.path);
  }

}
