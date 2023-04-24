import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { InformacionPersonalComponent } from './componentes/informacion-personal/informacion-personal.component';
import { AcercaDeComponent } from './componentes/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { AptitudesComponent } from './componentes/aptitudes/aptitudes.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { UbicacionComponent } from './componentes/ubicacion/ubicacion.component';
import { RedesSocialesComponent } from './componentes/redes-sociales/redes-sociales.component';
import { HttpClientModule} from '@angular/common/http';
import { HeaderComponent } from './componentes/header/header.component';
import { LoginComponent } from './login/login.component';
import { IniciarSesionComponent } from './componentes/iniciar-sesion/iniciar-sesion.component';
import { PortfolioComponent } from './componentes/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';

// agregar y editar componentes
import { AgregarEducacionComponent } from './componentes/educacion/agregar-educacion/agregar-educacion.component';
import { EditarEducacionComponent } from './componentes/educacion/editar-educacion/editar-educacion.component';
import { AgregarProyectoComponent } from './componentes/proyectos/agregar-proyecto/agregar-proyecto.component';
import { EditarProyectoComponent } from './componentes/proyectos/editar-proyecto/editar-proyecto.component';
import { AgregarRedesSocialesComponent } from './componentes/redes-sociales/agregar-redes-sociales/agregar-redes-sociales.component';
import { EditarRedesSocialesComponent } from './componentes/redes-sociales/editar-redes-sociales/editar-redes-sociales.component';
import { EditarEncabezadoComponent } from './componentes/encabezado/editar-encabezado/editar-encabezado.component';
import { AgregarExperienciaComponent } from './componentes/experiencia/agregar-experiencia/agregar-experiencia.component';
import { EditarExperienciaComponent } from './componentes/experiencia/editar-experiencia/editar-experiencia.component';
import { AgregarHabilidadComponent } from './componentes/habilidades/agregar-habilidad/agregar-habilidad.component';
import { EditarHabilidadComponent } from './componentes/habilidades/editar-habilidad/editar-habilidad.component';
import { EditarInformacionPersonalComponent } from './componentes/informacion-personal/editar-informacion-personal/editar-informacion-personal.component';
import { EditarAcercaDeComponent } from './componentes/acerca-de/editar-acerca-de/editar-acerca-de.component';
import { EditarAptitudesComponent } from './componentes/aptitudes/editar-aptitudes/editar-aptitudes.component';
import { AgregarAptitudesComponent } from './componentes/aptitudes/agregar-aptitudes/agregar-aptitudes.component';

import { FormsModule } from '@angular/forms';

// para graficos circulares
import { NgCircleProgressModule } from 'ng-circle-progress';

const routes: Routes = [
  {path: 'portfolio', component: PortfolioComponent},
  {path: 'iniciar-sesion', component: IniciarSesionComponent},
  {path: '', redirectTo: 'iniciar-sesion', pathMatch: 'full'}, // lo que va a hacer es evaluar la ruta especificada
  {path: 'agregarEducacion', component: AgregarEducacionComponent},
  {path: 'portfolio/editarEducacion/:id', component: EditarEducacionComponent},
  {path: 'educacion', component: EducacionComponent},
  {path: 'agregarProyecto', component: AgregarProyectoComponent},
  {path: 'proyecto', component: ProyectosComponent},
  {path: 'portfolio/editarProyecto/:id', component: EditarProyectoComponent},
  {path: 'agregarRedComunicacion', component: AgregarRedesSocialesComponent},
  {path: 'portfolio/editarRedComunicacion/:id', component: EditarRedesSocialesComponent},
  {path: 'agregarExperiencia', component: AgregarExperienciaComponent},
  {path: 'portfolio/editarExperiencia/:id', component: EditarExperienciaComponent},
  {path: 'agregarHabilidad', component: AgregarHabilidadComponent},
  {path: 'portfolio/editarHabilidad/:id', component: EditarHabilidadComponent},
  {path: 'portfolio/editarEncabezado/:id', component: EditarEncabezadoComponent},
  {path: 'portfolio/editarInformacionPersonal/:id', component: EditarInformacionPersonalComponent},
  {path: 'portfolio/editarAcercaDe/:id', component: EditarAcercaDeComponent},
  {path: 'agregarAptitud', component: AgregarAptitudesComponent},
  {path: 'portfolio/editarAptitud/:id', component: EditarAptitudesComponent}
  
];

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    InformacionPersonalComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    AptitudesComponent,
    EducacionComponent,
    HabilidadesComponent,
    ProyectosComponent,
    UbicacionComponent,
    RedesSocialesComponent,
    HeaderComponent,
    LoginComponent,
    IniciarSesionComponent,
    PortfolioComponent,
    AgregarEducacionComponent,
    EditarEducacionComponent,
    EditarEncabezadoComponent,
    AgregarProyectoComponent,
    EditarProyectoComponent ,
    AgregarRedesSocialesComponent,
    EditarRedesSocialesComponent,
    AgregarExperienciaComponent,
    EditarExperienciaComponent,
    AgregarHabilidadComponent,
    EditarHabilidadComponent,
    EditarInformacionPersonalComponent,
    EditarAcercaDeComponent,
    EditarAptitudesComponent,
    AgregarAptitudesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forRoot(routes),

    // importo para el grafico
    NgCircleProgressModule.forRoot({})
  ],
  providers: [IniciarSesionComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
