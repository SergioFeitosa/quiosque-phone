import { ProdutoListComponent } from './../produto/produto-list.component';
import { ProdutoService } from './../produto/produto.service';
import { Router } from '@angular/router';
import { Component, OnInit, NgZone, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { interval } from 'rxjs';
import { environment } from 'src/environments/environment';
import { WindowService } from './window.service';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

import { initializeApp } from "firebase/app";
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

const firebaseConfig = {
  apiKey: "AIzaSyAc9T6jV7QRc2sZMeQ3wAFxO2u-SH7dS_A",
  authDomain: "quiosque-phone.firebaseapp.com",
  projectId: "quiosque-phone",
  storageBucket: "quiosque-phone.appspot.com",
  messagingSenderId: "977420644755",
  appId: "1:977420644755:web:d49bb641a0a9ea7cef3866"
};


@Component({
  selector: 'app-phone-number',
  standalone: true,
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css'],
  imports: [
    FormsModule,
    CommonModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ] 
})

export class PhoneNumberComponent implements OnInit {

  phoneNumber: any;
  reCaptchaVerifier: any;
  // tslint:disable-next-line:quotemark
  // tslint:disable-next-line:member-ordering
  displayCode = 'none';

  otp!: string;
  verify: any;


  constructor(
    private router: Router,
    private ngZone: NgZone,
    private produtoListComponent: ProdutoListComponent,
    private navBarComponent: NavBarComponent,
  ) { }

  configCode = {
    allowNumbersOnly: true,
    length: 6,
    isPasswordInput: false,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      width: '25px',
      height: '25px',
    },
  };



  

  ngOnInit() {

    const app = initializeApp(firebaseConfig);
    //firebase.initializeApp(firebaseConfig),
    this.verify = JSON.parse(localStorage.getItem('verificationId') || '{}');
    // console.log(this.verify);
    this.displayCode = 'none';
  }

  getOTP() {

    this.reCaptchaVerifier = new firebase.auth.RecaptchaVerifier('sign-in-button', { size: 'invisible' })
    
    firebase.
      auth().
      signInWithPhoneNumber(this.phoneNumber, this.reCaptchaVerifier).
      then((confirmationResult) => {
        localStorage.setItem('verificationId',
          JSON.stringify(confirmationResult.verificationId))
        // this.router.navigate(['/code'])
        this.displayCode = 'block';
      }).catch((error) => {
        alert('Número inválido. Tente novamente')
        interval(1000).subscribe(n => window.location.reload());
      })
  }

  onOtpChange(otp: string) {
    this.otp = otp; 
  }

  handleClick() {
    // console.log(this.otp);
    var credential = firebase.auth.PhoneAuthProvider.credential(
      this.verify,
      this.otp
    );

    firebase
      .auth()
      .signInWithCredential(credential)
      .then((response) => {
        localStorage.setItem('user_data', JSON.stringify(response));
        this.ngZone.run(() => {
          environment.login = true;
          environment.telefone = this.phoneNumber;
          this.produtoListComponent.login = true;
          this.navBarComponent.login = true;
          this.produtoListComponent.closePopup2();
          // this.produtoService.carrinhoCreate(produtctId);
          this.router.navigate(['carrinho']);
        });
      })
      .catch((error) => {
        interval(1000).subscribe(n => window.location.reload());
      });
  }
}
