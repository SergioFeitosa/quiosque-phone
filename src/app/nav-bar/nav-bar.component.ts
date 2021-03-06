import { PedidoService } from './../pedido/pedido.service';
import { NavBarService } from './nav-bar.service';
import { ContaService } from '../conta/conta.service';
import { Pedido } from '../pedido/pedido';
import { environment } from 'src/environments/environment';
import { Conta } from '../conta/conta';
import { ProdutoService } from '../produto/produto.service';
import { Produto } from '../produto/produto';
import { Component, NgZone, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']

})
export class NavBarComponent implements OnInit {

  navbarOpen = false;

  telefone: number = 0;
  codigo: number = 0;
  local: string = '';

  displayStyle: string = '';

  userData: any;

  constructor(
    private navBarService: NavBarService,
    private afAuth: AngularFireAuth,
    private router: Router,
    private ngZone: NgZone

  ) { }

  ngOnInit(): void {
    this.local = environment.local;
  }


  enviarCodigo(): void {
    // tslint:disable-next-line:comment-format
    //const telefone = this.navForm.get('telefone').value;
    const codigoGerado = Math.random() * this.telefone;
    this.navBarService.enviarCodigo(this.telefone.toString(), codigoGerado.toString());

  }

  // tslint:disable-next-line:typedef
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  // tslint:disable-next-line:typedef
  Ajuda() {
    this.navbarOpen = !this.navbarOpen;
  }

  // tslint:disable-next-line:typedef
  openPopup(): void {
    // tslint:disable-next-line:no-unused-expression
    this.displayStyle = 'block';
  }

  // tslint:disable-next-line:typedef
  closePopup() {
    this.displayStyle = 'none';
    // tslint:disable-next-line:prefer-const

  }

  logout() {
    return this.afAuth.signOut().then(() => {
      this.ngZone.run(() => {
        environment.login = false;
        this.router.navigate(['']);
      });
    });
  }

}

