import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'LAVACharts';
  drawerOpen = false;

  selectedDrawer = 'account';

  accountColor = 'primary';
  chartColor = 'accent';
  mapColor = 'accent';

  sessions = [
    {value: 'Session-0', viewValue: 'Session A'},
    {value: 'Session-1', viewValue: 'Session B'},
    {value: 'Session-2', viewValue: 'Session C'}
  ];

  data = [
    {value: 'data-0', viewValue: 'Data A'},
    {value: 'data-1', viewValue: 'Data B'},
    {value: 'data-2', viewValue: 'Data C'}
  ];

  fields = [
    {viewValue: 'Date'},
    {viewValue: 'Amount'},
    {viewValue: 'Commission'}
  ];

  drawerToggle() {
    this.drawerOpen = !this.drawerOpen;
  }

  sidebarChange(selection: string) {
    this.selectedDrawer = selection;
    if (selection === 'account') {
      this.accountColor = 'primary';
      this.chartColor = 'accent';
      this.mapColor = 'accent';
    } else if (selection === 'chart') {
      this.accountColor = 'accent';
      this.chartColor = 'primary';
      this.mapColor = 'accent';
    } else if (selection === 'map') {
      this.accountColor = 'accent';
      this.chartColor = 'accent';
      this.mapColor = 'primary';
    }
  }

}
