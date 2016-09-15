import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { routing } from './app.routing';
import { AppComponent }  from './app.component';
import { LegislatorsModule } from './legislators/legislators.module';
import { HomeModule } from './home/home.module';
import { BillsModule } from './bills/bills.module';
import { MainNavComponent } from './shared/navigation/main-nav/main-nav.component';
import { VotesModule } from './votes/votes.module';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    routing,
    HomeModule,
    LegislatorsModule,
    BillsModule,
    VotesModule,
    ChartsModule
  ],
  declarations: [
    AppComponent,
    MainNavComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
