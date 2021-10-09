import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EnquiryFormPurchasePage } from '../../forms/enquiry-form-purchase/enquiry-form-purchase.page';

export interface Data {
  movies: string;
}

@Component({
  selector: 'app-purchase-enquiry',
  templateUrl: 'purchase-enquiry.page.html',
  styleUrls: ['purchase-enquiry.page.scss'],
  encapsulation: ViewEncapsulation.None
})

export class PurchaseEnquiryPage {
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
      component: EnquiryFormPurchasePage,
      cssClass: 'my-custom-class',
      keyboardClose: true
    });
    return await modal.present();
  }
}
