import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-bom',
  templateUrl: './create-bom.component.html',
  styleUrl: './create-bom.component.css'
})

export class CreateBomComponent {

  constructor(private router: Router) {}

  submitForm() {
    if (this.validateForm()) {
      alert('Your item has been sent for approval!');
      this.router.navigate(['/front-page']);
    } else {
      alert('Please fill in all fields.');
    }
  }
  validateForm(): boolean {
   
    return true;
  }
}
