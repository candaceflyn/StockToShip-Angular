// carodrive.component.ts
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-carodrive',
  templateUrl: './carodrive.component.html',
  styleUrls: ['./carodrive.component.css'],
})
export class CarodriveComponent {
  constructor(private router: Router) {}

  showDetails(event: any) {
    const stage = event.target.value;
    // Redirect to the corresponding Angular route for the selected stage
    this.router.navigate([`/${stage.toLowerCase()}`]);
  }
}
