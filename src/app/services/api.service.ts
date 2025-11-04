import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // 1. Importa o HttpClient
import { Observable } from 'rxjs'; // 2. Importa o Observable (para "observar" a resposta da API)

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  // 3. Define a URL da API que vamos usar
  private apiUrl = 'https://fakestoreapi.com/products';

  // 4. Injeta o HttpClient no construtor (Angular faz isso automaticamente)
  constructor(private http: HttpClient) { }

  /**
   * 5. Cria o método GET
   * Este método vai buscar os produtos e retornar um "Observable"
   * que conterá a lista de produtos (Array)
   */
  getProdutos(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  // Bônus: Método para buscar UM produto por ID (será útil para o Integrante B)
  getProduto(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }
}