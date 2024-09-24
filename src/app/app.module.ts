import { PhoneNumberComponent } from './phone-number/phone-number.component';
import { CodeComponent } from './code/code.component';
import { DashboardComponent } from './dashboard/dashboard.component';

// firebase

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';

import { environment } from '../environments/environment';

import { TelefoneValidacaoComponent } from './telefone/telefone-validacao/telefone-validacao.component';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { ContaListComponent } from './conta/conta-list.component';
import { ProdutoCreateComponent } from './produto/produto-create.component';
import { ProdutoReadComponent } from './produto/produto-read.component';
import { PedidoCreateComponent } from './pedido/pedido-create.component';
import { PedidoDeleteComponent } from './pedido/pedido-delete.component';
import { PedidoListComponent } from './pedido/pedido-list.component';
import { PedidoReadComponent } from './pedido/pedido-read.component';
import { PedidoUpdateComponent } from './pedido/pedido-update.component';
import { PedidoBarCreateComponent } from './pedidoBar/pedidoBar-create.component';
import { PedidoBarDeleteComponent } from './pedidoBar/pedidoBar-delete.component';
import { PedidoBarListComponent } from './pedidoBar/pedidoBar-list.component';
import { PedidoBarReadComponent } from './pedidoBar/pedidoBar-read.component';
import { PedidoBarUpdateComponent } from './pedidoBar/pedidoBar-update.component';
import { ModalModule } from './modal/modal.module';
import { FechamentoListComponent } from './fechamento/fechamento-list.component';
import { EntregaListComponent } from './entrega/entrega-list.component';
import { EntregaUpdateComponent } from './entrega/entrega-update.component';
import { CardapioPrincipalComponent } from './cardapioprincipal/cardapio-principal.component';
import { Error404Component } from './Error404/error-404.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ReplacePipe } from './pipe/replace.pipe';
//import { MatLegacyRadioModule as MatRadioModule } from '@angular/material';
import {MatRadioModule} from '@angular/material/radio';
import { StarComponent } from './star/star.component';
import { ProdutoListComponent } from './produto/produto-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
//import { MatLegacySnackBarModule as MatSnackBarModule } from '@angular/material/legacy-snack-bar';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { IConfig, NgxMaskModule } from 'ngx-mask';
//import { MatLegacyButtonModule as MatButtonModule } from '@angular/material/legacy-button';
import {MatButtonModule} from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { CaminhoMenuComponent } from './caminho-menu/caminho-menu.component';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { MatIconModule } from '@angular/material/icon';
import { NgxMaskDirective } from 'ngx-mask';

import { NgOtpInputModule } from 'ng-otp-input';
import { CarrinhoModule } from './carrinho/carrinho.module';
import { CarrinhoListComponent } from './carrinho/carrinho-list.component';
import { CarrinhoCreateComponent } from './carrinho/carrinho-create.component';
import { CarrinhoReadComponent } from './carrinho/carrinho-read.component';
import { CarrinhoUpdateComponent } from './carrinho/carrinho-update.component';
import { CarrinhoDeleteComponent } from './carrinho/carrinho-delete.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    PhoneNumberComponent,
    CarrinhoListComponent,
    CarrinhoCreateComponent,
    CarrinhoReadComponent,
    CarrinhoUpdateComponent,
    CarrinhoDeleteComponent,
    CodeComponent,
    DashboardComponent,
    AppComponent,
    ProdutoListComponent,
    ProdutoReadComponent,
    ProdutoCreateComponent,
    StarComponent,
    ReplacePipe,
    NavBarComponent,
    Error404Component,
    CardapioPrincipalComponent,
    PedidoCreateComponent,
    PedidoDeleteComponent,
    PedidoListComponent,
    PedidoReadComponent,
    PedidoUpdateComponent,
    PedidoBarCreateComponent,
    PedidoBarDeleteComponent,
    PedidoBarListComponent,
    PedidoBarReadComponent,
    PedidoBarUpdateComponent,
    EntregaListComponent,
    EntregaUpdateComponent,
    FechamentoListComponent,
    ContaListComponent,
    CaminhoMenuComponent,
    TelefoneValidacaoComponent,
    LoginComponent

  ],
  imports: [
    AppRoutingModule,
    RouterModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserModule,
    CarrinhoModule,
    FormsModule,
    HttpClientModule,
    ModalModule,
    MatButtonModule,
    MatGridListModule,
    MatIconModule,
    MatRadioModule,
    MatSnackBarModule,
    NgOtpInputModule,
    NgMaterialModule,
    NgOtpInputModule,
    NgxMaskModule.forRoot(),
    NoopAnimationsModule,
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [ AppComponent ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})


@NgModule({ declarations: [
        AppComponent,
        CarrinhoListComponent,
        CarrinhoCreateComponent,
        CarrinhoReadComponent,
        CarrinhoUpdateComponent,
        CarrinhoDeleteComponent,
        CodeComponent,
        DashboardComponent,
        AppComponent,
        ProdutoListComponent,
        ProdutoReadComponent,
        ProdutoCreateComponent,
        StarComponent,
        ReplacePipe,
        NavBarComponent,
        Error404Component,
        CardapioPrincipalComponent,
        PedidoCreateComponent,
        PedidoDeleteComponent,
        PedidoListComponent,
        PedidoReadComponent,
        PedidoUpdateComponent,
        PedidoBarCreateComponent,
        PedidoBarDeleteComponent,
        PedidoBarListComponent,
        PedidoBarReadComponent,
        PedidoBarUpdateComponent,
        EntregaListComponent,
        EntregaUpdateComponent,
        FechamentoListComponent,
        ContaListComponent,
        //CaminhoMenuComponent,
        TelefoneValidacaoComponent,
        LoginComponent
    ],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA], 
    imports: [AppRoutingModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireAuthModule,
        AngularFirestoreModule,
        BrowserModule,
        CarrinhoModule,
        FormsModule,
        ReactiveFormsModule,
        ModalModule,
        MatButtonModule,
        MatGridListModule,
        MatIconModule,
        MatRadioModule,
        NgxMaskDirective,
        RouterModule,
        NoopAnimationsModule], providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }, provideHttpClient(withInterceptorsFromDi()), provideAnimationsAsync()] })
export class AppModule { }
