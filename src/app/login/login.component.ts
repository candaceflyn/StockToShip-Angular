import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router, private http: HttpClient, private userService: UserService) {}

  user = {
    username: '',
    password: ''
  };

  errorMessages = {
    username: '',
    password: ''
  };

  login() {
    // Reset error messages
    this.errorMessages = {
      username: '',
      password: ''
    };

    // Validate each field
    if (!this.user.username.trim()) {
      this.errorMessages.username = 'Please fill this field';
    }

    if (!this.user.password.trim()) {
      this.errorMessages.password = 'Please fill this field';
    }

    // Check if any error messages exist
    const hasErrors = Object.values(this.errorMessages).some(message => message !== '');

    if (!hasErrors) {
      // Make HTTP request to validate credentials
      this.userService.validateCredentials(this.user.username, this.user.password).subscribe(
        response => {
          if (response.valid) {
            // Valid username and password
            alert('Login successful!');
            this.router.navigate(['/home']);
          } else {
            // Invalid credentials
            this.errorMessages.password = 'Incorrect username or password!';
            this.errorMessages.username = 'Incorrect username or password!';
            
           // alert('Incorrect username or password');
          }
        },
        error => {
          alert('An error occured while validating credentials..')
          console.error('An error occurred while validating credentials:', error);
        }
      );
    }
    // if (!hasErrors) {
    //   // Check if the username exists
    //   this.userService.checkUsernameAvailability(this.user.username).subscribe(
    //     response => {
    //       if (response.available) {
    //         // Username does not exist
    //         alert('Username does not exist! You need to sign up.');
    //        } 
           //else {
          //   // Username exists, now check password
          //   this.userService.validatePassword(this.user.username, this.user.password).subscribe(
          //     passwordResponse => {
          //       if (passwordResponse.valid) {
          //         // Password is valid, perform login logic
          //         // For example, navigate to the home page using this.router.navigate(['/home']);
          //         alert('Login successful!');
          //         this.router.navigate(['/home']);
          //       } else {
          //         // Password does not match
          //         this.errorMessages.password = 'Incorrect password!';
          //       }
          //     },
          //     error => {
          //       console.error('An error occurred while validating password:', error);
          //     }
          //   );
          // }
        //   else {
        //     // Username exists, now check password
        //     this.userService.validatePassword(this.user.username, this.user.password).then(
        //       passwordResponse => {
        //         if (passwordResponse.valid) {
        //           // Password is valid, perform login logic
        //           // For example, navigate to the home page using this.router.navigate(['/home']);
        //           alert('Login successful!');
        //           this.router.navigate(['/home']);
        //         } else {
        //           // Password does not match
        //           this.errorMessages.password = 'Incorrect password!';
        //         }
        //       }
        //     ).catch(error => {
        //       console.error('An error occurred while validating password:', error);
        //     });
        //   }
          
        // },
        // error => {
        //   console.error('An error occurred while checking username availability:', error);
        // }
      //);
   // }
  }
}
