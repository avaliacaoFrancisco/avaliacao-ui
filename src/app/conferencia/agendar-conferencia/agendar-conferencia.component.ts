import { ConferenciaService } from './../conferencia.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Conferencia } from './../../core/model';
import { Title } from '@angular/platform-browser';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ToastyService } from 'ng2-toasty';
import { ErrorHandlerService } from './../../core/error-handler.service';
import { environment } from './../../../environments/environment.prod';


@Component({
  selector: 'app-agendar-conferencia',
  templateUrl: './agendar-conferencia.component.html'
 })
export class AgendarConferenciaComponent implements OnInit {

  upload = false;
  conferencias: Conferencia[];
  uploadUrl = `${environment.apiUrl}/upload`;

   constructor(
    private conferenciaService: ConferenciaService,
    private errorHandler: ErrorHandlerService,
    private toasty: ToastyService,
    private title: Title,
    private router: Router) {
    this.upload = false;
   }

  ngOnInit() {
    this.title.setTitle('Avaliação NeoGrid');
  }

  schedule() {
    this.conferenciaService.schedule()
      .then(resultado => {
        this.conferencias = resultado;
      })
      .catch(erro => this.errorHandler.handle(erro));
  }

  clear(form: FormControl) {
    form.reset();
    this.upload = false;
    this.conferencias = null;
    this.router.navigate(['/conferencias']);
  }

  onUpload(event) {
    this.toasty.success('Upload Realizado Com Sucesso');
    this.upload = true;
  }



}
