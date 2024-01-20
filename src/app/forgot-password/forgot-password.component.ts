import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {

  
  constructor(private router: Router, private http: HttpClient, private userService: UserService) {}

  user = {
    username: '',
    email: ''
  };

  errorMessages = {
    username: '',
    email: ''
  };

  login() {
    // Reset error messages
    this.errorMessages = {
      username: '',
      email: ''
    };

    // Validate each field
    if (!this.user.username.trim()) {
      this.errorMessages.username = 'Please fill this field';
    }

    if (!this.user.email.trim()) {
      this.errorMessages.email = 'Please fill this field';
    }

    const hasErrors = Object.values(this.errorMessages).some(message => message !== '');

    if (!hasErrors) {
      this.userService.validateUser(this.user.username, this.user.email).subscribe(
        response => {
          if (response.valid) {
            alert('Credentials verified!');
            this.router.navigate(['/reset-password']);
          } else {
            // Invalid credentials
            this.errorMessages.email = 'Incorrect username or email!';
            this.errorMessages.username = 'Incorrect username or email!';
            
          }
        },
        error => {
          alert('An error occured while validating credentials..')
          console.error('An error occurred while validating credentials:', error);
        }
      );
    }
   
}
}
