import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-equipo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './equipo.component.html',
  styleUrl: './equipo.component.css'
})
export class EquipoComponent {
  @Input() equipo : any;
  @Output() canasta: EventEmitter<any> = new EventEmitter;


  ngOnInit(){

  }

setCanasta(puntos: number, nombreJugador: string): void{

  this.canasta.emit({
    puntos,
    nombreJugador
  })
}

}
function output(): (target: EquipoComponent, propertyKey: "canasta") => void {
  throw new Error('Function not implemented.');
}

