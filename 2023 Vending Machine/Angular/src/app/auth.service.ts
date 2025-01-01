import { Injectable } from '@angular/core';
import { Observable, delay, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  prijavljen: boolean = false;
  url: string | null = null;

  prijaviSe(korIme: string, lozinka: string): Observable<boolean> {
    this.prijavljen = korIme == 'admin' && lozinka == 'admin';
    localStorage.setItem('prijavljen', this.prijavljen ? 'true' : 'false');
    return of(this.prijavljen).pipe(
      delay(1000),
      tap((val) => {
        console.log(`Uspensna prijava: ${val}`);
      })
    );
  }

  odjaviSe(): void {
    this.prijavljen = false;
    localStorage.removeItem('prijavljen');
  }
}
