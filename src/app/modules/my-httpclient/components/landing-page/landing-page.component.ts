import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


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

  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.loadSimpleData();
    this.loadFullResponse();
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
