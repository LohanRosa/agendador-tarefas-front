import { Component, signal, ViewEncapsulation } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { PasswordField } from '../../shared/components/password-field/password-field';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-register',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatIconModule,
    PasswordField,
    ReactiveFormsModule,
  ],
  templateUrl: './register.html',
  styleUrl: './register.scss',
  encapsulation: ViewEncapsulation.None,
})
export class Register {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form = this.formBuilder.group({
      fullName: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(6),
          Validators.pattern(/[A-Z]/),
          Validators.pattern(/[a-z]/),
          Validators.pattern(/[0-9]/),
          Validators.pattern(/[@$!%*?$]/),
          Validators.pattern(/^\S*$/)
        ],
      ],
    });
  }

  get passwordControl(): FormControl {
    return this.form.get('password') as FormControl;
  }

  get fullNameErros(): string | null {
    const fullNameControl = this.form.get('fullName');
    if (fullNameControl?.hasError('required')) return 'O nome completo é obrigatório';
    if (fullNameControl?.hasError('minlength')) return 'Cadastre um nome com mais de 3 letras';
    return null;
  }

  get emailErros(): string | null {
    const emailControl = this.form.get('email');
    if (emailControl?.hasError('required')) return 'O email é obrigatório';
    if (emailControl?.hasError('email')) return 'Este email é inválido, digite um valido';
    return null;
  }

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    console.log(this.form.value);
  }
}
