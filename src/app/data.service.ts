import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private cartCounter = new BehaviorSubject(0);
  counter = this.cartCounter.asObservable();

  constructor(private http: HttpClient) {}

  // Get Products --> API
  getData() {
    return this.http.get(
      'https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products'
    );
  }

  getProduct(id) {
    return this.http.get(
      `https://60523dc8fb49dc00175b7d04.mockapi.io/api/v1/products/${id}`
    );
  }

  // Adding to cart
  updateCounter(newVal) {
    this.cartCounter.next(newVal);
  }

  // Get Current Counter
  getCounter() {
    return this.counter;
  }
}
