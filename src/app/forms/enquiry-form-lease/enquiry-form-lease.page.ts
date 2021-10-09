import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-enquiry-form-lease',
  templateUrl: './enquiry-form-lease.page.html',
  styleUrls: ['./enquiry-form-lease.page.scss'],
})
export class EnquiryFormLeasePage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  submitForm(data) {
    console.log('submitted' +data);
  }

}
