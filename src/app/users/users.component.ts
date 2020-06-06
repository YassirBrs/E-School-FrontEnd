import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  users: any;

  constructor(private userservice: UsersService) {}

  ngOnInit(): void {
    this.onGetUsers();
  }
  onGetUsers() {
    this.userservice.getUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (err) => {
        console.error(err);
      }
    );
  }
}
