import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PlantService } from '../../../services/plant.service';
import { Planta } from '../../../models/Plant.model'

@Component({
  selector: 'app-registrar-planta',
  templateUrl: './registrar-planta.component.html',
  styleUrls: ['./registrar-planta.component.css']
})
export class RegistrarPlantaComponent implements OnInit {

  nombrePlanta: String;
  fotoPlanta: string;
  especie: string;
  idPropietario: string;
  planta: Planta;

  constructor(private planService : PlantService, private ruta : ActivatedRoute, private router: Router) {

    this.ruta.params.subscribe(params=>{

      this.idPropietario = params['id'];  

      this.planta = new Planta();
      

   });
   }

  ngOnInit(): void {

  }

  crearPlanta(): void{
    this.planta.nombrePlanta = this.nombrePlanta;
    this.planta.fotoPlanta = this.fotoPlanta;
    this.planta.especie = this.especie;
    this.planta.idPropietario = this.idPropietario;
    this.router.navigate(['/propietario/'+ this.idPropietario]);
  }

}
