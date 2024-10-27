import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cards } from '../Models/cards';

@Injectable({
  providedIn: 'root'
})
export class CardsService {
  private baseurl="https://sheetdb.io/api/v1/dzdmuj33k1wy1";
  constructor(private http:HttpClient) {}
  public insertion():Observable<Cards[]>{
      return this.http.get<Cards[]>(`${this.baseurl}`);
  }
}
