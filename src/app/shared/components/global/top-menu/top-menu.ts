import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-top-menu',
  imports: [MatToolbarModule, MatButtonModule, MatIconModule, RouterModule],
  templateUrl: './top-menu.html',
  styleUrl: './top-menu.scss',
})
export class TopMenu {
  appLogo = 'assets/logo-agendador2.png';
}
