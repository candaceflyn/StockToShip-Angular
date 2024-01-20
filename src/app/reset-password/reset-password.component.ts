import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  constructor(private router: Router, private http: HttpClient, private userService: UserService) { }

  user = {
    username: '',
    password: '',
    confirmPassword: '',
  };

  errorMessages = {
    username: '',
    password: '',
    confirmPassword: '',
  };

  resetPassword() {
    this.errorMessages = {
      username: '',
      password: '',
      confirmPassword: '',
    };
    if (!this.user.username.trim()) {
      this.errorMessages.username = 'Please fill this field';
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

    const hasErrors = Object.values(this.errorMessages).some(message => message !== '');

    if (!hasErrors) {
      this.userService.checkUsernameAvailability(this.user.username).subscribe(
        response => {
          if (response.available) {
            this.errorMessages.username = 'Invalid username';            
          } else {
            this.updatePassword();
          }
        },
        error => {
          console.error('An error occurred while checking username availability:', error);
        }
      );
    }
  }

  updatePassword() {
    this.userService.updatePassword(this.user.username, this.user.password).subscribe(
      response => {
        if (response.success) {
          alert('Password updated successfully');
          this.router.navigate(['/login']); 
        } else {
          alert('Unable to update password. Please try again.');
        }
      },
      error => {
        console.error('An error occurred while updating password:', error);
      }
    );
  }
}