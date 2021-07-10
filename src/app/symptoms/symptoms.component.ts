import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service'
import * as apexcharts from 'apexcharts';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {

  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;

  series1: ApexAxisChartSeries;
  chart1: ApexChart;
  dataLabels1: ApexDataLabels;
  plotOptions1: ApexPlotOptions;
  xaxis1: ApexXAxis;
  title1: ApexTitleSubtitle;

  // title = 'apiCovidTracker';
  public all: any = [];
  public case: any = [];
  public today: any = [];
  countries: any;
  country: any;
  Country: string;
  Confirmed: Number;
  Recovered: Number;
  Deaths: Number;
  Date: Date;
  Active: Number;
  TotalConfirmed: Number;
  TotalRecovered: Number;
  TotalDeaths: Number;
  TodayConfirmed: Number;
  TodayRecovered: Number;
  TodayDeaths: Number;
  Update: Date;
  pic: string;
  TodayCases: Number;
  TodayRecovered1: Number;
  TodayDeaths1: Number;
  Critical: Number;
  // arr:number[];

  constructor(private corona: ApiService) { }
  createChart(): void {
    this.title = {
      text: 'Overall Data'
    };
    this.series = [{
      name: "Number",
      data: this.case
    }];
    this.chart = {
      type: 'bar',
      height: 250
    },
      this.plotOptions = {
        bar: {
          horizontal: true
        }
      },
      this.dataLabels = {
        enabled: false
      },
      this.xaxis = {
        categories: [
          "Confirmed",
          "Recovered",
          "Deaths"
        ]
      },
      this.series1 = [{
        name: "Number",
        data: this.today
      }];
    this.chart1 = {
      type: 'bar',
      height: 250
    },
      this.plotOptions1 = {
        bar: {
          horizontal: true
        }
      },
      this.dataLabels1 = {
        enabled: false
      },
      this.xaxis1 = {
        categories: [
          "Confirmed",
          "Recovered",
          "Deaths"
        ]
      }
    this.title1 = {
      text: "Today's Data"
    }
  }
  ngOnInit() {
    this.createChart();
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
      this.case.push(data.cases);
      this.case.push(data.recovered);
      this.case.push(data.deaths);
      this.today.push(data.todayCases);
      this.today.push(data.todayRecovered);
      this.today.push(data.todayDeaths);
      console.log(this.case);

    })

  }

  getData() {
    this.corona.getData(this.country).subscribe((data) => {
      console.log(data);
      // var index=data.length -1;
      this.Confirmed = data.cases;
      this.Recovered = data.recovered;
      this.Deaths = data.deaths;
      this.Date = data.updated;
      this.Active = data.active;
      this.Country = data.country;
      this.pic = data.countryInfo.flag;
      this.TodayCases = data.todayCases;
      this.TodayRecovered1 = data.todayRecovered;
      this.TodayDeaths1 = data.todayDeaths;
      this.Critical = data.critical;


    })
  }
  getCountry(country: any) {
    this.country = country
  }

}
