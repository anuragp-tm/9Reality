import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { EmployeeInputDetailsPage } from '../../forms/employee-input-details/employee-input-details.page';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';


export interface Data {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  Employee: string;
}


@Component({
  selector: 'app-employee',
  templateUrl: './employee.page.html',
  styleUrls: ['./employee.page.scss'],
})


export class EmployeePage implements OnInit {

  public data: Data;
  public columns: any;
  public rows: any;

  constructor(
    private http: HttpClient,
    private modalController: ModalController
  ) {
      this.columns = [
        { name: 'SLNO' },
        { name: 'NAME'},
        { name: 'EMAIL' },
        { name: 'MOBILE' },
        { name: 'ADDRESS' },
        { name: 'PINCODE' },
        { name: 'REPORTING TO' },
        { name: 'STATUS' }
      ];

      this.http.get<Data>('http://localhost/9realityApi/employee/read.php')
        .subscribe((res) => {
          //console.log(res.Employee[0]);
          this.rows = res.Employee;
        });
    }


  ngOnInit() {
  }


  async presentModal() {
    const modal = await this.modalController.create({
      component: EmployeeInputDetailsPage,
      cssClass: 'my-custom-class',
      keyboardClose: true
    });
    return await modal.present();
  }


}
