import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [RouterLink],
    templateUrl: './home.html',
    styleUrl: './home.css'
})
export class Home {

    features: string[][] = [
        [
            'temp',
            'Relevés en temps réel',
            'Mesures météo des stations'
        ],
        [
            'cloud',
            'Prévisions fiables',
            'Sur 7 jours'
        ],
        [
            'bell',
            'Alertes météo',
            'En cas de phénomènes extrêmes'
        ],
        [
            'chart',
            'Statistiques',
            'Analyses et tendances'
        ]
    ];

}