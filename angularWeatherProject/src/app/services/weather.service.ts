import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Params } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  apiUrl = 'https://api.openweathermap.org/data/2.5/weather';
  constructor(private http: HttpClient) {}

  getAllWeather(city: any): Observable<any> {
    const params: Params = {
      q: city,
      appid: 'api key',//api key kaldırdın...
      lang: 'tr',
      units: 'metric',
    };
    return this.http.get(this.apiUrl, { params: params });
  }
}
