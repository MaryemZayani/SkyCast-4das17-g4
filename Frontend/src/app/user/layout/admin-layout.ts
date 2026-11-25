import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-layout',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css'
})
export class AdminLayout {
  icons = [
    'home', 'city', 'station', 'chart', 'cloud', 'bell', 'pie', 'user', 'bell'
  ];
  query = '';
  links = [
    ['Dashboard', '/user/dashboard'],
    ['Villes', '/user/villes'],
    ['Stations', '/user/stations'],
    ['Relevés', '/user/releves'],
    ['Prévisions', '/user/previsions'],
    ['Alertes', '/user/alertes'],
    ['Statistiques', '/user/statistiques'],
    ['Profil', '/user/profil'],
    ['Notifications', '/user/notifications']
  ];
}
