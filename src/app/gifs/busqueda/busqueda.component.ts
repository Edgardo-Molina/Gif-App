import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { GifService } from '../services/gif.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styles: [],
})
export class BusquedaComponent {
  // @ViewChild('txtBuscar') txtBuscar!: ElementRef<HTMLInputElement>;

  buscarGif: FormControl = new FormControl('');

  constructor(private gifService: GifService) {}

  buscar() {
    // let valor = this.txtBuscar.nativeElement.value;
    let valor = this.buscarGif.value

    this.gifService.buscarGifs(valor)
    console.log(valor);

    this.buscarGif.setValue('')
    // this.txtBuscar.nativeElement.value = '';
  }
}
