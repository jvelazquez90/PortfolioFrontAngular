import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  mostrar: Boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }

  getCambiarValor(e) {
    this.mostrar = e;
  }

  getCambiarValorOcultar(e) {
    this.mostrar = e;
  }

}
