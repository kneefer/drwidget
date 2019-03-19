import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';

interface Visit {
  id: string;
  name: string;
  date: string;
  doctorFullName: string;
  clinicName: string;
  clinicAddress: string;
}

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  public upcomingVisits: Visit[] = [
    {
      id: '0',
      name: 'Konsultacja internisty',
      date: '2 kwietnia 2019 11:00',
      doctorFullName: 'Lek. med. Anna Nowak',
      clinicName: 'Przychodnia Puls',
      clinicAddress: 'ul. 3 Maja 22, Katowice'
    },
    {
      id: '1',
      name: 'RTG mózgu',
      date: '8 kwietnia 2019, 16:15',
      doctorFullName: 'dr hab. med. Marek Modrzyński',
      clinicName: 'Centrum Medyczne Angelius Provita',
      clinicAddress: 'ul. Fabryczna 13, Katowice'
    }
  ];

  public pastVisits: Visit[] = [
    {
      id: '0',
      name: 'Konsultacja alergologa',
      date: '19 marca 2019 9:30',
      doctorFullName: 'dr med. Paweł Dobrzański',
      clinicName: 'Prywatna klinika AVIMED',
      clinicAddress: 'ul. Gliwicka 159, Katowice'
    },
    {
      id: '1',
      name: 'Konsultacja internisty',
      date: '15 mrca 2019 13:45',
      doctorFullName: 'Lek. med. Anna Nowak',
      clinicName: 'Przychodnia Puls',
      clinicAddress: 'ul. 3 Maja 22, Katowice'
    }
  ];

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
  }

  public logout() {
    this.authService.logout();
  }

  public onVisitClick(visit: Visit): void { }
}
