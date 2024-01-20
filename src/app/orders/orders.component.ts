import { Component, OnInit } from '@angular/core';
import { PurchaseOrderService } from './../_services/purchase-order.service';
import { PurchaseOrder } from '../_models/purchase-order.model';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  purchaseOrders: PurchaseOrder[] = [];
  errorMessage: string = '';

  constructor(private purchaseOrderService: PurchaseOrderService) { }

  ngOnInit(): void {
    this.getPurchaseOrders();
  }

  getPurchaseOrders() {
    this.purchaseOrderService.getAllPurchaseOrders().subscribe(
      (data: any[]) => {
        this.purchaseOrders = data;
      },
      error => {
        this.errorMessage = 'Error fetching purchase orders.';
      }
    );
  }
}
