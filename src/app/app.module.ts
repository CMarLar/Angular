import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { FormularioRegistroComponent } from './component/formulario-registro/formulario-registro.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

//IMPORTS TOASTER//
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { LibrosComponent } from './pages/libros/libros.component';
import { IdCodePipe } from './pipes/id-code.pipe';
import { AddbookComponent } from './pages/addbook/addbook.component';
import { UpdatebookComponent } from './pages/updatebook/updatebook.component';
import { LoginComponent } from './pages/login/login.component';
import { FormularioLoginComponent } from './component/formulario-login/formulario-login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    FormularioRegistroComponent,
    RegistroComponent,
    PerfilComponent,
    LibrosComponent,
    IdCodePipe,
    AddbookComponent,
    UpdatebookComponent,
    LoginComponent,
    FormularioLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    //añadidos para toastr:
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
