import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-call-back-form',
  templateUrl: './call-back-form.page.html',
  styleUrls: ['./call-back-form.page.scss'],
})
export class CallBackFormPage implements OnInit {
  public callBackForm;

  constructor() {}

  ngOnInit() {}
  submitForm(data) {
    console.log('submitted' +data);
  }
}
