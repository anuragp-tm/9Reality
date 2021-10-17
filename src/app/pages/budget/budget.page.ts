import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.page.html',
  styleUrls: ['./budget.page.scss'],
})
export class BudgetPage implements OnInit {

  public budget = [
    { value: '10-20 Lakhs', enabled: true },
    { value: '20-30 Lakhs', enabled: true },
    { value: '30-40 Lakhs', enabled: true },
    { value: '50+ Lakhs', enabled: true },
    { value: '1 cr & above', enabled: true },
  ];

  constructor() { }

  ngOnInit() {
  }

  addLocation(location) {
    this.budget.unshift({value: location, enabled: true});
  }

  onChangeStatus(index, value) {
    console.log(index, value);
    this.budget[index].enabled = !value;
  }

}
