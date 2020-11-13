import { Component, OnInit } from '@angular/core';
import { Planta } from '../../../models/Plant.model';
import { Propietario } from '../../../models/Propietor.model';
import { PlantService } from '../../../services/plant.service';
import { PropietorService } from '../../../services/propietor.service';

import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  planta : Planta;

  propietario : Propietario;

  id : string;

  plantas : Array <any>;

  constructor(private plantService : PlantService, private propietorService: PropietorService, private ruta:ActivatedRoute) {

    this.planta = new Planta();

    this.propietario = new Propietario();

    this.plantas = new Array <any>();


    this.ruta.params.subscribe(params=>{
      this.id = params['id'];  

      this.propietorService.getUserById(this.id).subscribe( (response: Propietario) => {
        this.propietario = response;
      });

   });
   

   }

  ngOnInit(): void {

    this.plantService.getPlantsByPropietario(this.id).subscribe( response  => {
    
      this.plantas = response;

      console.log(this.plantas);
        
    });


    

    
  }

}
