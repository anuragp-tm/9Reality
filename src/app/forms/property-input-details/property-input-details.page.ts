import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-property-input-details',
  templateUrl: './property-input-details.page.html',
  styleUrls: ['./property-input-details.page.scss'],
})
export class PropertyInputDetailsPage implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {
  }

  submitForm(event) {
    console.log('data');
  }


  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      dismissed: true
    });
  }

}
