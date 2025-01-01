import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-odjava',
  templateUrl: './odjava.component.html',
  styleUrls: ['./odjava.component.css'],
})
export class OdjavaComponent {
  constructor(private as: AuthService, private router: Router) {}

  ngOnInit() {
    this.as.odjaviSe();
    this.router.navigate(['/']);
  }
}
