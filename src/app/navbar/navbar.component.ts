import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  counter;

  constructor(private dataService: DataService) {
    this.dataService.getCounter().subscribe((data) => (this.counter = data));
  }

  ngOnInit(): void {}
}
