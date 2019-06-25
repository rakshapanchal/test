import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private http: HttpClient) { }

  getRestaurants(data: any) {
    let data1 = {
      availableMeals: data
    }
    return this.http.post("http://localhost:8085/restaurants/getRestaurants", data1, httpOptions)
  }

  getDish(data: any) {
    let data1 = {
      restaurant: data
    }
    return this.http.post("http://localhost:8085/restaurants/getDish", data1, httpOptions)
  }
}
