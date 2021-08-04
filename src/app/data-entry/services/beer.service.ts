import {Injectable} from '@angular/core';
import {HttpService} from "../../core/services/http/http.service";
import {EntityService} from "../../shared/interfaces/EntityInterfaces";
import {Beer} from "../module/beer";

@Injectable()
export class BeerService implements EntityService<Beer>{

  private path = "beers"
  constructor(private readonly httpService: HttpService) { }

  getMany(page: number) {
    return this.httpService.get<Beer>(page, this.path);
  }

}
