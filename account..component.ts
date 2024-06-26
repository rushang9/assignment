import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-account',
  templateUrl: 'account-management-app/src/app/pages/account./account..component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  user: any;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.user = this.authService.getUser();
  }

  onLogout(): void {
    this.authService.logout();
    this.router.navigate(['login']);
  }
}
