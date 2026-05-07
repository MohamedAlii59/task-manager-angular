import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule, RouterLink],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  private auth = inject(AuthService);
  private router = inject(Router);

  errorMsg = signal('');
  loading = signal(false);

  submit(email: string, password: string) {
    this.errorMsg.set('');
    this.loading.set(true);
    this.auth.login(email, password).subscribe({
      next: (user) => {
        localStorage.setItem('user_email', user.email);
        localStorage.setItem('user_password', user.password);
        this.auth.isLoggedIn.set(true);
        this.loading.set(false);
        this.router.navigate(['/main/home']);
      },
      error: () => {
        this.loading.set(false);
        this.errorMsg.set('Invalid email or password.');
      },
    });
  }
}
