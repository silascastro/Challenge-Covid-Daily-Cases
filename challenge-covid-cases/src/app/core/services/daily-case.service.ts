import { Case } from './../model/case';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DailyCaseService {
  constructor(private http: HttpClient) {}

  public getCases(): Observable<any> {
    return this.http.get<Case>('http://localhost:3000/cases?_page=2');
  }

  public getFirstCase(): Observable<any> {
    return this.http.get<Case>(
      'http://localhost:3000/cases?_limit=1&_sort=date'
    );
  }

  public getLastCase(): Observable<any> {
    return this.http.get<Case>(
      'http://localhost:3000/cases?_limit=1&_sort=date&_order=desc'
    );
  }
}
