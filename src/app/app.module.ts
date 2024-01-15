import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormBuilder, FormGroup, Validators, FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { OrdersComponent } from './orders/orders.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ContactComponent } from './contact/contact.component';
import { WareyougoComponent } from './wareyougo/wareyougo.component';
import { CarodriveComponent } from './carodrive/carodrive.component';
import { StockvaultComponent } from './stockvault/stockvault.component';
import { InboundRequisitionComponent } from './inbound-requisition/inbound-requisition.component';
import { LocationAnalyzerComponent } from './location-analyzer/location-analyzer.component';
import { OutboundRequisitionComponent } from './outbound-requisition/outbound-requisition.component';
import { StampingComponent } from './stamping/stamping.component';
import { BlankingComponent } from './blanking/blanking.component';
import { WeldingComponent } from './welding/welding.component';
import { PaintingComponent } from './painting/painting.component';
import { AssemblingComponent } from './assembling/assembling.component';
import { StockvaultModule } from './stockvault/stockvault.module';
import { StockToShipComponent } from './stock-to-ship/stock-to-ship.component';
import { NavLoginComponent } from './nav-login/nav-login.component';
import { FrontPageComponent } from './front-page/front-page.component';
import { MyAccountComponent } from './my-account/my-account.component';

// const routes: Routes = [
//   { path: '', redirectTo: '/home', pathMatch: 'full' },
//   { path: 'home', component: HomeComponent },
//   { path: 'products', component: ProductsComponent },
//   { path: 'orders', component: OrdersComponent },
//   { path: 'shipping', component: ShippingComponent },
//   { path: 'contact', component: ContactComponent },
//   { path: 'stockvault', loadChildren: () => import('./stockvault/stockvault.module').then(m => m.StockvaultModule) },

// ];
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    NavBarComponent,
    HomeComponent,
    ProductsComponent,
    OrdersComponent,
    ShippingComponent,
    ContactComponent,
    WareyougoComponent,
    CarodriveComponent,
    StockvaultComponent,
    InboundRequisitionComponent,
    LocationAnalyzerComponent,
    OutboundRequisitionComponent,
    StampingComponent,
    BlankingComponent,
    WeldingComponent,
    PaintingComponent,
    AssemblingComponent,
    StockToShipComponent,
    NavLoginComponent,
    FrontPageComponent,
    MyAccountComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    //RouterModule.forRoot(routes),
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }