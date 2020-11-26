import { Component, OnInit, } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { DispositivoService } from 'src/app/services/dispositivo.service';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})

export class LineChartComponent implements OnInit{
  idPlanta = 1;
  datosDispositivo: any;
  datosRegistro: any;
  temperatura: number;
  idDispositivo: number;
  fecha: string;
  arregloFechas = [];
  arregloTemperatura = [];
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
            if(dato == i.idDispositivo){
              this.temperatura = i.temperaturaAmbiente;
              this.arregloTemperatura.push(this.temperatura);
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
        console.log(this.arregloIdRestrosPlanta);
      },
      err => console.log(err)
    )
  }

  formatoFecha(date : Date){
    return(date.getDate() + "/" + date.getMonth() + "/" + date.getUTCFullYear());
  }


  lineChartData: ChartDataSets[] = [
    { data: this.arregloTemperatura, label: '°C Temperatura Ambiente' },
  ];

  lineChartLabels: Label[] = this.arregloFechas;

  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'rgb(254, 138, 0)',
      backgroundColor: 'rgba(228, 139, 34, 0.5)',
      

    },
  ];

  fontColor= 'white';
  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';
}