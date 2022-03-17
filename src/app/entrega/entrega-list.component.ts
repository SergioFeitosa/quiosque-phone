import { environment } from 'src/environments/environment';
import { ActivatedRoute } from '@angular/router';
import { EntregaService } from './entrega.service';
import { Entrega } from './entrega';
import { Component, OnInit } from '@angular/core';
import { Produto } from '../produto/produto';
import { Pedido } from '../pedido/pedido';
import { PedidoService } from '../pedido/pedido.service';
import { CarrinhoService } from '../carrinho/carrinho.service';
import { Carrinho } from '../carrinho/carrinho';
@Component({
  templateUrl: './entrega-list.component.html',
  styleUrls: ['./entrega-list.component.css']

})

export class EntregaListComponent implements OnInit {

  telefone: number = 0;
  // modulo: string;
  // local: string;

  fundoColoridoEntrega: boolean = false;

  // tslint:disable-next-line:variable-name
  _categoryId: string = '';

  filteredEntregas: Entrega[] = [];
  entregas: Entrega[] = [];

  produto = {} as Produto;
  pedido = {} as Pedido;
  carrinho = {} as Carrinho;
  entrega = {} as Entrega;

  // tslint:disable-next-line:variable-name
  _entregas: Entrega[] = [];

  // tslint:disable-next-line:variable-name
  _filterBy: string = '';

  constructor(
    private entregaService: EntregaService,
    private pedidoService: PedidoService,
    private carrinhoService: CarrinhoService,
    private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {

    this.telefone = environment.telefone;
    // this.modulo = 'Entrega';
    // this.local = environment.local;

    environment.fundoColoridoCardapio = false;
    environment.fundoColoridoPedido = false;
    environment.fundoColoridoCozinha = false;
    environment.fundoColoridoEntrega = true;
    environment.fundoColoridoConta = false;

    if (+environment.telefone === 5511982551256 || environment.telefone === 99999999996) {

      this.entregaService.read().subscribe(entregas => {
        this.entregas = entregas;
        this.filteredEntregas = this.entregas;

      });
    } else {

      this.entregaService.read().subscribe(entregas => {
        this.entregas = entregas;
        this.filteredEntregas = this.entregas.filter((entrega: Entrega) => entrega.pedido.telefone - environment.telefone === 0);

      });

    }
  }

  // tslint:disable-next-line:typedef
  get filter() {
    return this._filterBy;
  }

  set filter(value: string) {
    this._filterBy = value;

    if (+environment.telefone === 5511982551256 || +environment.telefone === 99999999996) {
      this.filteredEntregas =
        this.entregas
          .filter((entrega: Entrega) => entrega.pedido.produto.nome.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);

    } else {

      this.filteredEntregas =
        this.entregas
          .filter((entrega: Entrega) => entrega.pedido.telefone - environment.telefone === 0)
          .filter((entrega: Entrega) => entrega.pedido.produto.nome.toLocaleLowerCase().indexOf(this._filterBy.toLocaleLowerCase()) > -1);

    }
  }


  // tslint:disable-next-line:quotemark
  // tslint:disable-next-line:member-ordering
  displayStyle = 'none';

  // tslint:disable-next-line:typedef
  openPopup(entregaId: number): void {
    // tslint:disable-next-line:no-unused-expression
    this.entregaService.readById(entregaId).subscribe(entrega => {
      this.entrega = entrega;
      this.pedido = this.entrega.pedido;
      this.produto = this.pedido.produto;
    });

    this.displayStyle = 'block';
  }

  // tslint:disable-next-line:typedef
  closePopup() {
    this.displayStyle = 'none';
  }

  entregaUpdate(entregaId: number): void {

    alert('entrei entrega')

    // tslint:disable-next-line:no-unused-expression
    this.entregaService.readById(entregaId).subscribe(entrega => {
      this.entrega = entrega;

      // tslint:disable-next-line:no-unused-expression
      this.pedidoService.readById(this.entrega.pedido.id!).subscribe(pedido => {
        this.pedido = pedido;
        this.pedido.status = 'Pedido entregue';
        this.atualizarPedido(this.pedido);
      })

      // tslint:disable-next-line:no-unused-expression
      this.carrinhoService.readById(this.entrega.pedido.carrinho.id!).subscribe(carrinho => {
        this.carrinho = carrinho;
        this.carrinho.status = 'Pedido entregue';
        this.atualizarCarrinho(this.carrinho);
      })


    this.entrega.pedido = this.pedido;
    this.entrega.dataCriacao = new Date();

    this.entregaService.update(this.entrega).subscribe(() => {
      this.entregaService.showMessage('Entrega realizada');
    }
    );


  });

  }

  // tslint:disable-next-line:typedef
  atualizarPedido(pedido: Pedido) {
    this.pedidoService.update(pedido).subscribe(() => {
      this.pedidoService.showMessage('Pedido Entregue');
    });
  }

  // tslint:disable-next-line:typedef
  atualizarCarrinho(carrinho: Carrinho) {
    this.carrinhoService.update(carrinho).subscribe(() => {
      this.carrinhoService.showMessage('Pedido Entregue');
    });
  }


}
