import { Component } from '@angular/core';

import {Router, ActivatedRoute, Params } from '@angular/router';

import { ProductoService } from '../services/producto.service';

import { Producto } from '../models/producto';




@Component({
    selector: 'app-productos-edit',
    templateUrl: '../views/productos-add.component.html',
    providers: [ProductoService]
})

export class ProductoEditComponent {
     public titulo: string;
     public producto: Producto;
     
     constructor(
         private _router : Router,
         private _route: ActivatedRoute,
         private _productoService: ProductoService
     ) {
        this.titulo = 'Componente De Editar Producto';
         this.producto = new Producto(0, '', '', 0, '');
     }

     ngOnInit()  {

         this.getDetailsProducto();
         
     }

    onSubmit() {
        this._route.params.forEach((params: Params) => {

            let id = params['id'];

            this._productoService.editProducto(id, this.producto).subscribe(

                response => {
                    if (response.code == 200) {
                        this._router.navigate(['/productos', id]);

                    } else {
                        console.log(response);
                    }

                },
                error => {
                    console.log(<any>error);
                }
            ) 
        });


    }



      /* estoy reutilisando este metodo */
    getDetailsProducto() {
        this._route.params.forEach((params: Params) => {

            let id = params['id'];

            this._productoService.getDetailsProducto(id).subscribe(

                response => {
                    if (response.code == 202) {
                        this.producto = response.data;

                    } else {

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