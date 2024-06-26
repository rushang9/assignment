import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  onRegister(): void {
    if (this.authService.register({ username: this.username, password: this.password })) {
      this.router.navigate(['login']);
    } else {
      alert('Registration failed');
    }
  }
}
