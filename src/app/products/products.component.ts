import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent implements OnInit {
  data;
  counter;
  products: any = [];

  constructor(private dataService: DataService) {
    // Get counter
    this.dataService.getCounter().subscribe((data) => (this.counter = data));
    // Get products
    this.dataService.getData().subscribe((data) => (this.data = data)),
      (err) => console.log(err);
  }

  ngOnInit(): void {}
  addToCart() {
    this.dataService.updateCounter(++this.counter);
  }
}
