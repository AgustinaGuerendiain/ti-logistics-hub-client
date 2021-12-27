import { Component, ViewChild, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { EquipoService } from '../../service/equipo.service';
import { EstadoViaje } from 'src/app/models/estado-viaje';

@Component({
  selector: 'app-estado-viaje',
  templateUrl: './estado-viaje.component.html',
  styleUrls: ['./estado-viaje.component.sass']
})

export class EstadoViajeComponent implements OnInit{

  infoTablaViaje: EstadoViaje[] = [];

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private equipoService : EquipoService) { }

  dataSource = new MatTableDataSource<EstadoViaje> (undefined);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  displayedColumns: string[] = ['fecha', 'marca', 'modelo', 'estado del equipo', 'estado del envio'];

   ESTADOS = [
      "",
      "Soliditud de retiro",
      "Retiro asignado",
      "Retirado",
      "Pendiente de reparación",
      "Reparado",
      "Entrega asignada",
      "Pendiente de entrega",
      "Entregado",
      "Recibido",
      "Renunciado"
  ];

  saberEstadoEquipo(param:number){
    if (param<=5){
      return "A reparar"
    }else{
      return "Reparado"
    }
  }

  ngOnInit(){ 
    
    this.equipoService.obtenerEquiposDeCliente().subscribe( resp=> {

      let respuesta = JSON.stringify(resp)
    
      JSON.parse(respuesta);

      this.infoTablaViaje = JSON.parse(respuesta);

      this.dataSource = new MatTableDataSource<EstadoViaje>(this.infoTablaViaje);

      this.dataSource.paginator = this.paginator;

    });

  }

}

