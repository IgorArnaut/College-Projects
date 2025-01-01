import { Component, OnInit } from '@angular/core';
import { Artikal } from '../model/artikal';
import { ArtikalService } from '../artikal.service';

@Component({
  selector: 'app-artikli',
  templateUrl: './artikli.component.html',
  styleUrls: ['./artikli.component.css'],
})
export class ArtikliComponent implements OnInit {
  artikli: Artikal[][];
  artikalClasses: { [key: string]: boolean };
  error: string = '';
  success: string = '';

  constructor(private as: ArtikalService) {}

  ngOnInit(): void {
    this.vratiSveArtikle();
  }

  vratiSveArtikle(): void {
    const width: number = 9;
    const height: number = 6;

    this.as.vratiSve().subscribe({
      next: (data) => {
        this.artikli = [];

        for (let i: number = 0; i < height; i++) {
          this.artikli[i] = [];

          for (let j: number = 0; j < width; j++) {
            let artikal = data[i * width + j];
            this.artikli[i][j] = {
              sifra: artikal.sifra,
              naziv: artikal.naziv,
              cena: artikal.cena,
              kolicina: artikal.kolicina,
              slika: artikal.slika,
            };
          }
        }

        this.success = 'Uspesno dobavljanje liste artikala';
      },
      error: (e) => {
        console.error(e);
      },
    });
  }
}
