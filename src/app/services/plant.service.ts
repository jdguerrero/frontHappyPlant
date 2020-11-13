import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Planta } from '../models/Plant.model';

@Injectable({
  providedIn: 'root'
})
export class PlantService {

  _urlPlantas: string;


  constructor(private http: HttpClient) {
    this._urlPlantas = "https://happyplantbackend.herokuapp.com/planta";
   }
  createPlant(newPlant: Planta) {
        this.http.post(this._urlPlantas, newPlant).subscribe(plant => console.log(plant));
  }

  getPlantById(id: string): Observable <any> {

    let url = this._urlPlantas + id;

    let headers = new HttpHeaders().set(
      'Type-Content','aplication/json'
    )

    return this.http.get(url, {
      headers: headers
    });

  }


  getPlantsByPropietario(idPropietario: string): Observable <any> {

    let url = this._urlPlantas + "/getByUser/" + idPropietario;

    return this.http.get(url);   

  }


  getAllinfo(): Observable <any> {
    return this.http.get<Planta>(this._urlPlantas);    
  }


 




}
