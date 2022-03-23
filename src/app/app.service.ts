import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  private Lurl = "https://lx.festo.com/SearchService/api/search/learning-paths/public";
  private thingProxyUrl = "https://thingproxy.freeboard.io/fetch/"
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'});

  urlText: string;

  constructor(private http: HttpClient) {}

  getData(params: { type: any; page: any; count: any; order?: number; sort?: any; }){

    return this.http.get(this.thingProxyUrl + this.Lurl+`?q=${params.type}&page=${params.page}&size=${params.count}&sortOrder=${params.order}`);
  };
}
