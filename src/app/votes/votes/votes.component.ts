import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-votes',
  templateUrl: 'votes.component.html',
  styleUrls: ['votes.component.css']
})
export class VotesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: string = 'doughnut';

  // events
  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }


}
