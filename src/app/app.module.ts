import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { TextComponent } from './text/text.component';
import { FootComponent } from './foot/foot.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { StocksComponent } from './stocks/stocks.component';
import { MutualfundsComponent } from './mutualfunds/mutualfunds.component';
import { DigitalGoldComponent } from './digital-gold/digital-gold.component';
import { IPOsComponent } from './ipos/ipos.component';
import { FutureOptionComponent } from './future-option/future-option.component';
import { NoComponent } from './no/no.component';


 const appRoutes:Routes=[
  {path:'',component:StocksComponent},
  {path:'mutualfunds',component: MutualfundsComponent},
  {path:'digitalgold',component: DigitalGoldComponent},
  {path:'ipos',component:IPOsComponent},
  {path:'futureoption',component:FutureOptionComponent},
]
@NgModule({
  declarations: [
    AppComponent,
    ContainerComponent,
    TextComponent,
    FootComponent,
    HomeComponent,
    FooterComponent,
    StocksComponent,
    MutualfundsComponent,
    DigitalGoldComponent,
    IPOsComponent,
    FutureOptionComponent,
    NoComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
