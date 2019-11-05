import { Component, OnInit } from '@angular/core';
import { NavFooterService } from '../../../services/cambiaRouter/nav-footer.service';

import { Login } from 'src/app/class/auth/login';
import { AuthService } from '../../../services/auth/auth.service';
import { UserCRUDService } from '../../../services/auth/user-crud.service';
import { Router } from '@angular/router';
import { User } from '../../../class/auth/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login: Login;
  public message: string;   // para mostrar en consola
  public identity: User;    // user logueado

  constructor(
    private authService: AuthService,
    private userService: UserCRUDService,
    public navFootServ: NavFooterService,
    private router: Router
  ) {
    this.login = new Login('', '');
  }

  public cargaLocalStorage(id: string) {
    this.userService.traerUno(id).subscribe(response => {

      this.identity = response;
      localStorage.setItem('identity', JSON.stringify(this.identity));
    },
      error => {
        console.error(error);
      });
  }

  public onSubmit(): void {
    this.message = '';


    this.authService.Loguear(this.login)
      .then(
        response => {

          if (response['Estado'] === 'ok') {
            this.authService.redirectUrl = '/home';
            this.message = response['Mensaje'];
            this.cargaLocalStorage(this.login.userName); // carga el usuario logueado
          } else {
            this.authService.redirectUrl = '/loginFail';
            this.message = response['Mensaje'];
          }
          this.router.navigate([this.authService.redirectUrl]);  // redirige donde corresponda segun logueo
        }
      )
      .catch(
        response => {
          this.message = response['Mensaje'];
        }
      );
    console.log(this.message);
  }

  ngOnInit() {
    this.navFootServ.show = false;
  }
}
