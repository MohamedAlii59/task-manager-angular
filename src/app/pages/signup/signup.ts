import { Component, inject, signal } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { RouterLink, Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

function checkSpace(control: AbstractControl): ValidationErrors | null {
  return control.value?.includes(' ') ? { nospace: true } : null;
}

function aboveEighteen(control: AbstractControl): ValidationErrors | null {
  const inputDate = new Date(control.value);
  const today = new Date();
  const limit = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
  return inputDate <= limit ? null : { underAge: true };
}

function noMatchPass(fg: AbstractControl): ValidationErrors | null {
  const pw = fg.get('password')?.value;
  const cf = fg.get('confirm')?.value;
  return pw !== cf ? { noMatch: true } : null;
}

@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
  private auth = inject(AuthService);
  private router = inject(Router);

  errorMsg = signal('');
  successMsg = signal('');
  loading = signal(false);

  form = new FormGroup(
    {
      username: new FormControl('', [Validators.required, Validators.minLength(7), checkSpace]),
      email: new FormControl('', [Validators.required, Validators.email]),
      bdate: new FormControl('', [Validators.required, aboveEighteen]),
      password: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(32),
      ]),
      confirm: new FormControl('', [Validators.required]),
    },
    { validators: [noMatchPass] }
  );

  submit() {
    this.form.markAllAsTouched();
    if (this.form.invalid) return;

    this.loading.set(true);
    this.errorMsg.set('');

    const { username, email, bdate, password } = this.form.value;
    this.auth
      .signup({ username: username!, email: email!, bdate: bdate!, password: password! })
      .subscribe({
        next: () => {
          this.loading.set(false);
          this.router.navigate(['/auth/login']);
        },
        error: () => {
          this.loading.set(false);
          this.errorMsg.set('Signup failed. Please try again.');
        },
      });
  }
}
