import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Producto } from '../models/producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrls: ['./lista-productos.component.css']
})
export class ListaProductosComponent implements OnInit {

  @Input() productos: Producto[];
  @Input() titulo: string;

  @Output() emitirProducto: EventEmitter<Producto>;

  constructor() {
    this.emitirProducto = new EventEmitter();
  }

  ngOnInit() {
  }

  manejarClick(producto) {
    this.emitirProducto.emit(producto);
  }
}
