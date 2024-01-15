import { Component } from '@angular/core';

@Component({
  selector: 'app-inventory-requisition',
  templateUrl: './inventory-requisition.component.html',
  styleUrls: ['./inventory-requisition.component.css']
})
export class InventoryRequisitionComponent {
  successMessage: string | null = null;
errorMessage: string | null = null;
  constructor() {}

  saveItemCode() {
    // Validate the form
    this.successMessage = "Item code added to BOM successfully.";

   // const isValid = this.validateForm();

    // Display success message if valid
    //if (isValid) {
    //  document.getElementById('successMessage').innerHTML =
    //    'Item code added to BOM successfully.';
    //  document.getElementById('successMessage').style.display = 'block';
   // } else {
   //   document.getElementById('successMessage').style.display = 'none';
   // }
  }

  addItemToIR() {
   
  }

  validateForm(): boolean {
   
    return true;
  }

  validateField(fieldId: string, errorId: string): boolean {
    const field = document.getElementById(fieldId) as HTMLInputElement;
    const errorMessage = document.getElementById(errorId);

    // Check if the field is empty
   // if (field.value.trim() === "") {
     // errorMessage.innerHTML = "Please fill out this field.";
     // errorMessage.style.display = "block";
      return false;
   // }

    return true;
  }

  resetErrorMessages() {
    const errorMessages = document.getElementsByClassName("error-message");
    for (let i = 0; i < errorMessages.length; i++) {
      errorMessages[i].innerHTML = "";
    //  errorMessages[i].style.display = "none";
    }
  }
}
