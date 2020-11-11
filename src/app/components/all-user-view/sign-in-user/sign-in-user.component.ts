import { Component, OnInit } from '@angular/core';
import { Propietario } from '../../../models/Propietor.model';
import { PropietorService} from '../../../services/propietor.service';

@Component({
  selector: 'app-sign-in-user',
  templateUrl: './sign-in-user.component.html',
  styleUrls: ['./sign-in-user.component.css']
})
export class SignInUserComponent implements OnInit {

  propietario : Propietario;
  nombrePropietario: string;
  fechaRegistro: Date;
  fotoPerfil: string;
  email: string;
  usuario: string;
  pass: string;

  constructor(private propietorService:PropietorService) {

    this.propietario = new Propietario();
    this.fechaRegistro = new Date();
    this.fotoPerfil = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
  }

  ngOnInit(): void {
  }

  crearPropietario(){


    this.propietario.nombrePropietario = this.nombrePropietario;
    this.propietario.fechaRegistro = this.fechaRegistro;
    this.propietario.fotoPerfil = this.fotoPerfil;
    this.propietario.email = this.email;
    this.propietario.usuario = this.usuario;
    this.propietario.pass = this.pass;
    this.propietorService.createUser(this.propietario);

    
   }
}
