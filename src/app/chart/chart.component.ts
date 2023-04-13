import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
})
export class ChartComponent implements OnInit  {
  basicData: any;

  basicOptions: any;
  constructor() {}

  ngOnInit() {
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
        {
          label: 'Sales',
          data: [12, 19, 3, 5, 2, 3, 20],
          backgroundColor: '#42A5F5',
        },
      ],
    };

    this.basicOptions = {
      title: {
        display: true,
        text: 'Basic Bar Chart',
      },
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true,
            },
          },
        ],
      },
    };

  }

}
