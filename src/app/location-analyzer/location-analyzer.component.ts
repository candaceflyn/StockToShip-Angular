import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LocationService } from './../_services/location.service';
import { Location } from '../_models/location.model';
import { AbstractControl, ValidatorFn, ValidationErrors, AsyncValidatorFn } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { debounceTime, map, catchError, switchMap } from 'rxjs/operators';

function statusCodeValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const statusCode = control.value;
    if (statusCode !== null && (statusCode !== 0 && statusCode !== 1)) {
      return { invalidStatusCode: true };
    }
    return null;
  };
}
function locationIdAsyncValidator(locationService: LocationService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const locationId = control.value;
    
    return of(locationId).pipe(
      debounceTime(300), //a debounce time to avoid frequent server calls
      switchMap(id => locationService.checkLocationIdAvailability(id)),
      map(res => (res ? { locationIdTaken: true } : null)),
      catchError(() => of(null))
    );
  };
}
function locationIdValidator(locationService: LocationService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    const locationId = control.value;
    
    return of(locationId).pipe(
      debounceTime(300), //a debounce time to avoid frequent server calls
      switchMap(id => locationService.checkLocationIdNonAvailability(id)),
      map(res => (res ? { locationIdNotTaken: true } : null)),
      catchError(() => of(null))
    );
  };
}
@Component({
  selector: 'app-location-analyzer',
  templateUrl: './location-analyzer.component.html',
  styleUrl: './location-analyzer.component.css'
})
export class LocationAnalyzerComponent implements OnInit {

  locations: Location[] = []; 
  errorMessage: string = '';

  locationForm!: FormGroup;
  updateLocationForm!: FormGroup;

  constructor(private fb: FormBuilder, private locationService: LocationService) { }

  ngOnInit(): void {
    this.initForm();
    this.loadLocations();
  }

  initForm(): void {
    this.locationForm = this.fb.group({
      locationId: [
        '',
        [Validators.required],
        [locationIdAsyncValidator(this.locationService)],
      ],
      locationDescription: ['', Validators.required],
      statusCode: [null, [Validators.required, statusCodeValidator()]],
      locationLength: [null, Validators.required],
      locationWidth: [null, Validators.required],
      locationHeight: [null, Validators.required],
    });
    this.updateLocationForm=this.fb.group({
      locationId: [
        '',
        [Validators.required],
        [locationIdValidator(this.locationService)],
      ],
      locationDescription: ['', Validators.required],
      statusCode: [null, [Validators.required, statusCodeValidator()]],
      locationLength: [null, Validators.required],
      locationWidth: [null, Validators.required],
      locationHeight: [null, Validators.required],
    });
  }

  loadLocations(): void {
    this.locationService.getAllLocations().subscribe(
      (data: any) => {
        this.locations = data;
        if (this.locations.length === 0) {
          this.errorMessage = 'No data for locations to be displayed!';
        }
      },
      error => {
        console.error('An error occurred while fetching locations:', error);
      }
    );
  }

  addLocation() {
    if (this.locationForm.valid) {
      this.locationService.addLocation(this.locationForm.value).subscribe(
        (response: any) => {
          if (response.success) {
            alert('Location added successfully');
            this.loadLocations(); 
            location.reload();
            this.locationForm.reset();
          } else {
            alert('Unable to add location. Please try again. 🙄');
            this.loadLocations(); 
          }
        },
        error => {
          console.error('An error occurred while adding a location:', error);
        }
      );
    }
  }
  updateLocation() {
    if (this.updateLocationForm.valid) {
      this.locationService.updateLocation(this.updateLocationForm.value).subscribe(
        (response: any) => {
          if (response.success) {
            alert('Location updated successfully');
            this.loadLocations(); 
            this.locationForm.reset();
          } else {
            alert('Unable to update location. Please try again. 🙄');
            this.loadLocations(); 
          }
        },
        error => {
          console.error('An error occurred while updating a location:', error);
        }
      );
    }
  }
  
}
// export class LocationAnalyzerComponent implements OnInit {
//   locations: Location[] = [];
//   errorMessage: string = '';

//   constructor(private locationService: LocationService) {}

//   // ngOnInit(): void {
//   //   this.locationService.getAllLocations().subscribe(
//   //     (data: Location[]) => {
//   //       this.locations = data;
//   //       if (this.locations.length === 0) {
//   //         this.errorMessage = 'No data for locations to be displayed!';
//   //       }
//   //     },
//   //     (error) => {
//   //       console.error('An error occurred while fetching locations:', error);
//   //       this.errorMessage = 'An error occurred while fetching locations. Please try again.';
//   //     }
//   //   );
//   // }
//   ngOnInit(): void {
//     this.locationService.getAllLocations().subscribe(
//       (data) => {
//         this.locations = data;
//         console.log('Fetched Locations:', this.locations);
//       },
//       (error) => {
//         this.errorMessage = 'An error occurred while fetching locations.';
//         console.error('Error fetching locations:', error);
//       }
//     );
//   }
  
// }
