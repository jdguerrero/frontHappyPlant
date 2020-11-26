import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { DispositivoService } from 'src/app/services/dispositivo.service';


@Component({
  selector: 'app-pie-chart-humedad-ambiente',
  templateUrl: './pie-chart-humedad-ambiente.component.html',
  styleUrls: ['./pie-chart-humedad-ambiente.component.css']
})
export class PieChartHumedadAmbienteComponent implements OnInit {

  idPlanta = 1;
  datosDispositivo: any;
  datosRegistro: any;
  temperatura: number;
  idDispositivo: number;
  fecha: string;
  arregloFechas = [];
  arregloTemperatura = [];
  arregloIdRestrosPlanta = [];

  constructor(private dispositivoService: DispositivoService) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }

  cambiarDato() {
    return 10;
  }

  ngOnInit(): void {
    this.getTemperatura();
    console.log(this.arregloTemperatura[0]);
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


  formatoFecha(date: Date) {
    return (date.getDate() + "/" + date.getMonth() + "/" + date.getUTCFullYear());
  }

  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Humedad Ambiente', 'Humedad Tierra','Info'];
  public pieChartData: SingleDataSet = [[50, 35,16]];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

}

