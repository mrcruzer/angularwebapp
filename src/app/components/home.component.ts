import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: '../views/home.component.html'
})

export class HomeComponent{
    public titulo: string;

    constructor() {
        this.titulo = 'Pagina Inicial';
    }

    ngOnInit() {
        console.log('Se ha cargado el componente Principal');
        
    }
}