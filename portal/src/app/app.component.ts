import { Component } from '@angular/core';
import { faUsers, faChartBar } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  employeesIcon = faUsers;
  chartBarIcon = faChartBar;
  isExpanded: boolean = true;
}
