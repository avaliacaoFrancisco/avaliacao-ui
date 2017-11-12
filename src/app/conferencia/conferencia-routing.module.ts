import { AgendarConferenciaComponent } from './agendar-conferencia/agendar-conferencia.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';



const routes: Routes = [
  {
    path: 'conferencias',
    component: AgendarConferenciaComponent,
  }

];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ConferenciaRoutingModule { }
