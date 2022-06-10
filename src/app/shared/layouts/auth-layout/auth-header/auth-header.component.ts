import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-auth-header',
  templateUrl: './auth-header.component.html',
  styleUrls: ['./auth-header.component.css'],
})
export class AuthHeaderComponent implements OnInit {
  userDetails: any = {};

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails = () => {
    this.auth.getUserDetails().then((response) => {
      this.userDetails = response;
    });
  };

  logout = () => {
    this.auth.signOut();
  };
}
