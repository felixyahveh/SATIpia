import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PanelRoutingModule } from './panel-routing.module';
import { InicioComponent } from './inicio/inicio.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    
  
    InicioComponent
  ],
  imports: [
    CommonModule,
    PanelRoutingModule,
    FormsModule
  ]
})
export class PanelModule { }
