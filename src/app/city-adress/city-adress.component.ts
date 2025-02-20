import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-city-adress',
  imports: [CommonModule, ReactiveFormsModule],
  standalone: true,
  templateUrl: './city-adress.component.html',
  styleUrls: ['./city-adress.component.css'] 
})
export class CityAdressComponent implements OnInit {
  addressForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.addressForm = this.fb.group({
      pincode: [''],
      city: [''],
    });

    this.pincodeControl!.valueChanges.subscribe(() => {
      if (this.pincodeControl!.dirty) {
        this.cityControl!.setValidators([Validators.required]);
      } else {
        this.cityControl!.clearValidators();
      }
      this.cityControl!.updateValueAndValidity();
    });
  }

  get pincodeControl() {
    return this.addressForm.get('pincode')!;
  }

  get cityControl() {
    return this.addressForm.get('city')!;
  }

  onPincodeBlur(): void {
 
    if (this.pincodeControl!.dirty) {
      this.cityControl!.updateValueAndValidity();
    }
  }

  onSubmit(): void {
    if (this.addressForm.valid) {
      console.log('Form Submitted', this.addressForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
