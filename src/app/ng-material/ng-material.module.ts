import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { MatLegacyCardModule as MatCardModule } from '@angular/material';
import { MatCardModule } from '@angular/material/card';
//import { MatLegacyButtonModule as MatButtonModule } from '@angular/material';
import { MatButtonModule as MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
  ],
  exports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class NgMaterialModule { }
