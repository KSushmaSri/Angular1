import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Registration } from '../Models/registration';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private baseurl="https://sheetdb.io/api/v1/boxz80ntdrdg9";
  constructor(private http:HttpClient) { }
  public registration(user:Registration):Observable<any>{
    return this.http.post(`${this.baseurl}`,user);
  }
}
