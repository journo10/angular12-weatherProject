import { WeatherService } from './../../services/weather.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {

  constructor(private weatherService: WeatherService) { }
  weatherData: any = "";
  city: any;
  ngOnInit(): void {
  }

  getWeather() {
    this.weatherService.getAllWeather(this.city).subscribe((data) => {
      this.weatherData = data;
      console.log(data);
      this.city = ''//inputun içinin temizlenmesi
    })
  }
}
