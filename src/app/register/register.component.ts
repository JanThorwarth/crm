import { Component } from '@angular/core';
import { Router, RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-register',
  imports: [RouterLink, RouterOutlet, RouterModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  showCreate: boolean = false;
  showConfirm: boolean = false;


  switchEye(input: string) {
    input === 'create' ?  (this.showCreate = !this.showCreate) : (this.showConfirm = !this.showConfirm);

  }
}
