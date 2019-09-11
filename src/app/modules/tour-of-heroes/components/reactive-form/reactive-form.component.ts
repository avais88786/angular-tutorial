import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  formValue: string;
  profileForm = new FormGroup({
    firstName: new FormControl('Change'),
    lastName : new FormControl('Me'),
    address  : new FormGroup({
        street  : new FormControl('Hairan Galli, Pareshan Road'),
        city    : new FormControl('Shamshan'),
        postCode: new FormControl('S19 999')
    })
  });

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.formValue = this.profileForm.value;
  }

}
