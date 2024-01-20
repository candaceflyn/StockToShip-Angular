import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../_services/user.service';
//import { ApiResponse } from './../models';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})

export class SignupComponent {

  constructor(private router: Router, private http: HttpClient, private userService: UserService) { }

  user = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    employeeId: ''
  };

  errorMessages = {
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    name: '',
    employeeId: ''
  };

  submitForm() {
    // Reset error messages
    this.errorMessages = {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
      name: '',
      employeeId: ''
    };

    // Validate each field
    if (!this.user.name.trim()) {
      this.errorMessages.name = 'Please fill this field';
    }else if (this.user.name.trim().length < 3 || this.user.name.trim().length > 10) {
      this.errorMessages.name = 'Name should be between 3 and 10 characters';
    }

     if (!this.user.username.trim()) {
      this.errorMessages.username = 'Please fill this field';
    }else if (this.user.username.trim().length < 5 || this.user.username.trim().length > 12) {
      this.errorMessages.username = 'Username should be between 5 and 10 characters';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!this.user.email.trim()) {
      this.errorMessages.email = 'Please fill this field';
    }else if (!emailRegex.test(this.user.email.trim())) {
      this.errorMessages.email = 'Invalid email format';
    }

    if (!this.user.password.trim()) {
      this.errorMessages.password = 'Please fill this field';
    } else if (this.user.password.trim().length < 5 || this.user.password.trim().length > 10) {
      this.errorMessages.password = 'Password should be between 5 and 10 characters';
    }

    if (!this.user.confirmPassword.trim()) {
      this.errorMessages.confirmPassword = 'Please fill this field';
    }else if (this.user.password.trim() !== this.user.confirmPassword.trim()) {
      this.errorMessages.password = 'Password and Confirm Password do not match';
      this.errorMessages.confirmPassword = 'Password and Confirm Password do not match';
    }
    // if (!this.user.employeeId.trim()) {
    //   this.errorMessages.employeeId = 'Please fill this field';
    // }


    const hasErrors = Object.values(this.errorMessages).some(message => message !== '');

    if (!hasErrors) {
      // Check if the username is available
      this.userService.checkUsernameAvailability(this.user.username).subscribe(
        response => {
          if (response.available) {
            // Username is available, proceed with registration
            this.registerUser();
          } else {
            this.errorMessages.username = 'Username not available';
          }
        },
        error => {
          // Handle error
          console.error('An error occurred while checking username availability:', error);
        }
      );
    }
  }


  registerUser() {
    // Make HTTP request to save user data
    this.userService.saveUser(this.user).subscribe(
      (response: any) => {
        // Check the response from the backend
        if (response.success) {
          // Registration successful
          alert('Registration successful!! 😄');
          this.router.navigate(['/home']);
        } else {
          // Unable to register
          alert('Unable to register. Please try again. 🙄');
        }
      },
      error => {
        console.error('An error occurred while registering the user:', error);
      }
    );
  }
}