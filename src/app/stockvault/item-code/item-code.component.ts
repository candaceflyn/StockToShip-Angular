
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ItemTypeService } from './../../_services/item-type.service';
import { Router } from '@angular/router';

import { ItemType } from './item-type.model';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-item-code',
  templateUrl: './item-code.component.html',
  styleUrls: ['./item-code.component.css']
})
export class ItemCodeComponent {

  constructor(private router: Router, private http: HttpClient, private itemTypeService: ItemTypeService) {}

  itemType = {
    itemCode: '',
    description: '',
    unitOfMeasure: '',
    category: '',
    dimensions: '',
    manufacturer: '',
    countryOrigin: ''
  };

  errorMessages = {
    itemCode: '',
    description: '',
    unitOfMeasure: '',
    category: '',
    dimensions: '',
    manufacturer: '',
    countryOrigin: ''
  };

  submitForm() {
    this.errorMessages = {
      itemCode: '',
      description: '',
      unitOfMeasure: '',
      category: '',
      dimensions: '',
      manufacturer: '',
      countryOrigin: ''
    };

   const itemCodeRegex = /^ITM\d{3,4}$/;
     if (!this.itemType.itemCode.trim()) {
      this.errorMessages.itemCode = 'Please fill this field';
    } 
    else if(!itemCodeRegex.test(this.itemType.itemCode.trim())){
      this.errorMessages.itemCode = 'Invalid Item Code\nItem Code should begin with "ITM..."';
    }

    if (!this.itemType.description.trim()) {
      this.errorMessages.description = 'Please fill this field';
    }
    if (!this.itemType.unitOfMeasure.trim()) {
      this.errorMessages.unitOfMeasure = 'Please fill this field';
    }
    if (!this.itemType.category.trim()) {
      this.errorMessages.category = 'Please fill this field';
    }
    if (!this.itemType.dimensions.trim()) {
      this.errorMessages.dimensions = 'Please fill this field';
    }
    if (!this.itemType.manufacturer.trim()) {
      this.errorMessages.manufacturer = 'Please fill this field';
    }
    if (!this.itemType.countryOrigin.trim()) {
      this.errorMessages.countryOrigin = 'Please fill this field';
    }
    const hasErrors = Object.values(this.errorMessages).some(message => message !== '');
    if (!hasErrors) {
      this.itemTypeService.checkItemCodeAvailability(this.itemType.itemCode).subscribe(
        response => {
          if (response.available) {
            this.saveItemType();
          } else {
            this.errorMessages.itemCode = 'Item Code not available';
          }
        },
        error => {
          console.error('An error occurred while checking item-code availability:', error);
        }
      );
    }
  }


  saveItemType() {
    this.itemTypeService.saveItemT(this.itemType).subscribe(
      (response: any) => {
        if (response.success) {
          alert('Item Type created successfully');
           this.router.navigate(['/stockvault']);
        } else {
          alert('Unable to create Item Code. Please try again. 🙄');
        }
      },
      error => {
        // Handle error
        console.error('An error occurred while creating item code:', error);
      }
    );
  }
}