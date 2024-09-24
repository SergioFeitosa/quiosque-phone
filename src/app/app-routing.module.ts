import { CodeComponent } from './code/code.component';
import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProdutoListComponent } from './produto/produto-list.component';
import { CarrinhoListComponent } from './carrinho/carrinho-list.component';
import { CarrinhoUpdateComponent } from './carrinho/carrinho-update.component';
import { CarrinhoDeleteComponent } from './carrinho/carrinho-delete.component';
import { PedidoDeleteComponent } from './pedido/pedido-delete.component';
import { ContaListComponent } from './conta/conta-list.component';
import { PedidoUpdateComponent } from './pedido/pedido-update.component';
import { FechamentoListComponent } from './fechamento/fechamento-list.component';
import { EntregaListComponent } from './entrega/entrega-list.component';
import { EntregaUpdateComponent } from './entrega/entrega-update.component';
import { PedidoListComponent } from './pedido/pedido-list.component';
import { CardapioPrincipalComponent } from './cardapioprincipal/cardapio-principal.component';
import { Error404Component } from './Error404/error-404.component';
import { PedidoBarListComponent } from './pedidoBar/pedidoBar-list.component';

const routes: Routes = [

  {
    path: '', redirectTo: 'cardapioPrincipal', pathMatch: 'full'
  },
  {
    path: 'cardapioPrincipal', component: CardapioPrincipalComponent
  },
  {
    path: 'carrinho', component: CarrinhoListComponent
  },
  {
    path: 'carrinho/:id', component: CarrinhoListComponent
  },
  {
    path: 'carrinho/telefone/:telefone', component: CarrinhoListComponent
  },
  {
    path: 'carrinho/update/:id', component: CarrinhoUpdateComponent
  },
  {
    path: 'carrinho/delete/:id', component: CarrinhoDeleteComponent
  },
  {
    path: 'entrega', component: EntregaListComponent
  },
  {
    path: 'pedido', component: PedidoListComponent
  },
  {
    path: 'pedido/:id', component: PedidoListComponent
  },
  {
    path: 'pedido/telefone/:telefone', component: PedidoListComponent
  },
  {
    path: 'pedido/update/:id', component: PedidoUpdateComponent
  },
  {
    path: 'pedido/delete/:id', component: PedidoDeleteComponent
  },
  {
    path: 'pedidoBar', component: PedidoBarListComponent
  },
  {
    path: 'produto/**', component: ProdutoListComponent
  },
  {
    path: 'produto/:categoryId', component: ProdutoListComponent
  }, 
  {
    path: 'entrega/update/:id', component: EntregaUpdateComponent
  },
  {
    path: 'conta', component: ContaListComponent,
    data: {
      alwaysRefresh: true
   }
  },
  {
    path: 'fechamento', component: FechamentoListComponent
  },
  {
    path: 'code', component: CodeComponent
  },
  {
    path: 'dashboard', component: DashboardComponent
  },
  {
    path: 'phone', component: PhoneNumberComponent
  },
  {
    path: '**', component: Error404Component
  }




];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})


export class AppRoutingModule { }
