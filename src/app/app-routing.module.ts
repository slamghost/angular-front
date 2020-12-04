import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateReservationComponent } from './reservation/create/create.component';
import { ReservationComponent } from './reservation/reservation.component';

const routes: Routes = [
  {
    path: '',
    component: ReservationComponent
  },

  {
    path: 'create-reservation',
    component: CreateReservationComponent
  },
  {
    path:'edit-reservation/:id',
    component: CreateReservationComponent
  }
 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
