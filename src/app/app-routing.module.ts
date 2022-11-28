import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { RegistroComponent } from './pages/registro/registro.component';

//Rutas
const routes: Routes = 
[
  {path:"home", component: HomeComponent},
  {path:"formulario", component: RegistroComponent},
  {path: '',   redirectTo: '/home', pathMatch: 'full' }//Redirige la página directamente a home

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
