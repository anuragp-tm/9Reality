import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-project-input-details',
  templateUrl: './project-input-details.page.html',
  styleUrls: ['./project-input-details.page.scss'],
})
export class ProjectInputDetailsPage implements OnInit {

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
