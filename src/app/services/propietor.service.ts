import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Propietario } from '../models/Propietor.model';


@Injectable({
  providedIn: 'root'
})
export class PropietorService {

  _urlPropietarios: string;


  constructor(private http: HttpClient) {
    this._urlPropietarios = "https://happyplantbackend.herokuapp.com/propietarios";
   }
  createUser(newUser: Propietario) {
        this.http.post(this._urlPropietarios, newUser).subscribe(user => console.log(user));
  }

  getUserByUsername(username: string): Observable <any> {

    let url = this._urlPropietarios +'/log/' + username;

    let headers = new HttpHeaders().set(
      'Type-Content','aplication/json'
    )

    return this.http.get(url, {
      headers: headers
    });

  }

  getUserById(idPropietario : string): Observable <any> {

    let url = this._urlPropietarios + '/' + idPropietario;

    let headers = new HttpHeaders().set(
      'Type-Content','aplication/json'
    )

    return this.http.get(url, {
      headers: headers
    });

  }

}
