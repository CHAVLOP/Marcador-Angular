import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipoComponent } from "../equipo/equipo.component";
import { TopscoreComponent } from "../topscore/topscore.component";

@Component({
    selector: 'app-marcador',
    standalone: true,
    templateUrl: './marcador.component.html',
    styleUrl: './marcador.component.css',
    imports: [CommonModule, EquipoComponent, TopscoreComponent]
})
export class MarcadorComponent {

  PuntosLocales: Number = 0;
  PuntosVisitante: Number = 0;


  equipoLocal: any ={
    nombre: 'lakers',
    logo : '/assets/img/LAL.svg',
    jugadores: [
      {nombre: 'Isaiah Thomas',puntos: 0, imagen: '/assets/img/thomas.png'},
      {nombre: 'Kyyle Kuzma',puntos: 0, imagen: '/assets/img/kuzma.png'},
      {nombre: 'Julius Randle',puntos: 0, imagen: '/assets/img/randle.png'},
      {nombre: 'Brandom Igram',puntos: 0, imagen: '/assets/img/ingram.png'},
      {nombre: 'Brook Lopez',puntos: 0, imagen: '/assets/img/lopez.png'},
    ]
  }
  equipoVisitante: any ={
    nombre: 'celtics',
    logo : '/assets/img/BOS.svg',
    jugadores: [
      {nombre: 'Kaandem Allen',puntos: 0, imagen: '/assets/img/allen.png'},
      {nombre: 'Aaron Bynes',puntos: 0, imagen: '/assets/img/bynes.png'},
      {nombre: 'Jabari Bird',puntos: 0, imagen: '/assets/img/bird.png'},
      {nombre: 'Jaylen Bronwn',puntos: 0, imagen: '/assets/img/brown.png'},
      {nombre: 'Jonathan Gibson',puntos: 0, imagen: '/assets/img/gibson.png'},
    ]
  }

getCanastaLocal($event: any): void{
  this.PuntosLocales += $event.puntos;
  this.equipoLocal.jugadores.forEach((elem: any) => {
    if(elem.nombre === $event.nombreJugador){
      elem.puntos += $event.puntos
    }

  });
}

getCanastaVisitante($event: any): void{
  this.PuntosVisitante += $event.puntos;
  this.equipoVisitante.jugadores.forEach((elem: any) => {
    if(elem.nombre === $event.nombreJugador){
      elem.puntos += $event.puntos
    }

  });
}
}
