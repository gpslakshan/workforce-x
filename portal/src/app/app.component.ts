import { Component } from '@angular/core';
import { faUsers, faChartBar, faBuilding, faBolt, faEnvelope, faCalendar, faDollarSign, faSlidersH, faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  employeesIcon = faUsers;
  chartBarIcon = faChartBar;
  buildingIcon = faBuilding;
  thunderIcon = faBolt;
  mailIcon = faEnvelope;
  eventIcon = faCalendar;
  dollarIcon = faDollarSign;
  settingsIcon = faSlidersH;
  logoutIcon = faArrowAltCircleLeft;
}
