import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ProjectInputDetailsPage } from '../../forms/project-input-details/project-input-details.page';

export interface Data {
  movies: string;
}
@Component({
  selector: 'app-project',
  templateUrl: './project.page.html',
  styleUrls: ['./project.page.scss'],
})
export class ProjectPage  {

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
      component: ProjectInputDetailsPage,
      cssClass: 'my-custom-class',
      keyboardClose: true
    });
    return await modal.present();
  }

}
