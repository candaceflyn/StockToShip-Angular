import { Component } from '@angular/core';

@Component({
  selector: 'app-blanking',
  templateUrl: './blanking.component.html',
  styleUrl: './blanking.component.css'
})
export class BlankingComponent {

  sampleSize: string = '';
  partCode: string = '';

  edit() {
    alert('Edit button clicked');
  }

  save() {
    alert('Save button clicked');
  }

  submitForm() {
    // Add your validation logic here
    if (this.validateForm()) {
      alert('Submit button clicked');
    }
  }

  validateForm(): boolean {
    // Add your validation logic here
    // For example, you can check if the fields are not empty
    if (!this.sampleSize || !this.partCode) {
      alert('Please fill in all fields.');
      return false;
    }

    // Add more complex validations as needed

    return true;
  }
}
