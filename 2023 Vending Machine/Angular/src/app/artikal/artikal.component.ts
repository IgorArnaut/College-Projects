import { Component, Input } from '@angular/core';
import { Artikal } from '../model/artikal';

@Component({
  selector: 'app-artikal',
  templateUrl: './artikal.component.html',
  styleUrls: ['./artikal.component.css'],
})
export class ArtikalComponent {
  @Input() artikal: Artikal;

  postoji(): boolean {
    return this.artikal.kolicina > 0;
  }
}
