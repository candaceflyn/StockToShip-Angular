import { Component } from '@angular/core';

@Component({
  selector: 'app-painting',
  templateUrl: './painting.component.html',
  styleUrl: './painting.component.css'
})
export class PaintingComponent {

  productCode: string = '';
  paintingDate: string = '';
  paintColor: string = '';
  adhesion: string = '';
  submitted: boolean = false;


  performPaintingInspection() {
    if (this.validateForm()) {
     
      const inspectionResults = `
        <h3>Inspection Results</h3>
        <p><strong>Product Code:</strong> ${this.productCode}</p>
        <p><strong>Painting Date:</strong> ${this.paintingDate}</p>
        <p><strong>Paint Color:</strong> ${this.paintColor}</p>
        <p><strong>Adhesion:</strong> ${this.adhesion}</p>
        <p><strong>Inspection Status:</strong> Pass</p>
        <!-- Additional inspection details can be added here -->
      `;

      this.submitted = true;
      document.getElementById('inspectionResults')!.innerHTML = inspectionResults;
    }
  }

  validateForm(): boolean {
    
    if (!this.productCode || !this.paintingDate || !this.paintColor || !this.adhesion) {
      alert('Please fill in all fields.');
      return false;
    }

    return true;
  }
}
