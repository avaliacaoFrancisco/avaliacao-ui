import { URLSearchParams, Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/toPromise';

import { environment } from './../../environments/environment';


@Injectable()
export class ConferenciaService {

  conferenciaUrl: string;

  constructor(private http: Http) {
    this.conferenciaUrl = `${environment.apiUrl}/conferencia`;
  }


  schedule(): Promise<any> {
    return this.http.get(this.conferenciaUrl)
      .toPromise()
      .then(response => {
       return response.json();
      });
  }

}
