import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { RouterLink } from '@angular/router';

function checkSpace(control: AbstractControl): ValidationErrors | null {
  return control.value.includes(' ') ? { nospace: true } : null;
}
function aboveEighteen(control: AbstractControl): ValidationErrors | null {
  const inputDate = new Date(control.value);
  const today = new Date();

  const eighteenYearsAgo = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());

  return inputDate <= eighteenYearsAgo ? null : { underAge: true };
}
function noMatchPass(formGroup: AbstractControl): ValidationErrors | null {
  const password = formGroup.get('password')?.value;
  const confirm = formGroup.get('confirm')?.value;
  return password !== confirm ? { noMatch: true } : null;
}
@Component({
  selector: 'app-signup',
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './signup.html',
  styleUrl: './signup.css',
})
export class Signup {
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
      confirm: new FormControl('', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(32),
      ]),
    },
    {
      validators: [noMatchPass],
    },
  );
}
