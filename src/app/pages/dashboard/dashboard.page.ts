import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ViewEncapsulation } from '@angular/core';

export interface Data {
  movies: string;
}
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  encapsulation: ViewEncapsulation.None
})

export class DashboardPage implements OnInit {
  public data: Data;
  public columns: any;
  public rows: any;

  constructor(
    private http: HttpClient
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

    this.http.get<Data>('../../assets/sample-data/movies.json')
      .subscribe((res) => {
        console.log(res);
        this.rows = res.movies;
      });
  }

  ngOnInit() {
  }

}
