import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-enquiry-form-purchase',
  templateUrl: './enquiry-form-purchase.page.html',
  styleUrls: ['./enquiry-form-purchase.page.scss'],
})
export class EnquiryFormPurchasePage implements OnInit {

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
