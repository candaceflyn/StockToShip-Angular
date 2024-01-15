import { UserDetailsDTO } from './../userDetails.dto';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private baseUrl = 'http://localhost:8010/api';

  constructor(private http: HttpClient) {}

  saveUser(user: any): Observable<any> {
    const url = `${this.baseUrl}/save-user`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, user, { headers }).pipe(
      catchError(error => {
        console.error('An error occurred while saving user:', error);
        return throwError(error);
      })
    );
  }

  checkUsernameAvailability(username: string): Observable<any> {
    const url = `${this.baseUrl}/check-username`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(url, { username }, { headers }).pipe(
      catchError(error => {
        console.error('An error occurred while checking username availability:', error);
        return throwError(error);
      })
    );
  }

  validateCredentials(username: string, password: string): Observable<any> {
    const url = `${this.baseUrl}/validate-credentials`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
    const body = {
      username: username,
      password: password
    };
  
    return this.http.post(url, body, { headers }).pipe(
      catchError(error => {
        console.error('An error occurred while validating credentials:', error);
        return throwError(error);
      })
    );
  }
  updateUser(username: string, updatedUser: any): Observable<any> {
    const url = `${this.baseUrl}/users/${username}`;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

    return this.http.put(url, updatedUser, { headers }).pipe(
      catchError(error => {
        console.error('An error occurred while updating user:', error);
        return throwError(error);
      })
    );
  }
  // getUserDetails(username: string): Observable<any> {
  //   const url = `${this.baseUrl}/users/${username}`;
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });

  //   return this.http.get(url, { headers }).pipe(
  //     catchError(error => {
  //       console.error('An error occurred while fetching user details:', error);
  //       return throwError(error);
  //     })
  //   );
  // }
  
  // getUserDetails(username: string): Observable<UserDetailsDTO> {
  //   const url = `${this.baseUrl}/userDetails/${username}`;
  //   return this.http.get<UserDetailsDTO>(url);
  // }
  getUserDetails(username: string): Observable<UserDetailsDTO> {
    console.log('Fetching user details for username:', username);
  
    const url = `${this.baseUrl}/userDetails/${username}`;
    return this.http.get<UserDetailsDTO>(url);
  }
  

}


// import { Injectable } from '@angular/core';
// import { HttpClient, HttpHeaders } from '@angular/common/http';
// import { Observable,  throwError } from 'rxjs';
// import { catchError } from 'rxjs/operators';


// @Injectable({
//   providedIn: 'root'
// })
// export class UserService {
//   private baseUrl = 'http://localhost:8010/api';

//   constructor(private http: HttpClient) {}

//   saveUser(user: any) {
//     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
//     return this.http.post('http://localhost:8010/api/save-user', user, { headers });
//   }

//   checkUsernameAvailability(username: string) {
//     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
//     return this.http.post<any>('http://localhost:8010/api/check-username', { username }, { headers });
//   }

//   validateCredentials(username: string, password: string): Observable<any> {
//     const url = `${this.baseUrl}/validate-credentials`;
//     const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  
//     const body = {
//       username: username,
//       password: password
//     };
  
//     //return this.http.post(url, body, { headers });

//     try {
//       const response = this.http.post(url, body, { headers });
//       return response;
//     } catch (error) {
//       alert('An error occurred while validating credentials:');

//       console.error('An error occurred while validating credentials:', error);
//       throw error;
//     }

//   }
  

  
//}
