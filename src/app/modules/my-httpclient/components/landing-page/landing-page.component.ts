import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { switchMap, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


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

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.loadSimpleData();
    this.loadFullResponse();
    this.loadNonJsonData();
  }

  loadNonJsonData() {
    this.httpClient.get<ConfigData>(this.config)
      .pipe(
        switchMap<ConfigData, Observable<string>>(conf => this.httpClient.get(conf.file, {responseType : 'text'})),
        catchError((err: HttpErrorResponse) => of(err.message))
      ).subscribe(
        fileData => {this.nonJsonData = fileData; }
        ,
        err => {this.nonJsonData = JSON.stringify(err); });
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
