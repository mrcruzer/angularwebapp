import { Component } from '@angular/core';

@Component({
    selector: 'app-error',
    templateUrl: '../views/home.component.html'
})

export class ErrorComponent {
    public titulo: string;

    constructor() {
        this.titulo = "ERROR, La Pagina Web No Ha Cargado";
    }

    ngOnInit()   {
        console.log('ERROR');
        
    }
}