import { Component } from '@angular/core';

@Component({
  selector: 'app-stamping',
  templateUrl: './stamping.component.html',
  styleUrl: './stamping.component.css'
})
export class StampingComponent {

  productCode: string = '';
  manufacturingDate: string = '';
  batchNumber: string = '';
  submitted: boolean = false;
  performStamping() {
    if (this.validateForm()) {
      const resultMessage = `
        <h3>Product Stamped:</h3>
        <p><strong>Product Code - </strong>${this.productCode}</p>
        <p><strong>Manufacturing Date - </strong>${this.manufacturingDate}</p>
        <p><strong>Batch Number - </strong>${this.batchNumber}</p>
      `;

      this.submitted = true;
      document.getElementById('stampResult')!.innerHTML = resultMessage;
    }
  }

  validateForm(): boolean {
    
    if (!this.productCode || !this.manufacturingDate || !this.batchNumber) {
      alert('Please fill in all fields.');
      return false;
    }

    return true;
  }
}
