import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-inbound-requisition',
  templateUrl: './inbound-requisition.component.html',
  styleUrl: './inbound-requisition.component.css'
})
export class InboundRequisitionComponent {

  constructor(private router: Router) {}

  submitForm() {
    if (this.validateForm()) {
      this.router.navigate(['/location-analyzer']);
    } else {
      alert('Please fill in all fields.');
    }
  }

  validateForm(): boolean {
   
    return true;
  }
}
