import { ChangeDetectionStrategy, Component, signal, ViewEncapsulation } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { PasswordField } from '../../shared/components/password-field/password-field';


@Component({
  selector: 'app-register',
  imports: [MatCardModule, MatButtonModule, MatFormFieldModule, 
    MatInputModule, MatSelectModule, MatIconModule,PasswordField],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
  templateUrl: './register.html',
  styleUrl: './register.scss',
})
export class Register {

}
