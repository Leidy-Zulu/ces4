import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { RouterModule } from "@angular/router";
import { routeConfig } from './routes';
import { HttpModule } from '@angular/http';
import { AuthGuard } from './auth-guard/auth-guard.guard';
import { Oauthv2TokenHandlerService } from './oauthv2-token-handler/oauthv2-token-handler.service';
import { RestauranteServicesModule } from './restaurante-services/restaurante-services.module';
import 'hammerjs';
import { AppComponent } from './app.component';
import { MainWindowComponent } from './main-window/main-window.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { OrderComponent } from './order/order.component';
import { ContactComponent } from './contact/contact.component';
import { DialogOrder } from './contact-list/contact-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OrderListComponent } from './order-list/order-list.component';


@NgModule({
  declarations: [
    AppComponent,
    MainWindowComponent,
    ContactListComponent,
    OrderComponent,
    ContactComponent,
    DialogOrder,
    OrderListComponent
  
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routeConfig, {useHash: true}),
    MaterialModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule
    


  ],
  entryComponents:[
    DialogOrder
  ],
  providers: [AuthGuard, Oauthv2TokenHandlerService, RestauranteServicesModule ],
  bootstrap: [AppComponent]
})
export class AppModule { }
