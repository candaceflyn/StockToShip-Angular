import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ItemCodeComponent } from './item-code/item-code.component';
import { InventoryRequisitionComponent } from './inventory-requisition/inventory-requisition.component';
import { CreateBomComponent } from './create-bom/create-bom.component';
import { PurchaseRequisitionComponent } from './purchase-requisition/purchase-requisition.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { GeneratePoComponent } from './purchase-order/generate-po/generate-po.component';
import { MaterialRequisitionComponent } from './purchase-order/material-requisition/material-requisition.component';

import { StockWatchComponent } from './stock-watch/stock-watch.component';
import { PaymentsComponent } from './payments/payments.component';
import { PerformanceComponent } from './performance/performance.component';

const routes: Routes = [
  { path: 'itemcode', component: ItemCodeComponent },
  { path: 'inventory-requisition', component: InventoryRequisitionComponent },
  { path: 'createBOM', component: CreateBomComponent },
  { path: 'purchase-requisition', component: PurchaseRequisitionComponent },
  { path: 'purchase-order', component: PurchaseOrderComponent },
  { path: 'stock-watch', component: StockWatchComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'performance', component: PerformanceComponent },
  { 
    path: 'purchase-order', 
    component: PurchaseOrderComponent, 
    children: [
      { path: 'generatePO', component: GeneratePoComponent },
      { path: 'material-requisition', component: MaterialRequisitionComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StockvaultRoutingModule { }
