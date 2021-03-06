/* eslint-disable quote-props */
/* eslint-disable @typescript-eslint/naming-convention */
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import {RequestOptions} from '@angular/http';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.page.html',
  styleUrls: ['./budget.page.scss'],
})
export class BudgetPage implements OnInit {
  budget: any;
  public budgets = [
    { value: '10-20 Lakhs', enabled: true },
    { value: '20-30 Lakhs', enabled: true },
    { value: '30-40 Lakhs', enabled: true },
    { value: '50+ Lakhs', enabled: true },
    { value: '1 cr & above', enabled: true },
  ];

  constructor(public http: HttpClient) { }

  ngOnInit() {
  }

  addBudget(budget) {
    console.log('budget',this.budget);
    /*const httpOptions={
      headers:new HttpHeaders(
        {
          'Access-Control-Allow-Origin': 'http://localhost:8100/',
          'Content-Type':'application/json',
          'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
          'Access-Control-Allow-Headers': 'Origin,Accept,Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With'
        }),credentials:true
    };*/
    const headers = new HttpHeaders();
    headers.append('Access-Control-Allow-Origin' , '*');
    headers.append('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT');
    headers.append('Accept','application/json');
    headers.append('content-type','application/json');

    const budgetData={
      budget_amount :this.budget,
      is_active:1,

  };

    this.http.post('http://localhost/9realityApi/budget/create.php', JSON.stringify(budgetData))
      .subscribe(data => {
      console.log(data);
    },
    (error) => {
            console.log( error);
    });
    this.budgets.unshift({value:budget, enabled: true});
  }

  onChangeStatus(index, value) {
    console.log(index, value);
    this.budgets[index].enabled = !value;
  }

}
