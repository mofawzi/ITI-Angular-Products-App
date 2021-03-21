import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
      // email: ['', Validators.required, Validators.email],
      uname: ['', [Validators.required, Validators.pattern("[^' ']+")]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  get register() {
    // console.log(this.registerForm.controls.password.errors.minLength);
    return this.registerForm.controls;
  }

  onRegisterSubmit() {
    this.submitted = true;
    console.log(this.registerForm.controls.password.value);

    // Stop if the form is invalid
    if(this.registerForm.invalid) return;

    console.log(this.registerForm.value);
  }
}
