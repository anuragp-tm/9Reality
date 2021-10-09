import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enquiry-form-purchase',
  templateUrl: './enquiry-form-purchase.page.html',
  styleUrls: ['./enquiry-form-purchase.page.scss'],
})
export class EnquiryFormPurchasePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(data) {
    console.log('submitted' +data);
  }

}
