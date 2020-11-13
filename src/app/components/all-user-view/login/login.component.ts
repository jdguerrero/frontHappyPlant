import { Component, OnInit } from '@angular/core';
import { Propietario } from '../../../models/Propietor.model';
import { PropietorService} from '../../../services/propietor.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username: string;
  password: string;
  permitido: boolean;
  propietario : Propietario;

  constructor(private propietorService:PropietorService, private route: ActivatedRoute,
    private router: Router) {

    this.permitido = false;
    this.propietario = new Propietario();
  }

  hide = true;

  ngOnInit(): void {
    
  }

  validar(){

 
    //get de objeto Usuario por username
    this.propietorService.getUserByUsername(this.username).subscribe(Response=>{

      let user = Response;

      /**
       * cast response a Usuario
       */
      this.propietario.idPropietario = user.idPropietario;
      this.propietario.nombrePropietario = user.nombrePropietario;
      this.propietario.fechaRegistro = user.fechaRegistro;
      this.propietario.fotoPerfil = user.fotoPerfil;
      this.propietario.email = user.email;
      this.propietario.usuario = user.usuario;
      this.propietario.pass = user.pass;
      });

      if(this.password == this.propietario.pass){
        this.permitido = true;
        this.router.navigate(['/propietario/'+ this.propietario.idPropietario]);
      }else{
        alert("Usuario o contraseña incorrecta");
      }

    
    console.log(this.propietario);

  }
}
