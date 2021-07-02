import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // title = 'apiCovidTracker';
  public all: any = [];
  countries: any;
  country: any;
  Country: string;
  Confirmed: Number;
  Recovered: Number;
  Deaths:Number;
  Date: Date;
  Active: Number;
  TotalConfirmed: Number;
  TotalRecovered: Number;
  TotalDeaths: Number;
  TodayConfirmed: Number;
  TodayRecovered: Number;
  TodayDeaths: Number;
  Update:Date;
  pic:string;
  TodayCases:Number;
  TodayRecovered1:Number;
  TodayDeaths1:Number;
  Critical:Number;

  constructor(private corona: ApiService) { }

  ngOnInit() {
    this.corona.getCountries().subscribe((data) => {
      console.log(data);
      this.countries = data;
    })
    this.corona.getAll().subscribe((data) => {
      console.log(data);
      this.all = data;
    })
    // this.getWorld();
    this.corona.getTotal().subscribe((data) => {
      console.log(data);
      this.TotalConfirmed = data.cases;
      this.TotalDeaths = data.deaths;
      this.TotalRecovered = data.recovered;
      this.TodayConfirmed = data.todayCases;
      this.TodayDeaths = data.todayDeaths;
      this.TodayRecovered = data.todayRecovered;
      this.Update = data.updated;
    })
  }
  getData(){
    this.corona.getData(this.country).subscribe((data)=>{
      console.log(data);
      // var index=data.length -1;
      this.Confirmed=data.cases;
      this.Recovered=data.recovered;
      this.Deaths=data.deaths;
      this.Date=data.updated;
      this.Active=data.active;
      this.Country=data.country;
      this.pic=data.countryInfo.flag;
      this.TodayCases=data.todayCases;
      this.TodayRecovered1=data.todayRecovered;
      this.TodayDeaths1=data.todayDeaths;
      this.Critical=data.critical;


    })
  }
  getCountry(country:any){
    this.country = country
  }
}
