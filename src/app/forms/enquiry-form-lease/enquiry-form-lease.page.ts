import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-enquiry-form-lease',
  templateUrl: './enquiry-form-lease.page.html',
  styleUrls: ['./enquiry-form-lease.page.scss'],
})
export class EnquiryFormLeasePage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  submitForm(data) {
    console.log('submitted' +data);
  }
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
