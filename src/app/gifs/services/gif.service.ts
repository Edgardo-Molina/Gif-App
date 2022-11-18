import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SearchGifsResponse } from '../interface/gifs.interface';

@Injectable({
  providedIn: 'root',
})
export class GifService {
  private apiKey: string = 'b3is9dW8A1fDEmXoYJ5iCWVqWONFG1Zx';
  baseUrl = 'api.giphy.com/v1/gifs';
  private _historial: string[] = [];

  public resultados: Gif[] = [];

  get historial() {
    return this._historial;
  }

  constructor(private http: HttpClient) {}

  buscarGifs(query: string) {
    query = query.trim().toLowerCase();
    // Si el array incluye la consulta entonces no se inserta en el array
    if (!this._historial.includes(query)) {
      this.historial.unshift(query);

      // Guardar busqueda en el local storage
      // JSJON.stringify(<objeto>) convierte un objeto en string
      localStorage.setItem('historial', JSON.stringify(query));
    }

    this._historial = this._historial.splice(0, 10);

    const params = new HttpParams()
      .set('api_key', this.apiKey)
      .set('limit', '10')
      .set('q', query);

    this.http
      .get<SearchGifsResponse>(
        // `https://${this.baseUrl}/search?api_key=${this.apiKey}&q=${query}&limit=10`
        `https://${this.baseUrl}/search`,
        { params }
      )
      .subscribe((resp) => {
        console.log(resp.data);
        this.resultados = resp.data;
        localStorage.setItem('historial', JSON.stringify(resp));
      });
  }
}
