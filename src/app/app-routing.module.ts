import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { EstadoViajeComponent } from './pages/estado-viaje/estado-viaje.component';
import { SolicitarViajeComponent } from './pages/solicitar-viaje/solicitar-viaje.component';
import { HistorialViajeComponent } from './pages/historial-viaje/historial-viaje.component';
import { UsuarioGuard } from './guards/usuario.guard';
import { LoginGuard } from './guards/login.guard';

const routes: Routes = [
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path:'estado-viaje',
    component:EstadoViajeComponent,
    canActivate: [UsuarioGuard]
  },
  {
    path:'soliticar-viaje',
    component: SolicitarViajeComponent,
    canActivate: [UsuarioGuard]
  },
  {
    path:'historial-viaje',
    component: HistorialViajeComponent,
    canActivate: [UsuarioGuard]
  },
  {
    path:'**',
    redirectTo:'home'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
