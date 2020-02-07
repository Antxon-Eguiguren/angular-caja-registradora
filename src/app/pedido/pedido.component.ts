import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {

  @Input() productosSeleccionados: Producto[];

  constructor() { }

  ngOnInit() {
  }

  calcularTotal() {
    let total = 0;
    for (const producto of this.productosSeleccionados) {
      console.log(producto.precio);
      total += producto.precio;
    }
    return total;
  }

}
