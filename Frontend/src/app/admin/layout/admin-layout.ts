import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-admin-layout',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './admin-layout.html',
  styleUrl: './admin-layout.css'
})
export class AdminLayout {
  icons = [
    'home', 'city', 'station', 'chart', 'cloud', 'bell', 'pie', 'settings', 'user'
  ];
  query = '';
  links = [
    ['Dashboard', '/admin/dashboard'],
    ['Villes', '/admin/villes'],
    ['Stations', '/admin/stations'],
    ['Relevés', '/admin/releves'],
    ['Prévisions', '/admin/previsions'],
    ['Alertes', '/admin/alertes'],
    ['Statistiques', '/admin/statistiques'],
    ['Capteurs', '/admin/capteurs'],
    ['Administration', '/admin/utilisateurs']
  ];
}
