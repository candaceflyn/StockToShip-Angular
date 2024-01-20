import { Component, OnInit } from '@angular/core';
import { InboundProductService } from './../_services/inbound-product.service';
import { InboundProduct } from './../_models/inbound-product.model';

@Component({
  selector: 'app-inbound-product',
  templateUrl: './inbound-product.component.html',
  styleUrls: ['./inbound-product.component.css']
})
export class InboundProductComponent implements OnInit {
  inboundProducts: InboundProduct[] = [];
  errorMessage: string = '';

  constructor(private inboundProductService: InboundProductService) {}

  ngOnInit(): void {
    this.loadInboundProducts();
  }

  loadInboundProducts() {
    this.inboundProductService.getAllInboundProducts().subscribe(
      (data) => {
        this.inboundProducts = data;
        if (this.inboundProducts.length === 0) {
          this.errorMessage = 'No data to be displayed!';
        }
      },
      (error) => {
        console.error('Error fetching inbound products:', error);
        this.errorMessage = 'Error loading data. Please try again.';
      }
    );
  }
}
