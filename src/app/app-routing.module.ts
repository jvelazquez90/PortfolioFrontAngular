import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarEducacionComponent } from './componentes/educacion/agregar-educacion/agregar-educacion.component';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion/editar-educacion.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { AgregarProyectoComponent } from './componentes/proyectos/agregar-proyecto/agregar-proyecto.component';
import { EditarProyectoComponent } from './componentes/proyectos/editar-proyecto/editar-proyecto.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { AgregarRedesSocialesComponent } from './componentes/redes-sociales/agregar-redes-sociales/agregar-redes-sociales.component';
import { EditarRedesSocialesComponent } from './componentes/redes-sociales/editar-redes-sociales/editar-redes-sociales.component';

// Importamos nuestros componentes
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';

// Definimos nuestras rutas
const routes: Routes = [
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'iniciar-sesion', component: IniciarSesionComponent},
  {path: '', redirectTo: 'iniciar-sesion', pathMatch: 'full'}, // lo que va a hacer es evaluar la ruta especificada
  {path: 'agregarEducacion', component: AgregarEducacionComponent},
  {path: 'editarEducacion/:id', component: EditarEducacionComponent},
  {path: 'educacion', component: EducacionComponent},
  {path: 'proyecto', component: ProyectosComponent},
  {path: 'agregarProyecto', component: AgregarProyectoComponent},
  {path: 'editarProyecto/:id', component: EditarProyectoComponent},
  {path: 'agregarRedComunicacion', component: AgregarRedesSocialesComponent},
  {path: 'portfolio/editarRedComunicacion/:id', component: EditarRedesSocialesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
