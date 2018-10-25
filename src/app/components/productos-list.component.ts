import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import { ProductoService } from '../services/producto.service';
import {Producto} from '../models/producto';
 

@Component({
    selector: 'app-productos-list',
    templateUrl: '../views/productos-list.component.html',
    providers: [ProductoService]

})

export class ProductosListComponent {
    public titulo: string;

  /*   public confirmame; */
     /* Algo para confirmar */

    /* Esto es un array del modelo producto */
    public productos: Producto[];

    constructor(
       private _route: ActivatedRoute,
       private _router: Router,
       private _productoService: ProductoService
    ) {
        this.titulo = 'Lista De Productos';
    }

    ngOnInit() {
        console.log('Productos Cargado');

        this.getProductos();

        //this.confirmame = null;
    }

    /* Metodo para obtener */
    getProductos() {

        this._productoService.getProducto().subscribe(
            result => {
                if (result.code != 200) {
                    console.log(result);
                } else {
                    this.productos = result.data;
                }
            },
            error => {
                console.log(<any>error);
            }
        );
    }

   
    

    borraloCarajo(id) {
        //this.confirmame = id;
    }

    cancelaloCarajo() {
        //this.confirmame = null;
        /* Pasara la propiedad vacia */
    }

        /* Metodo Para Borrar */
    onDeleteProducto(id) {

        this._productoService.deleteProducto(id).subscribe(
            response => {
                if(response.code == 200) {
                    this.getProductos();

                }else {
                    alert('Error');
                }
            },
            error => {
                console.log(<any>error);
            }
        );
        
    }

}
