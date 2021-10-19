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

    const headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json' );

    const budgetData={
      budget_amount :'3000',
      is_active:1,
      created_date:'2020-10-09',
      updated_date:'2020-12-10'
    };

    this.http.post('localhost/9realityApi/budget/create.php', JSON.stringify(budgetData))
      .subscribe(data => {
      console.log(data);
    },
    (error) => {
            console.log( error);
    });
    this.budgets.unshift({value:budgetData.budget_amount, enabled: true});
  }

  onChangeStatus(index, value) {
    console.log(index, value);
    this.budgets[index].enabled = !value;
  }

}
