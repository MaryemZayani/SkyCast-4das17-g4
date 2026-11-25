import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-visiteur-layout',
  imports: [RouterLink, RouterLinkActive, RouterOutlet],
  templateUrl: './public-layout.html',
  styleUrl: './public-layout.css'
})
export class PublicLayout {
  links = [['Accueil','/'], ['Villes','/villes'], ['Stations','/stations'], ['Prévisions','/previsions'], ['Alertes','/alertes'], ['À propos','/a-propos']];
}
