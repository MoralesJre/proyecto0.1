import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  nombreUsuario: string = '';
  claveUsuario: string = '';
  
  constructor(
    private loginService: LoginService,
    private router: Router,
  ) {}

  ngOnInit() {
    
  }
  onSubmit() {
    this.loginService
      .getUsuarioByNombre(this.nombreUsuario)
      .subscribe((usuario) => {
        if (usuario) {

          if (
            usuario.usuario === this.nombreUsuario &&
            usuario.clave === this.claveUsuario
          ) {
          
          

            // Las credenciales son correctas, redirige al componente de inicio
            this.router.navigate(['clientes']);
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Las credenciales son incorrectas',
            });
          }
        }
      });
  }
}
