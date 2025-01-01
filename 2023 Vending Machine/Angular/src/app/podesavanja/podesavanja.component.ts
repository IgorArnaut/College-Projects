import { Component } from '@angular/core';
import { ArtikalService } from '../artikal.service';
import { Artikal } from '../model/artikal';

@Component({
  selector: 'app-podesavanja',
  templateUrl: './podesavanja.component.html',
  styleUrls: ['./podesavanja.component.css'],
})
export class PodesavanjaComponent {
  artikli: Artikal[];
  artikalClasses: { [key: string]: boolean };
  success: string = '';

  constructor(private as: ArtikalService) {}

  ngOnInit(): void {
    this.vratiSveArtikle();
  }

  vratiSveArtikle(): void {
    this.as.vratiSve().subscribe({
      next: (data) => {
        this.artikli = data;
        this.success = 'Uspesno dobavljanje liste';
      },
      error: (e) => {
        console.error(e);
      },
    });
  }

  // Resets the amount of product
  dopuniArtikal(artikal: Artikal): void {
    const data = {
      sifra: artikal.sifra,
      naziv: artikal.naziv,
      cena: artikal.cena,
      kolicina: 10,
      slika: artikal.slika,
    };

    this.as.azuriraj(artikal.sifra, data).subscribe({
      next: () => {
        this.success = 'Uspesno azuriranje artikla';
      },
      error: (e) => {
        console.error(e);
      },
    });
  }
}
