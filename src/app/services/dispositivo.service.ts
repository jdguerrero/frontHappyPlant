import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Registro } from '../models/Dispositivo.model';

@Injectable({
    providedIn: 'root'
})
export class DispositivoService {

    API_URI = 'http://localhost:3000';
    dispositivos = 'dispositivos';
    registros = 'registroD/planta';


    constructor(private http: HttpClient) { }

    getDispositivos() {
        return this.http.get<Registro[]>(`${this.API_URI}/${this.dispositivos}`);
    }

    getRegistrosPlanta(idPlanta : number) {
        return this.http.get<Registro[]>(`${this.API_URI}/${this.registros}/${idPlanta}`);
    }

}