import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// styles
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material/tabs';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ToastrModule } from 'ngx-toastr';

// components
import { PageNotFoundComponent } from './components/layout/page-not-found/page-not-found.component';
import { HomeComponent } from './components/layout/home/home.component';
import { AboutComponent } from './components/layout/about/about.component';
import { NavComponent } from './components/layout/nav/nav.component';
import { FooterComponent } from './components/layout/footer/footer.component';
import { CoverComponent } from './components/layout/cover/cover.component';
import { LayoutBoardComponent } from './components/layout/layout-board/layout-board.component';

// auth
import { LoginFailComponent } from './components/loginFolder/login-fail/login-fail.component';
import { LoginComponent } from './components/loginFolder/login/login.component';

// correctivos
import { CorrectivoTabsComponent } from './components/mantenimiento/_mantCorrectivo/correctivo-tabs/correctivo-tabs.component';
import { CorrectivoListadoComponent } from './components/mantenimiento/_mantCorrectivo/correctivo-listado/correctivo-listado.component';
import { CorrectivoNuevoComponent } from './components/mantenimiento/_mantCorrectivo/correctivo-nuevo/correctivo-nuevo.component';
import { CorrectivoDetalleComponent } from './components/mantenimiento/_mantCorrectivo/correctivo-detalle/correctivo-detalle.component';

// preventivos
import { MantPreventivoComponent } from './components/mantenimiento/_mantPreventivo/mant-preventivo/mant-preventivo.component';

//////////////////////////////////////////////// MAQUINAS /////////////////////////////////////////////////
// mantenimiento // maquinas // maquinas
import { MaquinaComponent } from './components/mantenimiento/maquinas/maquinasFolder/maq_tabs/maquina.component';
import { NuevaMaquinaComponent } from './components/mantenimiento/maquinas/maquinasFolder/maq_nueva/nueva-maquina.component';
import { MaquinaBuscarComponent } from './components/mantenimiento/maquinas/maquinasFolder/maq_buscar/maquina-buscar.component';
import { FichaVidaComponent } from 'src/app/components/mantenimiento/maquinas/maquinasFolder/maq_ficha_vida/ficha-vida.component';
// mantenimiento // maquinas // repuestos
import { RepuestoTabsComponent } from './components/mantenimiento/maquinas/repuestosFolder/repuesto-tabs/repuesto-tabs.component';
import { RepuestoListadoComponent } from './components/mantenimiento/maquinas/repuestosFolder/repuesto-listado/repuesto-listado.component';
import { RepuestoNuevoComponent } from './components/mantenimiento/maquinas/repuestosFolder/repuesto-nuevo/repuesto-nuevo.component';
import { RepuestosComponent } from './components/mantenimiento/maquinas/repuestosFolder/repuestos-detalle/repuestos.component';
// mantenimiento // maquinas // correctivo
import { CorrMaqTabsComponent } from './components/mantenimiento/maquinas/maquinaMantCorr/correctivo-tabs/correctivo-maq-tabs.component';
import { CorrMLComponent } from './components/mantenimiento/maquinas/maquinaMantCorr/correctivo-listado/correctivo-maq-listado.component';
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

import { HerramentalComponent } from './components/mantenimiento/herramental/herramental.component';
import { InstrumentoComponent } from './components/mantenimiento/instrumentos/instrumento.component';
import { EdificioComponent } from './components/mantenimiento/edificio/edificio.component';
import { VehiculosComponent } from './components/mantenimiento/vehiculos/vehiculos.component';
// services
import { ListadoComponent } from './components/mantenimiento/maquinas/listadoFolder/listado/listado.component';
import { CardListadoComponent } from './components/mantenimiento/maquinas/listadoFolder/card-listado/card-listado.component';
import { SelectorListadoComponent } from './components/mantenimiento/maquinas/listadoFolder/selector-listado/selector-listado.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    AboutComponent,
    NavComponent,
    FooterComponent,
    MaquinaComponent,
    HerramentalComponent,
    InstrumentoComponent,
    EdificioComponent,
    VehiculosComponent,
    RepuestosComponent,
    FichaVidaComponent,
    ListadoComponent,
    MantPreventivoComponent,
    SelectorListadoComponent,
    CoverComponent,
    LoginComponent,
    LayoutBoardComponent,
    CardListadoComponent,
    LoginFailComponent,
    NuevaMaquinaComponent,
    MaquinaBuscarComponent,
    RepuestoTabsComponent,
    RepuestoListadoComponent,
    RepuestoNuevoComponent,
    CorrectivoTabsComponent,
    CorrectivoListadoComponent,
    CorrectivoNuevoComponent,
    CorrectivoDetalleComponent,
    CorrMaqTabsComponent,
    CorrMLComponent
  ],
  imports: [
    NgbModule, // ngBootstrap
    BrowserAnimationsModule, // styles...
    MatTabsModule, // angular material
    HttpClientModule, // service
    FormsModule, // form control
    ReactiveFormsModule,
    AngularFontAwesomeModule, // for icons and fonts
    AngularSvgIconModule, // for icons en svg
    ToastrModule.forRoot(),  // toaster
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
