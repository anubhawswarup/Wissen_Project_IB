import { Component, OnInit } from '@angular/core';
import { GetDetailsService } from '../get-details.service'
import { UserResolverService } from '../user-resolver.service'
import { ActivatedRoute } from '@angular/router'
@Component({
  selector: 'app-admin-dash-board-view',
  templateUrl: './admin-dash-board-view.component.html',
  styleUrls: ['./admin-dash-board-view.component.css']
})
export class AdminDashBoardViewComponent implements OnInit {
  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  userCount;
  accountsCount;
  savingAccountCount;
  currentAccountCount;

  doughnutChartData: number[] = [];
  barChartData1: any[] = [];
  approvalsCount

  barChartLabels1: string[] = ['JAN', 'FEB', 'MARCH', 'APRIL', 'MAY',
    'JUNE', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC'];
  barChartType1: string = 'bar';
  barChartLegend1: boolean = true;

  // public barChartData1:any[] = [
  //   {data: [65, 59, 80, 81, 56, 55, 40], label: 'Users'}
  // ];


  constructor(public userResolver: UserResolverService, public activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.data.subscribe(data => {

      console.log(data.res);
      this.userCount = data.res[0];
      this.accountsCount = data.res[1];
      console.log(this.accountsCount);
      this.currentAccountCount = data.res[2];
      this.doughnutChartData.push(this.currentAccountCount);
      this.savingAccountCount = data.res[3];
      this.doughnutChartData.push(this.savingAccountCount);
      this.approvalsCount = data.res[4];
      
      let t1 = data.res;
      let t2 = data.res;
      let temparr = t1.splice(5, 12);
      console.log(temparr);
      console.log(t2);

      this.barChartData1.push({ data: temparr, label: 'Current' });
      
      console.log(temparr)
      this.barChartData1.push({ data: t2.splice(5), label: 'Savings' })


    })


  }

  public doughnutChartLabels: string[] = ['Current ', 'Savings'];

  public doughnutChartType: string = 'doughnut';

  public barChartLabels: string[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
  public barChartType: string = 'bar';
  public barChartLegend: boolean = true;

  public barChartData: any[] = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'Savings' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Current' }
  ];




  public chartClicked(e: any): void {
    console.log(e);
  }

  public chartHovered(e: any): void {
    console.log(e);
  }



}
