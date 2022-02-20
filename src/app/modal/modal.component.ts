import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.css'],
})
export class ModalComponent {
  // tslint:disable-next-line:no-inferrable-types
  mostrar: boolean = false;

  // tslint:disable-next-line:typedef
  toggle() {
    this.mostrar = !this.mostrar;
  }
}
