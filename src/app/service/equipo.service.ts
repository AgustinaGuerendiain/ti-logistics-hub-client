import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Equipo } from '../models/equipo';
import { Usuario } from '../models/usuario';
import { EstadoViaje } from '../models/estado-viaje';



@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  constructor(private http: HttpClient) { }

  
  solicitarReparacion(equipo:Equipo) : Observable<Equipo> {
    
    let id: string = JSON.parse(localStorage.getItem("UsuarioId")||"");

    return this.http.post<Equipo>(`api/Retirement?clientId=${id}&mark=${equipo.marca}&model=${equipo.modelo}&failure=${equipo.falla}`,equipo);
  
  }

  obtenerEquiposDeCliente(){

    let id: string = JSON.parse(localStorage.getItem("UsuarioId")||"");

    return this.http.get<EstadoViaje>(`api/Equipment?clientId=${id}`);
    
  }
}
