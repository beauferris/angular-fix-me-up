import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { FeaturePresentationalModule } from '@angular-anim/shared/presentational';
import { AboutComponent } from './about/about.component';
import { AppRoutingModule } from './app-routing.module';
import { FeatureAccountSummaryModule } from '@angular-anim/feature/account-summary';
import { SharedStoreModule } from '@angular-anim/shared/store';
import { StoreModule } from '@ngrx/store';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [AppComponent, AboutComponent],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    AppRoutingModule,
    FeaturePresentationalModule,
    FeatureAccountSummaryModule,
    SharedStoreModule,
    StoreModule.forRoot({})
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
