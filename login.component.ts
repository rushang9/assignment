import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onLogin(): void {
    if (this.authService.login({ username: this.username, password: this.password })) {
      this.router.navigate(['account']);
    } else {
      alert('Login failed');
    }
  }
}
