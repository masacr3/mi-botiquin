import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { RemediosI } from '../models/remedios'

@Injectable({
  providedIn: 'root'
})
export class RemediosService {
  url = "http://192.168.0.13:3001/api/medicamentos" //end-point

  constructor(private http : HttpClient) { }

  getMedicamentos() : Observable<RemediosI[]>{
    return this.http.get<RemediosI[]>(this.url)
  }

}
