import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EnquiryFormLeasePage } from '../../forms/enquiry-form-lease/enquiry-form-lease.page';
export interface Data {
  movies: string;
}
@Component({
  selector: 'app-lease-enquiry',
  templateUrl: './lease-enquiry.page.html',
  styleUrls: ['./lease-enquiry.page.scss'],
})
export class LeaseEnquiryPage {
  public data: Data;
  public columns: any;
  public rows: any;

  constructor(
    private http: HttpClient,
    private modalController: ModalController
  ) {
    this.columns = [
      { name: 'ID' },
      { name: 'CLIENT NAME' },
      { name: 'TEAM' },
      { name: 'SOURCE' },
      { name: 'BUDGET' },
      { name: 'PRIORITY' },
      { name: 'PHONE' },
      { name: 'STATUS' }
    ];

    this.http.get<Data>('../../assets/sample-data/purchase-enquiry.json')
      .subscribe((res) => {
        console.log(res);
        this.rows = res.movies;
      });
  }

  // async showAlert() {
  //   alert('fired!!!');
  //   const loginModal = await this.modalController.create({
  //     component: EnquiryFormPurchasePage,
  //   });
  //   return await loginModal.present();
  // }

  async presentModal() {
    const modal = await this.modalController.create({
      component: EnquiryFormLeasePage,
      cssClass: 'my-custom-class',
      keyboardClose: true
    });
    return await modal.present();
  }

}
