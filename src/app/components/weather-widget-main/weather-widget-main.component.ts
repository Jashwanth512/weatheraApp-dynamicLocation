import { Component, OnInit } from '@angular/core';
import { LoaderService } from 'src/app/loader/loader.service';
import {HttpClient} from "@angular/common/http"
@Component({
  selector: 'app-weather-widget-main',
  templateUrl: './weather-widget-main.component.html',
  styleUrls: ['./weather-widget-main.component.css']
})

export class WeatherWidgetMainComponent implements OnInit {
  data:any
  constructor(public loaderService:LoaderService,private http:HttpClient) 
  {}
  ngOnInit(): void {
    this.data=
    {
      main:{}
    };
  }  
  fetchData(data:object)
  {
    this.data=data
    this.data.name=this.data.name
    this.data.temp=this.data.main.temp
  }

}