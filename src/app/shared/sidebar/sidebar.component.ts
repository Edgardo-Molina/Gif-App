import { Component } from '@angular/core';
import { GifService } from 'src/app/gifs/services/gif.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [],
})
export class SidebarComponent {
  constructor(private gifService: GifService) {}

  get historial() {
    return this.gifService.historial;
  }

  buscar(termino: string) {
    this.gifService.buscarGifs(termino);
  }
}
