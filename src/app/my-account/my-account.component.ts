import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';
import { UserDetailsDTO } from '../userDetails.dto';

@Component({
  selector: 'app-my-account',
  templateUrl: './my-account.component.html',
  styleUrls: ['./my-account.component.css']
})
export class MyAccountComponent implements OnInit {
  originalUserData: any = {}; // Store the original user data
  user: UserDetailsDTO = {
    username: '',
    name: '',
    email: '',
    employeeId: '',
    roleId: '',
    departmentId: ''
  };
  isEditMode = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    console.log('Username in ngOnInit:', this.user.username);
    this.fetchUserData();
  }
  
  fetchUserData(): void {
    console.log('Username before API call:', this.user.username);

    if (this.user && this.user.username) {

      this.userService.getUserDetails(this.user.username).subscribe(
        (userDetails: any) => {
          this.originalUserData = { ...userDetails };
          this.user = { ...userDetails };
        },
        error => {
          console.error('An error occurred while fetching user details:', error);
        }
      );
    } else {
      console.error('Invalid username. Cannot fetch user details.');
    }
    
  }

  toggleEditMode(): void {
    if (this.isEditMode) {
      // If in edit mode, revert the changes when switching to view mode
      this.user = { ...this.originalUserData };
    }
    this.isEditMode = !this.isEditMode;
  }

  saveChanges(): void {
    // Send the updated data to the server
    this.userService.updateUser(this.user.username, this.user).subscribe(
      (response: any) => {
        if (response && response.success) {
          alert('Profile updated successfully!');
          this.isEditMode = false;
        } else {
          alert('Failed to update profile. ' + (response ? response.message : 'Please try again.'));
        }
      },
      error => {
        console.error('An error occurred while updating the profile:', error);
        alert('An error occurred while updating the profile. Please try again.');
      }
    );
  }

  cancelChanges(): void {
    // If in edit mode, revert the changes when canceling
    if (this.isEditMode) {
      this.user = { ...this.originalUserData };
    }
    this.isEditMode = false;
  }
}