import { Component } from '@angular/core';

/* Router y params */

import {Router, ActivatedRoute, Params} from '@angular/router';

/* Servicio */
import { ProductoService } from '../services/producto.service';

/* Modelo */
import { Producto } from '../models/producto';

@Component({
    selector: 'app-productos-details',
    templateUrl: '../views/productos-details.component.html',
    providers: [ProductoService]
})

export class ProductoDetailsComponent {
    public titulo = "Titulo De Detalles";

    public producto: Producto;

    constructor(
        private _router: Router,
        private _route: ActivatedRoute,
        private _productoService: ProductoService
        
    ) {}

        ngOnInit() {
            console.log('Componente Cargado De Detalles');

            this.getDetailsProducto();
            
        }
        
        /* Para recoger los parametros */
        getDetailsProducto() {
            this._route.params.forEach((params: Params) => {

                let id = params['id'];

                this._productoService.getDetailsProducto(id).subscribe(

                        response => {
                            if(response.code == 202) {
                                this.producto = response.data;
                                
                            }else {
                                
                                this._router.navigate(['/productos-list']);
                            }

                        },
                        error => {
                            console.log(<any>error);
                        }
                    );    
            });
        }
}

