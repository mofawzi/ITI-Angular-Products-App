import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss'],
})
export class ProductDetailsComponent implements OnInit {
  product;
  id;
  counter;

  constructor(private dataService: DataService, public route: ActivatedRoute) {
    //get id parameter
    this.id = this.route.snapshot.paramMap.get('id');
    // Get The Product
    this.dataService.getProduct(this.id).subscribe((prod) => {
      this.product = prod;
    });
    // Get current counter
    this.dataService.getCounter().subscribe((data) => (this.counter = data));
  }

  ngOnInit(): void {}

  addToCart() {
    this.dataService.updateCounter(++this.counter);
  }
}
