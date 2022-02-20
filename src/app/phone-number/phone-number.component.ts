import { Router } from '@angular/router';
import { Component, OnInit, NgZone } from '@angular/core';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

var config = {
  apiKey: "AIzaSyAc9T6jV7QRc2sZMeQ3wAFxO2u-SH7dS_A",
  authDomain: "quiosque-phone.firebaseapp.com",
  projectId: "quiosque-phone",
  storageBucket: "quiosque-phone.appspot.com",
  messagingSenderId: "977420644755",
  appId: "1:977420644755:web:d49bb641a0a9ea7cef3866"
}


@Component({
  selector: 'app-phone-number',
  templateUrl: './phone-number.component.html',
  styleUrls: ['./phone-number.component.css']
})
export class PhoneNumberComponent implements OnInit {

  phoneNumber: any;
  reCaptchaVerifier: any;
  // tslint:disable-next-line:quotemark
  // tslint:disable-next-line:member-ordering
  displayCode = 'none';

  otp!: string;
  verify: any;
  constructor(private router: Router, private ngZone: NgZone) {}

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
    firebase.initializeApp(config),
    this.verify = JSON.parse(localStorage.getItem('verificationId') || '{}');
    console.log(this.verify);
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
        this.router.navigate(['/code'])
        //this.displayCode = 'block';
      }).catch((error) => {
        alert(error.message)
        setTimeout(() => {
          window.location.reload()
        }, 5000);
      })
  }

}

