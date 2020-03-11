import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-formly-template',
  templateUrl: './formly-template.component.html',
  styleUrls: ['./formly-template.component.scss']
})
export class FormlyTemplateComponent implements OnInit {
  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  fields: FormlyFieldConfig[];
  // = [
  //   {
  //     key: 'email',
  //     type: 'input',
  //     templateOptions: {
  //       label: 'Email address',
  //       placeholder: 'Enter email',
  //       required: true,
  //     }
  //   }
  // ];
  constructor(private http: HttpClient) {
    //https://formly.dev/examples/other/json-powered - loading from json
    this.http.get<FormlyFieldConfig[]>('assets/formly-data.json').subscribe(data => this.fields = data);
   }

  ngOnInit() {
    
  }

  onSubmit() {
    console.log(this.model);
  }
}
