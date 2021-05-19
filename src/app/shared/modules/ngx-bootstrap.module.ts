import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';

const modules: any[] = [
  CommonModule,
  NgxNavbarModule
];

@NgModule({
  declarations: [],
  imports: [
    ...modules
  ],
  exports: [
    ...modules
  ]
})
export class NgxBootstrapModule { }
