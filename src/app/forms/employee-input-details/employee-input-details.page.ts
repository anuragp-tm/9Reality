/* eslint-disable @angular-eslint/contextual-lifecycle */
/* eslint-disable @typescript-eslint/naming-convention */
import { Injectable } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FormsModule } from '@angular/forms';

// eslint-disable-next-line @typescript-eslint/naming-convention
export interface sData {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  States: string;

}
export interface cData {
  Cities: string;
}

export interface empData {
  Employee: string;
}

export interface designationData {
  Dasignations: string;
}

@Injectable({
    providedIn: 'root'
  })

@Component({
  selector: 'app-employee-input-details',
  templateUrl: './employee-input-details.page.html',
  styleUrls: ['./employee-input-details.page.scss'],
})
export class EmployeeInputDetailsPage implements OnInit {
  public headers: any;
  public data: any;
  public url: any;
  public rows: any;
  public rowss: any;
  public emprows: any;
  public designationrows: any;

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {

    this.http.get<sData>('http://localhost/9realityApi/states/read')
        .subscribe((res) => {
          //console.log(res.Employee[0]);
          this.rows = res.States;
          //console.log(this.rows[0]['name']);
        });

        this.http.get<cData>('http://localhost/9realityApi/cities/read')
        .subscribe((res) => {
          //console.log(res.Employee[0]);
          this.rowss = res.Cities;
          //console.log(this.rows[0]['city']);
        });

        this.http.get<empData>('http://localhost/9realityApi/employee/read')
        .subscribe((res) => {
          console.log(res.Employee);
          this.emprows = res.Employee;

          //console.log(this.emprows[0]['name']);
        });

        this.http.get<designationData>('http://localhost/9realityApi/designation/read')
        .subscribe((res) => {
          console.log(res);
          this.designationrows = res.Dasignations;
          //console.log(this.rows[0]['city']);
        });
  }

  getCityByState()
  {
    //const allIndex = this.idState;

    this.http.get<cData>('http://localhost/9realityApi/cities/read')
        .subscribe((res) => {
          //console.log(res.Employee[0]);
          this.rowss = res.Cities;
          // eslint-disable-next-line @typescript-eslint/dot-notation
          console.log(this.rowss[0]['city']);
        });
  }
  submitForm(event){

    //var formData = new FormData();
    // eslint-disable-next-line eqeqeq
    if(event.value.password == event.value.cPassword)
    {
      this.url = 'http://localhost/9realityApi/employee/create';
      // eslint-disable-next-line max-len
      this.data = '{"emp_name":"'+event.value.emp_name+'", "emp_email":"'+event.value.email_id+'", "emp_mobile_no":"'+event.value.emp_mobile_no+'","emp_pan_no":"'+event.value.emp_pan_no+'","emp_address":"'+event.value.emp_address+'","emp_city_id":"'+event.value.city+'","emp_state_id":"'+event.value.state+'","pincode":"'+event.value.pincode+'","designation_id":"'+event.value.designation+'","emp_password":"'+event.value.password+'","emp_reporting_to":"'+event.value.reportingAuthority+'"}';
      this.headers = new Headers();
      this.headers.append('Accept', 'application/json');
      this.headers.append('Content-Type', 'application/json' );

      this.http.post(this.url, this.data, this.headers)
      .subscribe(res => {
        console.log(res);
       }, error => {
        console.log(error);
        //alert(error);
      });
    }
    else{
      alert('Confirm Password Mismatch');
    }

  }

}
