import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ItemType } from '../stockvault/item-code/item-type.model';

@Injectable({
  providedIn: 'root',
})
export class ItemTypeService {
  private baseUrl = 'http://localhost:8010/api/item-types';

  constructor(private http: HttpClient) {}

  checkItemCodeAvailability(itemCode: string): Observable<any> {
    // const itemCodePattern = /^ITM\d{3,4}$/;

    // if (!itemCodePattern.test(itemCode)) {
    //   alert('Item code not available');
    //   // If the item code doesn't match the pattern, return an observable with the validation result
    //   return new Observable(observer => {
    //     observer.next({ available: false });
    //     observer.complete();
    //   });
    // } 
    const url = `${this.baseUrl}/checkItemCodeAvailability/${itemCode}`;
    return this.http.get(url);
  }

  saveItemT(itemType: any): Observable<any> {
    const url = `${this.baseUrl}/saveItemType`;
    return this.http.post(url, itemType);
  }
}
