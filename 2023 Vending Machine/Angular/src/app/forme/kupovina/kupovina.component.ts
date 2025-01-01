import { Component, Input, OnInit } from '@angular/core';
import { Artikal } from '../../model/artikal';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ArtikalService } from '../../artikal.service';

@Component({
  selector: 'app-kupovina',
  templateUrl: './kupovina.component.html',
  styleUrls: ['./kupovina.component.css'],
})
export class KupovinaComponent implements OnInit {
  kupovinaForma: FormGroup;
  ukupno: number = 0;
  kliknut: boolean = false;
  jeNedovoljno: boolean = false;

  constructor(private fb: FormBuilder, private as: ArtikalService) {}

  ngOnInit(): void {
    this.kupovinaForma = this.fb.group({
      sifra: ['', [Validators.required]],
      novac: [
        '',
        [Validators.required, Validators.min(10), Validators.max(200)],
      ],
    });
  }

  ubaciNovac(): void {
    const novac: number = this.kupovinaForma.get('novac')?.value;
    this.ukupno += novac;
    console.log(`novac: ${this.novac}`);
  }

  plati(sifra: string): void {
    this.as.vratiJedan(sifra).subscribe({
      next: (data) => {
        console.log('Pronadjen artikal.');
        this.jeNedovoljno = this.ukupno < data.cena;

        if (!this.jeNedovoljno) {
          this.as.novac += this.ukupno;
          this.ukupno = 0;
          if (data.kolicina - 1 >= 0) data.kolicina--;

          this.as.azuriraj(sifra, data).subscribe({
            next: () => {
              console.log('Azuriran arikal.');
            },
            error: (e) => {
              console.error(e);
            },
          });
        }
      },
      error: (e) => {
        console.error(e);
      },
    });
  }

  kupi(): void {
    const sifra: string = this.sifra?.value;
    this.plati(sifra);
  }

  get novac() {
    return this.kupovinaForma.get('novac');
  }

  get sifra() {
    return this.kupovinaForma.get('sifra');
  }
}
