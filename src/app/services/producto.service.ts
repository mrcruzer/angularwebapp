import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders} from '@angular/common/http';

/* import 'rxjs/add/operator/map';

import 'rxjs/add/operator/take';

import { map } from "rxjs/operators"; */

import { Observable } from 'rxjs';

import { Producto } from '../models/producto';

import { GLOBAL } from './global';

@Injectable() 
    export class ProductoService {
        public url: string;

        constructor(
            public _http: HttpClient
        ) {
            this.url = GLOBAL.url;
        }

        /* obtener todos los datos */
    getProducto(): Observable<any> {
        return this._http.get(this.url + 'productos');
       
    }

    /* Vamos A recibir el id como parametro y obtenemos un solo producto por id*/
    getDetailsProducto(id): Observable<any> {

        return this._http.get(this.url + 'productos/' + id);
    }
 
        /* Lllamada Al Backend */
    addProducto(producto: Producto): Observable<any>{
        let jason = JSON.stringify(producto);
        /* Variable que guarda el objeto a json */
        let params = 'json='+ jason;

        /* Establecemos las cabeceras */
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

        return this._http.post(this.url +'/productos', params, {headers: headers});
    }

    /* Editar cosas */
    editProducto(id, producto: Producto): Observable<any> {
        let kruger = JSON.stringify(producto);

        let params = 'json='+ kruger;

        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');

        return this._http.post(this.url+'update/'+ id, params, {headers: headers});
    }

    /* Borrar cosas */
    deleteProducto(id): Observable<any> {
        return this._http.get(this.url+'delete/'+id);
    }
}