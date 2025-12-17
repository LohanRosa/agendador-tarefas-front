import { ChangeDetectionStrategy, Component, Input, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-password-field',
  imports: [MatFormFieldModule, MatInputModule, MatButtonModule, MatIconModule,ReactiveFormsModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './password-field.html',
  styleUrl: './password-field.scss',
})


export class PasswordField {
  hide = signal(true);

  @Input({required: true}) control !: FormControl

   get passwordErros(): string | null {
    const passwordControl = this.control;
    if (passwordControl?.hasError('required')) return 'O cadastro de senha é obrigatória';
    if (passwordControl?.hasError('minlength')) return 'Use uma senha no mínimo de 6 dígitos';
    if (passwordControl?.hasError('pattern')) return 'A senha deve conter letra maiúscula, minúscula, número e caractere especial';
    return null;
  }

  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }
}
