import { Component, OnInit } from '@angular/core';
import { HabilidadesService } from 'src/app/servicios/habilidades/habilidades.service';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.css']
})
export class HabilidadesComponent implements OnInit {

  habilidades:any;

  constructor( private habilidadesService:HabilidadesService ) { }

  ngOnInit(): void {
    this.habilidadesService.ObtenerHabilidades().subscribe(data => {
      this.habilidades = data;
    });
  }

}
