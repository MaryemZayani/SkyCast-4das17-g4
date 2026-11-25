import { Routes } from '@angular/router';
import { PublicLayout as VisiteurLayout } from './visiteur/layout/public-layout';
import { Home as VisiteurHome0 } from './visiteur/accueil/home';
import { About as VisiteurAbout1 } from './visiteur/about/about';
import { VillesPage as VisiteurVillesPage2 } from './visiteur/ville_service/villes/villes';
import { StationsPage as VisiteurStationsPage3 } from './visiteur/station_service/stations/stations';
import { RelevesPage as VisiteurRelevesPage4 } from './visiteur/releve_service/releves/releves';
import { PrevisionsPage as VisiteurPrevisionsPage5 } from './visiteur/prevision_service/previsions/previsions';
import { AlertesPage as VisiteurAlertesPage6 } from './visiteur/alerte_service/alertes/alertes';
import { AdminLayout as UserLayout } from './user/layout/admin-layout';
import { Dashboard as UserDashboard0 } from './user/dashboard/dashboard';
import { VillesPage as UserVillesPage2 } from './user/ville_service/villes/villes';
import { StationsPage as UserStationsPage3 } from './user/station_service/stations/stations';
import { RelevesPage as UserRelevesPage4 } from './user/releve_service/releves/releves';
import { StatistiquesPage as UserStatistiquesPage5 } from './user/releve_service/statistiques/statistiques';
import { PrevisionsPage as UserPrevisionsPage6 } from './user/prevision_service/previsions/previsions';
import { AlertesPage as UserAlertesPage7 } from './user/alerte_service/alertes/alertes';
import { Profil } from './user/auth_service/profil/profil';
import { Notifications } from './user/alerte_service/notifications/notifications';
import { AdminLayout as AdminLayout } from './admin/layout/admin-layout';
import { Dashboard as AdminDashboard0 } from './admin/dashboard/dashboard';
import { VillesPage as AdminVillesPage2 } from './admin/ville_service/villes/villes';
import { StationsPage as AdminStationsPage3 } from './admin/station_service/stations/stations';
import { CapteursPage as AdminCapteursPage4 } from './admin/station_service/capteurs/capteurs';
import { RelevesPage as AdminRelevesPage5 } from './admin/releve_service/releves/releves';
import { StatistiquesPage as AdminStatistiquesPage6 } from './admin/releve_service/statistiques/statistiques';
import { PrevisionsPage as AdminPrevisionsPage7 } from './admin/prevision_service/previsions/previsions';
import { AlertesPage as AdminAlertesPage8 } from './admin/alerte_service/alertes/alertes';
import { UtilisateursPage as AdminUtilisateursPage9 } from './admin/auth_service/utilisateurs/utilisateurs';

export const routes: Routes = [
  {
    path: 'user',
    component: UserLayout,
    children: [
      { path: 'dashboard', component: UserDashboard0 },
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'villes', component: UserVillesPage2 },
      { path: 'stations', component: UserStationsPage3 },
      { path: 'releves', component: UserRelevesPage4 },
      { path: 'statistiques', component: UserStatistiquesPage5 },
      { path: 'previsions', component: UserPrevisionsPage6 },
      { path: 'alertes', component: UserAlertesPage7 },
      { path: 'profil', component: Profil },
      { path: 'notifications', component: Notifications }
    ]
  },
  {
    path: 'admin',
    component: AdminLayout,
    children: [
      { path: 'dashboard', component: AdminDashboard0 },
      { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
      { path: 'villes', component: AdminVillesPage2, data: { admin: true } },
      { path: 'stations', component: AdminStationsPage3, data: { admin: true } },
      { path: 'capteurs', component: AdminCapteursPage4, data: { admin: true } },
      { path: 'releves', component: AdminRelevesPage5, data: { admin: true } },
      { path: 'statistiques', component: AdminStatistiquesPage6 },
      { path: 'previsions', component: AdminPrevisionsPage7, data: { admin: true } },
      { path: 'alertes', component: AdminAlertesPage8, data: { admin: true } },
      { path: 'utilisateurs', component: AdminUtilisateursPage9, data: { admin: true } }
    ]
  },
  {
    path: '',
    component: VisiteurLayout,
    children: [
      { path: '', component: VisiteurHome0 },
      { path: 'a-propos', component: VisiteurAbout1 },
      { path: 'villes', component: VisiteurVillesPage2 },
      { path: 'stations', component: VisiteurStationsPage3 },
      { path: 'releves', component: VisiteurRelevesPage4 },
      { path: 'previsions', component: VisiteurPrevisionsPage5 },
      { path: 'alertes', component: VisiteurAlertesPage6 }
    ]
  },
  { path: 'dashboard', redirectTo: 'admin/dashboard', pathMatch: 'full' },
  { path: '**', redirectTo: '' }
];
