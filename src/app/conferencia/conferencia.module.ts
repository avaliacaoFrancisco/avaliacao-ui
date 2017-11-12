import { ConferenciaRoutingModule } from './conferencia-routing.module';
import { AgendarConferenciaComponent } from './agendar-conferencia/agendar-conferencia.component';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { DataTableModule } from 'primeng/components/datatable/datatable';
import { ButtonModule } from 'primeng/components/button/button';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import {FileUploadModule} from 'primeng/primeng';
import { SharedModule } from './../shared/shared.module';



@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ConferenciaRoutingModule,
    InputTextModule,
    ButtonModule,
    DataTableModule,
    TooltipModule,
    SharedModule,
    FileUploadModule

  ],
  declarations: [
    AgendarConferenciaComponent
    ],
  exports: []
})
export class ConferenciaModule { }
