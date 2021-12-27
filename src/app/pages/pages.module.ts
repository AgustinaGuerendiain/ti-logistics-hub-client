import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SolicitarViajeComponent } from './solicitar-viaje/solicitar-viaje.component';
import { EstadoViajeComponent } from './estado-viaje/estado-viaje.component';
import { HistorialViajeComponent } from './historial-viaje/historial-viaje.component';
import { ComponentsModule } from '../components/components.module';
import { MaterialModule } from '../material.module';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    SolicitarViajeComponent,
    EstadoViajeComponent,
    HistorialViajeComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class PagesModule { }
