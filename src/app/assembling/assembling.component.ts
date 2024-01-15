import { Component } from '@angular/core';

@Component({
  selector: 'app-assembling',
  templateUrl: './assembling.component.html',
  styleUrl: './assembling.component.css'
})
export class AssemblingComponent {

  productCode: string = '';
  assemblyDate: string = '';
  assemblerName: string = '';
  assemblyQuality: string = '';
  submitted: boolean = false;

  performAssemblingInspection() {
    if (this.validateForm()) {
    
      this.submitted = true;
    }
  }

  validateForm(): boolean {
    
    if (!this.productCode || !this.assemblyDate || !this.assemblerName || !this.assemblyQuality) {
      alert('Please fill in all fields.');
      return false;
    }

    return true;
  }
}
