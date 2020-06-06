import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RoomsComponent } from './rooms/rooms.component';
import { NewRoomComponent } from './new-room/new-room.component';
import { EditRoomComponent } from './edit-room/edit-room.component';
import { EditBookingComponent } from './edit-booking/edit-booking.component';
import { UsersComponent } from './users/users.component';
import { BookingsComponent } from './bookings/bookings.component';
import { NewBookingComponent } from './new-booking/new-booking.component';

const routes: Routes = [
  {
    path: 'rooms',
    component: RoomsComponent,
  },
  {
    path: 'newRoom',
    component: NewRoomComponent,
  },
  {
    path: 'newBooking',
    component: NewBookingComponent,
  },
  {
    path: 'editRoom/:id',
    component: EditRoomComponent,
  },
  {
    path: 'editBooking/:id',
    component: EditBookingComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
  },
  {
    path: 'bookings',
    component: BookingsComponent,
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
