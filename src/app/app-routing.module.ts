import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
// secciones
import { CoverComponent } from './components/layout/cover/cover.component';
import { HomeComponent } from './components/layout/home/home.component';
import { PageNotFoundComponent } from './components/layout/page-not-found/page-not-found.component';
import { AboutComponent } from './components/layout/about/about.component';
// correctivos //
import { CorrectivoDetalleComponent } from './components/mantenimiento/_mantCorrectivo/correctivo-detalle/correctivo-detalle.component';
import { CorrectivoTabsComponent } from './components/mantenimiento/_mantCorrectivo/correctivo-tabs/correctivo-tabs.component';
// maquinas //
import { SelectorListadoComponent } from './components/mantenimiento/maquinas/listadoFolder/selector-listado/selector-listado.component';
import { MaquinaComponent } from './components/mantenimiento/maquinas/maquinasFolder/maq_tabs/maquina.component';
import { CorrMaqTabsComponent } from './components/mantenimiento/maquinas/maquinaMantCorr/correctivo-tabs/correctivo-maq-tabs.component';
import { RepuestoTabsComponent } from './components/mantenimiento/maquinas/repuestosFolder/repuesto-tabs/repuesto-tabs.component';
import { RepuestosComponent } from './components/mantenimiento/maquinas/repuestosFolder/repuestos-detalle/repuestos.component';
// herramentales //
import { HerramentalComponent } from './components/mantenimiento/herramental/herramental.component';
// instrumentos //
import { InstrumentoComponent } from './components/mantenimiento/instrumentos/instrumento.component';
// edificio //
import { EdificioComponent } from './components/mantenimiento/edificio/edificio.component';
// vehiculos //
import { VehiculosComponent } from './components/mantenimiento/vehiculos/vehiculos.component';
// login
import { LoginFailComponent } from './components/loginFolder/login-fail/login-fail.component';
import { LoginComponent } from './components/loginFolder/login/login.component';

const appRoutes: Routes = [
  // mantenimiento
  { path: 'correctivos', component: CorrectivoTabsComponent },
  { path: 'correctivoDetalle', component: CorrectivoDetalleComponent },
  // mantenimiento maquinas
  { path: 'maquinaCorrectivo', component: CorrMaqTabsComponent },
  { path: 'listMaquinas', component: SelectorListadoComponent },
  { path: 'maquina', component: MaquinaComponent },
  { path: 'repuesto', component: RepuestoTabsComponent },
  { path: 'repuestoDetalle', component: RepuestosComponent },
  //
  { path: 'herramental', component: HerramentalComponent },
  { path: 'instrumento', component: InstrumentoComponent },
  { path: 'edificio', component: EdificioComponent },
  { path: 'vehiculo', component: VehiculosComponent },
  // seccions
  { path: 'pageNotFound', component: PageNotFoundComponent },
  { path: 'home', component: HomeComponent },
  { path: 'cover', component: CoverComponent },
  { path: 'login', component: LoginComponent },
  { path: 'loginFail', component: LoginFailComponent },
  { path: 'about', component: AboutComponent },
  {
    path: '',
    redirectTo: '/cover',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
    // other imports here
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }


