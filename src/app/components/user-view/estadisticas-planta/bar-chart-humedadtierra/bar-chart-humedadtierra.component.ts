import { getUrlScheme } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';
import { DispositivoService } from 'src/app/services/dispositivo.service';

@Component({
  selector: 'app-bar-chart-humedadtierra',
  templateUrl: './bar-chart-humedadtierra.component.html',
  styleUrls: ['./bar-chart-humedadtierra.component.css']
})
export class BarChartHumedadtierraComponent implements OnInit {

  idPlanta = 2;
  datosDispositivo: any;
  datosRegistro: any;
  temperatura: number;
  idDispositivo: number;
  fecha: Date;
  arregloFechas = [];
  arregloTemperatura = [];
  arregloIdRestrosPlanta = [];

  humedadRecomendada: number = 42;
  humedadActual: number = 0;

  constructor(private dispositivoService: DispositivoService) {
  }

  ngOnInit(): void {
    console.log(this.humedadActual);
    this.getHumedadTierraActual();
  }

  getHumedadTierraActual() {
    this.getRegistrosPorPlanta();
    this.dispositivoService.getDispositivos().subscribe(
      (res: any) => {
        this.datosDispositivo = res;
        let tamano = this.arregloIdRestrosPlanta.length - 1;
        let ultimoRegistro = this.arregloIdRestrosPlanta[tamano];
        this.humedadActual = (this.datosDispositivo.find(element => element.idDispositivo == ultimoRegistro).humedadTierra);
      },
      err => console.log(err)
      
    )

  }

  cambiarDato(dato) {
    return this.humedadActual = dato;
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
          this.arregloFechas.push(this.fecha);
        }
      },
      err => console.log(err)
    )
    
  }

  barChartOptions = {
    responsive: true,
    fontColor: '##00AFFE'
  };
  barChartLabels: Label[] = ['% Humedad de la Tierra'];
  barChartType: ChartType = 'bar';
  barChartLegend = true;
  barChartPlugins = [];
  barChartData: ChartDataSets[] = [
    { data: [[0, 20]], label: 'Actual' },
    { data: [[0, this.humedadRecomendada]], label: 'Recomendada' }
  ];

  public barChartColors: Color[] = [
    { // grey
      backgroundColor: 'rgba(92, 214, 237 ,0.6)',
      borderColor: 'rgba(0, 215, 255,1)',
      borderWidth: 2,
    },
    { // dark grey
      backgroundColor: 'rgba(94, 182, 222, 0.6)',
      borderColor: 'rgba(0, 175, 254 ,1)',
      borderWidth: 2,
    }
  ];

}

