import { Component } from '@angular/core';
import {Router, ActivatedRoute, Params } from '@angular/router';

import {ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto';

@Component({
    selector: 'app-productos-add',
    templateUrl: '../views/productos-add.component.html',
    providers: [ ProductoService ]
})

export class ProductosAddComponent {
    public titulo: string;
    public producto: Producto;

    /* esto se hace en el constructor */
    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productoService: ProductoService
    ) {
        this.titulo = 'Crear Algo Nuevo';
        this.producto = new Producto (0,'','',0,'');
    }

    ngOnInit() {
        console.log('Componente De Añadir Cargado');
        
    }

    onSubmit(){
        console.log(this.producto);

        this._productoService.addProducto(this.producto).subscribe(
            
            response => {
                if(response.code==200) {

                    this._router.navigate(['/productos-list']);

                }else {
                    console.log(response);
                }
                
            }, 
            error => {
                console.log(<any>error);
            }
            );

            
        }
    }