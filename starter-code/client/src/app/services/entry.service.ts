import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class EntryService {

  

  constructor(private http: Http) { }

  

  getList() {
    return this.http.get('http://localhost:3000/api/journal-entries')
      .map((res) => res.json());

  }

  

}
