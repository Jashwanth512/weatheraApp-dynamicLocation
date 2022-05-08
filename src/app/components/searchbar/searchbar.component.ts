import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { GetdataService } from "../../services/getdata.service"
import {WeatherWidgetMainComponent} from "../weather-widget-main/weather-widget-main.component"
@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {
  city:string
  cityData:any
  constructor(private getDataService:GetdataService,private mainComponent:WeatherWidgetMainComponent)
  {}
  ngOnInit(): void {
  }
  onSubmit()
  {
    this.getDataService.fetchData(this.city).subscribe((data)=>{
    this.cityData=data
    this.mainComponent.fetchData(this.cityData)
  })
  }
}
