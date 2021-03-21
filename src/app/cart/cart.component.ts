import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  counter;

  constructor(private dataService: DataService) {
    this.dataService.getCounter().subscribe((data) => (this.counter = data));
  }

  clearCart() {
    this.dataService.updateCounter(0);
  }

  ngOnInit(): void {}
}
