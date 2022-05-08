import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule, HttpInterceptor, HTTP_INTERCEPTORS} from '@angular/common/http'
import { AppComponent } from './app.component';
// import{HttpClientModule} from "@angular/common/http"
import {FormsModule} from "@angular/forms"
import { WeatherWidgetMainComponent } from './components/weather-widget-main/weather-widget-main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { BehaviorSubject } from 'rxjs'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { InterceptorService } from './loader/interceptor.service';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { SearchbarComponent } from './components/searchbar/searchbar.component'
@NgModule({
  declarations: [
    AppComponent,
    WeatherWidgetMainComponent,
    SearchbarComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    HttpClientModule,
    FormsModule
    // BehaviorSubject
    // BehaviorSubject

  ],
  providers: 
  [
    {provide:HTTP_INTERCEPTORS,useClass:InterceptorService,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
