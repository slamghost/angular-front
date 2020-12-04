import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//import {  } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule, NgbPaginationModule, NgbAlertModule, NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap'
import { ReservationComponent } from './reservation/reservation.component'
import { ReservationService } from './reservation/reservation.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common'
import { CreateReservationComponent } from './reservation/create/create.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RatingComponent } from './components/rating/rating.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';





@NgModule({
  declarations: [
    AppComponent,
    ReservationComponent,
    HeaderComponent,
    FooterComponent,
    CreateReservationComponent,
    RatingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    CommonModule,
    NgbPaginationModule,
    NgbAlertModule,
    FormsModule,
    ReactiveFormsModule,
    NgbDatepickerModule,
    CKEditorModule
  ],
  providers: [
    ReservationService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
