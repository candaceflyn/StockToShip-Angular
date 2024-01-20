import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PurchaseOrderService {
  private baseUrl = 'http://localhost:8010/api/purchase-orders';

  constructor(private http: HttpClient) { }

  getAllPurchaseOrders(): Observable<any> {
    return this.http.get(`${this.baseUrl}/all`);
  }

}
