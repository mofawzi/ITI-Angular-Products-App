import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  constructor(private route:Router) {
    this.route.navigate(['/login']);
   }

  ngOnInit(): void {
  }

  onSigninSubmit(form) : void {
     console.log(form.email && form.password ? "Success Login" : "Not valid Login")
  }
}
