import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class Dashboard {
  days = [
    ['Mar', 'sun', 25, 14],
    ['Mer', 'overcast', 23, 15],
    ['Jeu', 'partly', 24, 14],
    ['Ven', 'sun', 26, 16],
    ['Sam', 'sun', 27, 17],
    ['Dim', 'showers', 25, 16],
    ['Lun', 'overcast', 24, 16]
  ];
  readings = [
    ['ST01', 'Tunis', 25, 60, '14:30'],
    ['ST02', 'Sousse', 24, 63, '14:25'],
    ['ST03', 'Sfax', 27, 55, '14:20'],
    ['ST04', 'Bizerte', 22, 68, '14:15']
  ];
  metrics = [
    ['25,4 °C', 'Température moyenne', 'temp', '#873cff'],
    ['60 %', 'Humidité moyenne', 'drop', '#00a5f5'],
    ['18 km/h', 'Vitesse du vent', 'wind', '#16bd65'],
    ['0 mm', 'Précipitations', 'rain', '#873cff']
  ];
}
