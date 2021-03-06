import { Component, OnInit } from '@angular/core';
import { BookingsService } from '../../services/bookings.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.component.html',
  styleUrls: ['./bookings.component.css'],
  animations: [],
})
export class BookingsComponent implements OnInit {
  rooms: any;
  date: string;
  users: any;
  bookings: any;
  bookingForm: FormGroup;
  formBuilder: FormBuilder;
  constructor(
    private boukingService: BookingsService,
    private toastr: ToastrService
  ) {}
  ngOnInit(): void {
    this.onGetBookings();
    // this.bookingForm = this.formBuilder.group({
    //   datee: '',
    // });
  }
  onGetBookings() {
    this.boukingService.getBookings().subscribe(
      (data) => {
        this.bookings = data;
      },
      (err) => {
        console.error(err);
      }
    );
    // this.boukingService.getBookings().subscribe(
    //   (data) => {
    //     this.bookings = data;
    //   },
    //   (err) => {
    //     console.error(err);
    //   }
    // );
  }
  onDeleteBoonking(id: number): void {
    this.onGetBookings();
    this.boukingService.deleteBooking(id).subscribe(
      (data) => {
        this.toastr.success('Booking Deleted Successfully');
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
