import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Response} from "../../../shared/interfaces/entity-interfaces";
import {QueryParams} from "../../interfaces/QueryParams";

@Injectable()
export class HttpService {

  private rootUrl = "http://localhost:8080/api/v1/";

  public constructor(protected http: HttpClient) { }

  public fetchMany<T>(path: string, { page, size, props }: QueryParams) {
    let params = this.applyPropFilter({page, size}, new HttpParams());
    if (props) { params = params.set('props', props.join(',')) }
    return this.http.get<Response<T>>(`${this.rootUrl}${path}`,{params});
  }

  public fetchOne<T>(id: number, path: string, params?: QueryParams) {
    let httpParams = new HttpParams()
    if (params && params.props) { httpParams = httpParams.set('props', params.props.join(',')) }
    return this.http.get<T>(`${this.rootUrl}${path}/${id}`, {params: httpParams});
  }

  public applyPropFilter({page, size}: QueryParams, params: HttpParams): HttpParams {
    if (page != undefined) {
      return params.set('page', page).set('size', size || PAGE_SIZE);
    }
    return params;
  }
}

export const PAGE_SIZE = 50;
