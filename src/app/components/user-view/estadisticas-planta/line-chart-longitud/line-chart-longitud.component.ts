import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { DispositivoService } from 'src/app/services/dispositivo.service';

@Component({
  selector: 'app-line-chart-longitud',
  templateUrl: './line-chart-longitud.component.html',
  styleUrls: ['./line-chart-longitud.component.css']
})
export class LineChartLongitudComponent implements OnInit {
  idPlanta = 1;
  datosDispositivo: any;
  datosRegistro: any;
  longitud: number;
  idDispositivo: number;
  fecha: Date;
  arregloFechas = [];
  arregloLongitud = [];
  arregloIdRestrosPlanta = [];


  constructor(private dispositivoService: DispositivoService) { }

  ngOnInit(): void {
    this.getTemperatura();
  }

  getTemperatura() {
    this.getRegistrosPorPlanta();
    this.dispositivoService.getDispositivos().subscribe(
      (res: any) => {
        this.datosDispositivo = res;
        //console.log(this.datosDispositivo);
        for (let dato of this.arregloIdRestrosPlanta) {
          for (let i of this.datosDispositivo) {
            if (dato == i.idDispositivo) {
              this.longitud = i.longitud;
              this.arregloLongitud.push(this.longitud);
            }
          }
        }
      },
      err => console.log(err)
    )
  }

  getRegistrosPorPlanta() {
    this.dispositivoService.getRegistrosPlanta(this.idPlanta).subscribe(
      (res: any) => {
        this.datosRegistro = res;
        //console.log(this.datosRegistro);
        for (let dato of this.datosRegistro) {
          this.idDispositivo = dato.idDispositivo;
          this.fecha = dato.fechaRegistro;
          this.arregloIdRestrosPlanta.push(this.idDispositivo);
          this.arregloFechas.push(this.formatoFecha(new Date(this.fecha)));
        }
      },
      err => console.log(err)
    )

  }

  formatoFecha(date: Date) {
    return (date.getDate() + "/" + date.getMonth() + "/" + date.getUTCFullYear());
  }


  lineChartData: ChartDataSets[] = [
    { data: this.arregloLongitud, label: 'cm Longitud' },
  ];

  lineChartLabels: Label[] = this.arregloFechas;

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'rgb( 13, 172, 65)',
      backgroundColor: 'rgba(77, 255, 136, 0.5)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
}
