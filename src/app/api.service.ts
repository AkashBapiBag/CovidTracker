import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  // https://corona.lmao.ninja/v2/countries/india
  // 1.https://api.covid19api.com/countries
  // 2.https://api.covid19api.com/total/country/"+country
  // 3.https://api.covid19api.com/world/total
// https://corona.lmao.ninja/v2/all
  constructor(private http:HttpClient) { }

  getCountries():Observable<any>{
    const url="https://disease.sh/v3/covid-19/vaccine/coverage/countries?lastdays=1";
    return this.http.get<any>(url);
  }
  getData(country):Observable<any>{
    const url="https://disease.sh/v3/covid-19/countries/"+country;
    return this.http.get<any>(url)
  }
  getAll():Observable<any>{
    const url="https://disease.sh/v3/covid-19/countries";
    return this.http.get<any>(url)
  }
  getTotal():Observable<any>{
    const url="https://disease.sh/v3/covid-19/all";
    return this.http.get<any>(url);
  }


}
