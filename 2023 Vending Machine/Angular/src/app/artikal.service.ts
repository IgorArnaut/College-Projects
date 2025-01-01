import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Artikal } from './model/artikal';

const baseUrl: string = 'http://localhost:8080/api/artikli';

@Injectable({
  providedIn: 'root',
})
export class ArtikalService {
  novac: number = 0;

  constructor(private http: HttpClient) {}

  vratiSve() {
    return this.http.get<Artikal[]>(baseUrl);
  }

  // Finds product by its id
  vratiJedan(sifra: string) {
    return this.http.get<Artikal>(`${baseUrl}/${sifra}`);
  }

  // Updates amount of product
  azuriraj(sifra: string, data: any) {
    return this.http.put(`${baseUrl}/${sifra}`, data);
  }
}
