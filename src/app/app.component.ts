import { Component, Input } from '@angular/core';
import { Producto } from './models/producto';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  arrComida: Producto[];
  arrBebida: Producto[];
  arrProductosSeleccionados: Producto[];

  constructor() {

    this.arrProductosSeleccionados = [];

    this.arrComida = [
      new Producto('Pizza', 12, 'https://image.flaticon.com/icons/svg/540/540194.svg'),
      new Producto('Hamburguesa', 16, 'https://image.flaticon.com/icons/svg/540/540212.svg'),
      new Producto('Palomitas', 7, 'https://image.flaticon.com/icons/svg/540/540206.svg'),
      new Producto('Brócoli', 5, 'https://image.flaticon.com/icons/svg/540/540250.svg'),
      new Producto('Pollo', 9, 'https://image.flaticon.com/icons/svg/540/540232.svg'),
      new Producto('Huevos', 8, 'https://image.flaticon.com/icons/svg/540/540209.svg'),
    ];
    this.arrBebida = [
      new Producto('Mojito', 13, 'https://image.flaticon.com/icons/svg/920/920724.svg'),
      new Producto('Bloody Mary', 11, 'https://image.flaticon.com/icons/svg/2445/2445461.svg'),
      new Producto('Sex On The Beach', 9, 'https://image.flaticon.com/icons/svg/1285/1285231.svg'),
    ];
  }

  manejarProductosSeleccionados($event) {
    this.arrProductosSeleccionados.push($event);
  }
}
