import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-topscore',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './topscore.component.html',
  styleUrl: './topscore.component.css'
})
export class TopscoreComponent {
  @Input() equipoLocal: any;
  @Input() equipoVisitante: any;
  jugadores: any = [];

  ngOnInit(): void{
    this.jugadores = [...this.equipoLocal.jugadores,...this.equipoVisitante.jugadores]
  }

  ngAfterContentChecked(){
    this.sortJugadores();

  }


  sortJugadores(){
    this.jugadores.sort((a: any, b: any)=>{
      return (b.puntos - a.puntos);
    })
  }

}
