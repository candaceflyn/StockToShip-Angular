import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-outbound-requisition',
  templateUrl: './outbound-requisition.component.html',
  styleUrl: './outbound-requisition.component.css'
})
export class OutboundRequisitionComponent {

  constructor(private router: Router) {}

  submitForm() {
    if (this.validateForm()) {
      alert('Product has been added to cart!');
      this.router.navigate(['/front-page']);
    } else {
      alert('Please fill in all fields.');
    }
  }
  validateForm(): boolean {
   
    return true;
  }
}
