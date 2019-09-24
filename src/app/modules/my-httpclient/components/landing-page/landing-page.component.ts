import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { switchMap, catchError } from 'rxjs/operators';
import { Observable, of, throwError } from 'rxjs';


export interface ConfigData {
  url: string;
  file: string;
}

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {

  private config = '/assets/config.json';

  simpleData: string;
  fullHttpResponse = { keys: [], data: null };

  nonJsonData: string;

  resultWithHttpHeader: string;


  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.loadSimpleData();
    this.loadFullResponse();
    this.loadNonJsonData();
    this.loadSimpleDataWithHeader();
  }
  loadSimpleDataWithHeader() {
    const httpOpts = {
      headers: new HttpHeaders({
        'Content-Type': 'xml',
        'Authorization': 'my-auth'
      })
    };

    httpOpts.headers.set('Authorization', 'new-auth');

    this.httpClient.get<ConfigData>(this.config, httpOpts)
      .subscribe(data => this.resultWithHttpHeader = JSON.stringify(data));

  }

  loadNonJsonData() {
    this.httpClient.get<ConfigData>(this.config)
      .pipe(
        switchMap<ConfigData, Observable<string>>(conf => this.httpClient.get(conf.file, { responseType: 'text' })),
        catchError((err: HttpErrorResponse) => {
          if (err.error instanceof ErrorEvent) {
            console.error('An error occurred:', err.error.message);
          } else {
            console.error(
              `Backend returned code ${err.status}, ` +
              `body was: ${err.error}`);
          }
          return throwError('Something bad happened!');
          //of(err.message)
        })
      ).subscribe(
        fileData => { this.nonJsonData = fileData; }
        ,
        err => { this.nonJsonData = JSON.stringify(err); });
  }

  loadFullResponse() {
    this.httpClient.get<ConfigData>(this.config, { observe: 'response' })
      .subscribe(resp => {
        this.fullHttpResponse.keys = resp.headers.keys().map<string>(map => `${map} : ${resp.headers.get(map)}`);
        this.fullHttpResponse.data = resp.body;
      });
  }

  loadSimpleData() {
    this.httpClient.get<ConfigData>(this.config).subscribe((data) => {
      this.simpleData = JSON.stringify(data);
    });
  }

}
