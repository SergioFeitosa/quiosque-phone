import { Component, OnInit, Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pedido } from '../pedido/pedido';
import { Produto } from '../produto/produto';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterLinkActive, RouterModule } from '@angular/router';

@Component({
  selector: 'app-caminho-menu',
  standalone: true,
  
  templateUrl: './caminho-menu.component.html',
  styleUrls: ['./caminho-menu.component.css'],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ],
  imports: [
    RouterModule,
    RouterLinkActive
  ],
})

@Injectable({
  providedIn: 'root'
})

export class CaminhoMenuComponent implements OnInit {

  fundoColoridoCardapio = environment.fundoColoridoCardapio;
  fundoColoridoPedido = environment.fundoColoridoPedido;
  fundoColoridoCozinha = environment.fundoColoridoCozinha;
  fundoColoridoBar = environment.fundoColoridoBar;
  fundoColoridoEntrega = environment.fundoColoridoEntrega;
  fundoColoridoConta = environment.fundoColoridoConta;

  filteredPedidos: Pedido[] = [];
  pedidos: Pedido[] = [];
  pedido!: Pedido;
  telefone: number = 0;
  codigo: number = 0;
  produto!: Produto;

  contaValorTotal: number = 0;


  constructor(
  ) { 
  }

  ngOnInit(): void {

    this.fundoColoridoCardapio = environment.fundoColoridoCardapio;
    this.fundoColoridoPedido = environment.fundoColoridoPedido;
    this.fundoColoridoCozinha = environment.fundoColoridoCozinha;
    this.fundoColoridoBar = environment.fundoColoridoBar;
    this.fundoColoridoEntrega = environment.fundoColoridoEntrega;
    this.fundoColoridoConta = environment.fundoColoridoConta;
  }

}
