import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview.component';
import { TeamsComponent } from './teams/teams.component';
import { SelectionsComponent } from './selections/selections.component';

const routes: Routes = [
  { path: '', redirectTo: '/overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  { path: 'teams', component: TeamsComponent },
  { path: 'selections', component: SelectionsComponent },
  { path: 'selections', component: OverviewComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }