
import { CardapioPrincipalService } from './cardapio-principal.service';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-cardapio-principal',
  templateUrl: './cardapio-principal.component.html',
})

export class CardapioPrincipalComponent implements OnInit {

  // modulo: string;

  // tslint:disable-next-line:no-inferrable-types
  buttonDisabled: boolean = false;
  telefone: number = 0;
  codigo: number = 0;

  // Desktop
  element1!: HTMLElement;
  element2!: HTMLElement;
  element3!: HTMLElement;
  element4!: HTMLElement;
  element5!: HTMLElement;
  element6!: HTMLElement;
  element7!: HTMLElement;
  element8!: HTMLElement;

  // tablet
  element9!: HTMLElement;
  element10!: HTMLElement;
  element11!: HTMLElement;
  element12!: HTMLElement;
  element13!: HTMLElement;
  element14!: HTMLElement;
  element15!: HTMLElement;
  element16!: HTMLElement;

  // Mobile
  element17!: HTMLElement;
  element18!: HTMLElement;
  element19!: HTMLElement;
  element20!: HTMLElement;
  element21!: HTMLElement;
  element22!: HTMLElement;
  element23!: HTMLElement;
  element24!: HTMLElement;

  // Mobile_pequeno
  element25!: HTMLElement;
  element26!: HTMLElement;
  element27!: HTMLElement;
  element28!: HTMLElement;
  element29!: HTMLElement;
  element30!: HTMLElement;
  element31!: HTMLElement;
  element32!: HTMLElement;

  // LAPTOP

  element33!: HTMLElement;
  element34!: HTMLElement;
  element35!: HTMLElement;
  element36!: HTMLElement;
  element37!: HTMLElement;
  element38!: HTMLElement;
  element39!: HTMLElement;
  element40!: HTMLElement;

  constructor(private cardapioPrincipalService: CardapioPrincipalService) {
  }


  ngOnInit(): void {

    // this.modulo = 'Cardápio';

    if (environment.telefone > 0 && environment.codigo > 0) {
      this.telefone = environment.telefone;
      this.codigo = environment.codigo;
      this.updateClassDisabled();
    }

    environment.fundoColoridoCardapio = true;
    environment.fundoColoridoPedido = false;
    environment.fundoColoridoCozinha = false;
    environment.fundoColoridoBar = false;
    environment.fundoColoridoEntrega = false;
    environment.fundoColoridoConta = false;

    this.buttonDisabled = false;
    this.element1 = document.getElementById('desabilitado1') as HTMLElement;
    this.element2 = document.getElementById('desabilitado2') as HTMLElement;
    this.element3 = document.getElementById('desabilitado3') as HTMLElement;
    this.element4 = document.getElementById('desabilitado4') as HTMLElement;
    this.element5 = document.getElementById('desabilitado5') as HTMLElement;
    this.element6 = document.getElementById('desabilitado6') as HTMLElement;
    this.element7 = document.getElementById('desabilitado7') as HTMLElement;
    this.element8 = document.getElementById('desabilitado8') as HTMLElement;

    this.element9 = document.getElementById('desabilitado9') as HTMLElement;
    this.element10 = document.getElementById('desabilitado10') as HTMLElement;
    this.element11 = document.getElementById('desabilitado11') as HTMLElement;
    this.element12 = document.getElementById('desabilitado12') as HTMLElement;
    this.element13 = document.getElementById('desabilitado13') as HTMLElement;
    this.element14 = document.getElementById('desabilitado14') as HTMLElement;
    this.element15 = document.getElementById('desabilitado15') as HTMLElement;
    this.element16 = document.getElementById('desabilitado16') as HTMLElement;

    this.element17 = document.getElementById('desabilitado17') as HTMLElement;
    this.element18 = document.getElementById('desabilitado18') as HTMLElement;
    this.element19 = document.getElementById('desabilitado19') as HTMLElement;
    this.element20 = document.getElementById('desabilitado20') as HTMLElement;
    this.element21 = document.getElementById('desabilitado21') as HTMLElement;
    this.element22 = document.getElementById('desabilitado22') as HTMLElement;
    this.element23 = document.getElementById('desabilitado23') as HTMLElement;
    this.element24 = document.getElementById('desabilitado24') as HTMLElement;

    this.element25 = document.getElementById('desabilitado25') as HTMLElement;
    this.element26 = document.getElementById('desabilitado26') as HTMLElement;
    this.element27 = document.getElementById('desabilitado27') as HTMLElement;
    this.element28 = document.getElementById('desabilitado28') as HTMLElement;
    this.element29 = document.getElementById('desabilitado29') as HTMLElement;
    this.element30 = document.getElementById('desabilitado30') as HTMLElement;
    this.element31 = document.getElementById('desabilitado31') as HTMLElement;
    this.element32 = document.getElementById('desabilitado32') as HTMLElement;

    this.element33 = document.getElementById('desabilitado33') as HTMLElement;
    this.element34 = document.getElementById('desabilitado34') as HTMLElement;
    this.element35 = document.getElementById('desabilitado35') as HTMLElement;
    this.element36 = document.getElementById('desabilitado36') as HTMLElement;
    this.element37 = document.getElementById('desabilitado37') as HTMLElement;
    this.element38 = document.getElementById('desabilitado38') as HTMLElement;
    this.element39 = document.getElementById('desabilitado39') as HTMLElement;
    this.element40 = document.getElementById('desabilitado40') as HTMLElement;

    this.element1.removeAttribute('disabled');
    this.element2.removeAttribute('disabled');
    this.element3.removeAttribute('disabled');
    this.element4.removeAttribute('disabled');
    this.element5.removeAttribute('disabled');
    this.element6.removeAttribute('disabled');
    this.element7.removeAttribute('disabled');
    this.element8.removeAttribute('disabled');

    this.element9.removeAttribute('disabled');
    this.element10.removeAttribute('disabled');
    this.element11.removeAttribute('disabled');
    this.element12.removeAttribute('disabled');
    this.element13.removeAttribute('disabled');
    this.element14.removeAttribute('disabled');
    this.element15.removeAttribute('disabled');
    this.element16.removeAttribute('disabled');
    this.element17.removeAttribute('disabled');
    this.element18.removeAttribute('disabled');
    this.element19.removeAttribute('disabled');
    this.element20.removeAttribute('disabled');
    this.element21.removeAttribute('disabled');
    this.element22.removeAttribute('disabled');
    this.element23.removeAttribute('disabled');
    this.element24.removeAttribute('disabled');
    this.element25.removeAttribute('disabled');
    this.element26.removeAttribute('disabled');
    this.element27.removeAttribute('disabled');
    this.element28.removeAttribute('disabled');
    this.element29.removeAttribute('disabled');
    this.element30.removeAttribute('disabled');
    this.element31.removeAttribute('disabled');
    this.element32.removeAttribute('disabled');
    this.element33.removeAttribute('disabled');
    this.element34.removeAttribute('disabled');
    this.element35.removeAttribute('disabled');
    this.element36.removeAttribute('disabled');
    this.element37.removeAttribute('disabled');
    this.element38.removeAttribute('disabled');
    this.element39.removeAttribute('disabled');
    this.element40.removeAttribute('disabled');


  }

  // tslint:disable-next-line:typedef
  updateClassDisabled() {
    this.buttonDisabled = false;
    this.element1 = document.getElementById('desabilitado1') as HTMLElement;
    this.element2 = document.getElementById('desabilitado2') as HTMLElement;
    this.element3 = document.getElementById('desabilitado3') as HTMLElement;
    this.element4 = document.getElementById('desabilitado4') as HTMLElement;
    this.element5 = document.getElementById('desabilitado5') as HTMLElement;
    this.element6 = document.getElementById('desabilitado6') as HTMLElement;
    this.element7 = document.getElementById('desabilitado7') as HTMLElement;
    this.element8 = document.getElementById('desabilitado8') as HTMLElement;
    this.element9 = document.getElementById('desabilitado9') as HTMLElement;

    this.element1.removeAttribute('disabled');
    this.element2.removeAttribute('disabled');
    this.element3.removeAttribute('disabled');
    this.element4.removeAttribute('disabled');
    this.element5.removeAttribute('disabled');
    this.element6.removeAttribute('disabled');
    this.element7.removeAttribute('disabled');
    this.element8.removeAttribute('disabled');
    this.element9.removeAttribute('disabled');
  }

  validarTelefone(): void {

    if (this.telefone > 0) {
      environment.telefone = this.telefone;
      this.enviarCodigo();
    }

  }

  validarCodigo(): void {

    if (this.codigo > 0) {
      environment.codigo = this.codigo;
      // tslint:disable-next-line:semicolon
      this.updateClassDisabled();
    }

  }

  enviarCodigo(): void {
    // tslint:disable-next-line:comment-format
    //const telefone = this.navForm.get('telefone').value;
    const codigoGerado = Math.random() * this.telefone;
    this.cardapioPrincipalService.enviarCodigo(this.telefone.toString(), codigoGerado.toString());
  }


}
