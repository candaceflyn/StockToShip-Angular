import { Component } from '@angular/core';

@Component({
  selector: 'app-welding',
  templateUrl: './welding.component.html',
  styleUrl: './welding.component.css'
})
export class WeldingComponent {

  productCode: string = '';
  weldingDate: string = '';
  welderName: string = '';
  weldingType: string = '';
  submitted: boolean = false;

  performWeldingInspection() {
    if (this.validateForm()) {
      
      const inspectionResults = `
        <h3>Inspection Results</h3>
        <p><strong>Product Code:</strong> ${this.productCode}</p>
        <p><strong>Welding Date:</strong> ${this.weldingDate}</p>
        <p><strong>Welder Name:</strong> ${this.welderName}</p>
        <p><strong>Welding Type:</strong> ${this.weldingType}</p>
        <p><strong>Inspection Status:</strong> Pass</p>
      `;

      this.submitted=true;
      document.getElementById('inspectionResults')!.innerHTML = inspectionResults;
    }
  }

  validateForm(): boolean {
   
    if (!this.productCode || !this.weldingDate || !this.welderName || !this.weldingType) {
      alert('Please fill in all fields.');
      return false;
    }

    return true;
  }
}
