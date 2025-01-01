import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prijava',
  templateUrl: './prijava.component.html',
  styleUrls: ['./prijava.component.css'],
})
export class PrijavaComponent {
  prijavaForma: FormGroup;
  greska: boolean = false;

  constructor(
    private fb: FormBuilder,
    private as: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.prijavaForma = this.fb.group({
      korIme: ['', Validators.required],
      lozinka: ['', Validators.required],
    });
  }

  prijaviSe(): void {
    const korIme = this.korIme?.value;
    const lozinka = this.lozinka?.value;

    if (korIme != '' && lozinka != '') {
      this.as.prijaviSe(korIme, lozinka).subscribe((data) => {
        if (data) {
          this.greska = false;
          this.router.navigate(['/podesavanja']);
        } else this.greska = true;
      });
    }
  }

  get korIme() {
    return this.prijavaForma.get('korIme');
  }
  get lozinka() {
    return this.prijavaForma.get('lozinka');
  }
}
