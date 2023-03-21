import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEducacionComponent } from './componentes/educacion/agregar-educacion/agregar-educacion.component';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion/editar-educacion.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';

// Importamos nuestros componentes
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';

// Definimos nuestras rutas
const routes: Routes = [
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'iniciar-sesion', component: IniciarSesionComponent},
  {path: '', redirectTo: 'iniciar-sesion', pathMatch: 'full'}, // lo que va a hacer es evaluar la ruta especificada
  {path: 'agregarEducacion', component: AgregarEducacionComponent},
  {path: 'editarEducacion/:id', component: EditarEducacionComponent},
  {path: 'educacion', component: EducacionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
