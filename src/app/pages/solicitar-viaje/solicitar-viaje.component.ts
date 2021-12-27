import { Component, OnInit } from '@angular/core';
import { Equipo } from '../../models/equipo';
import { EquipoService } from '../../service/equipo.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-solicitar-viaje',
  templateUrl: './solicitar-viaje.component.html',
  styleUrls: ['./solicitar-viaje.component.sass']
})
export class SolicitarViajeComponent {

  equipo : Equipo = {
    marca: '',
    modelo: '',
    falla: ''
  }

  constructor(private equipoService : EquipoService, private _snackBar: MatSnackBar) { }

  formSolicitarRetiro = new FormGroup({
    marca: new FormControl('', Validators.required),
    modelo: new FormControl('', Validators.required),
    falla: new FormControl('',Validators.required)
  })

  solicitar(){
    this.equipo = this.formSolicitarRetiro.value;

    this.equipoService.solicitarReparacion(this.equipo).subscribe( resp => {
     
    });

    this.formSolicitarRetiro.reset();
  }

  openSnackBar() {
    this._snackBar.open("Solicitud enviada", '',{
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
     
  }
   
    
}
