import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  imports:[ ReactiveFormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
  standalone:true
})
export class LoginComponent {


  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      userName: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(3),Validators.maxLength(6)])
    });
  }
  ngOnInit() {
  
    this.loginForm.get('userName')?.valueChanges.subscribe(value => {
      console.log('Email Value Changed:', value);
    });

    this.loginForm.get('password')?.valueChanges.subscribe(value => {
      console.log('Password Value Changed:', value);
    });
  }
  submit() {
    if (this.loginForm.valid) {
      console.log('Form Submitted', this.loginForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
