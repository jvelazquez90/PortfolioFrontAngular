import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

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
    PortfolioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
