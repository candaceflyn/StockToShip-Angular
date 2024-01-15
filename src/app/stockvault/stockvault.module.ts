import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StockvaultRoutingModule } from './stockvault-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { ItemCodeComponent } from './item-code/item-code.component';
import { InventoryRequisitionComponent } from './inventory-requisition/inventory-requisition.component';
import { CreateBomComponent } from './create-bom/create-bom.component';
import { PurchaseRequisitionComponent } from './purchase-requisition/purchase-requisition.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { StockWatchComponent } from './stock-watch/stock-watch.component';
import { PaymentsComponent } from './payments/payments.component';
import { PerformanceComponent } from './performance/performance.component';
import { GeneratePoComponent } from './purchase-order/generate-po/generate-po.component';
import { MaterialRequisitionComponent } from './purchase-order/material-requisition/material-requisition.component';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ItemCodeComponent,
    InventoryRequisitionComponent,
    CreateBomComponent,
    PurchaseRequisitionComponent,
    PurchaseOrderComponent,
    StockWatchComponent,
    PaymentsComponent,
    PerformanceComponent,
    GeneratePoComponent,
    MaterialRequisitionComponent
  ],
  imports: [
    CommonModule,
    StockvaultRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ]
})
export class StockvaultModule { }
