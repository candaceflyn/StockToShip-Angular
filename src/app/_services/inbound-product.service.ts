import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { InboundProduct } from './../_models/inbound-product.model';

@Injectable({
  providedIn: 'root'
})
export class InboundProductService {
  private baseUrl = 'http://localhost:8010/api/inbound-products';

  constructor(private http: HttpClient) {}

  getAllInboundProducts(): Observable<InboundProduct[]> {
    return this.http.get<InboundProduct[]>(`${this.baseUrl}/all`);
  }

}
