import {HttpClient,HttpHeaders} from "@angular/common/http"
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GetdataService {

  private url1="https://api.openweathermap.org/data/2.5/weather?q="
  private url2="&appid=d28274b5fe592e1f1e558103a5e66370&units=metric"
  constructor(private http:HttpClient) { }
  public fetchData(city)
  {
    const finalUrl=this.url1+city+this.url2
    return this.http.get(finalUrl)
  }
}
