import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class PrevisionService {
  private http = inject(HttpClient);

  // Fournir l'URL réelle du microservice après validation du contrat REST.
  getAll<T>(url: string) {
    return this.http.get<T[]>(url);
  }
}
