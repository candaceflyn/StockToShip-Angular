import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front-page',
  templateUrl: './front-page.component.html',
  styleUrl: './front-page.component.css'
})
export class FrontPageComponent {
  constructor(private router: Router) {}

  navigateTo(destination: string): void {
    this.router.navigate([destination]);
  }
}
