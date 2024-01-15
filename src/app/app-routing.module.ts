import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WareyougoComponent } from './wareyougo/wareyougo.component';
import { CarodriveComponent } from './carodrive/carodrive.component';
import { StockvaultComponent } from './stockvault/stockvault.component';
import { InboundRequisitionComponent } from './inbound-requisition/inbound-requisition.component';
import { LocationAnalyzerComponent } from './location-analyzer/location-analyzer.component';
import { OutboundRequisitionComponent } from './outbound-requisition/outbound-requisition.component';
import { ShippingComponent } from './shipping/shipping.component';
import { StampingComponent } from './stamping/stamping.component'; // Import your components
import { BlankingComponent } from './blanking/blanking.component';
import { WeldingComponent } from './welding/welding.component';
import { PaintingComponent } from './painting/painting.component';
import { AssemblingComponent } from './assembling/assembling.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FrontPageComponent } from './front-page/front-page.component';

import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { ContactComponent } from './contact/contact.component';
import { MyAccountComponent } from './my-account/my-account.component';
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  // { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'nav-bar', component: NavBarComponent },
  { path: 'home', component: HomeComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'orders', component: OrdersComponent },
  { path: 'shipping', component: ShippingComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'wareyougo', component: WareyougoComponent },
  { path: 'inbound-requisition', component: InboundRequisitionComponent },
  { path: 'location-analyzer', component: LocationAnalyzerComponent },
  { path: 'outbound-requisition', component: OutboundRequisitionComponent },
  { path: 'shipping-status', component: ShippingComponent },
  { path: 'carodrive', component: CarodriveComponent },
  { path: 'stamping', component: StampingComponent },
  { path: 'blanking', component: BlankingComponent },
  { path: 'welding', component: WeldingComponent },
  { path: 'painting', component: PaintingComponent },
  { path: 'assembling', component: AssemblingComponent },

  { path: 'stockvault', component: StockvaultComponent },
  { path: 'stockvault', loadChildren: () => import('./stockvault/stockvault.module').then(m => m.StockvaultModule) },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'home', component: HomeComponent }, 
  { path: 'front-page', component: FrontPageComponent }, 
  { path: 'my-account', component: MyAccountComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
