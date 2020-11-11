import { Component, OnInit } from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {PlantService} from 'src/app/services/plant.service';
@Component({
  selector: 'app-actual-planta',
  templateUrl: './actual-planta.component.html',
  styleUrls: ['./actual-planta.component.css']
})
export class ActualPlantaComponent implements OnInit {
  online: boolean;
  title: string;
  plantaInfo: any; 
  fecha= new Date();
  constructor(private plantService: PlantService ) { 
    this.title = 'Planta';
    this.online = false; 

  }
  getInfoplanta() {
    this.plantService.getAllinfo().subscribe(
      res=>{
        console.log(res);
        this.plantaInfo=res;
      },
      err=>console.log(err)
    );
}
  color: ThemePalette = 'primary'

  ngOnInit(): void {
    this.getInfoplanta();
  }
}
