import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// Importamos nuestros componentes
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

// Definimos nuestras rutas
const routes: Routes = [
  {path: 'encabezado', component: EncabezadoComponent},
  {path: 'informacionpersonal', component: InformacionPersonalComponent},
  {path: 'acercade', component: AcercaDeComponent},
  {path: 'experiencia', component: ExperienciaComponent},
  {path: 'aptitudes', component: AptitudesComponent},
  {path: 'educacion', component: EducacionComponent},
  {path: 'proyectos', component: ProyectosComponent},
  {path: 'ubicacion', component: UbicacionComponent},
  {path: 'redessociales', component: RedesSocialesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
