import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { OverviewComponent } from './overview/overview.component';
import { AppRoutingModule } from './/app-routing.module';
import { TeamsComponent } from './teams/teams.component';
import { SelectionsComponent } from './selections/selections.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { AngularService } from './angular.service';
import { TeamsService } from './teams.service';
import { TeamDropdownComponent } from './team-dropdown/team-dropdown.component';
import { SelectionItemComponent } from './selection-item/selection-item.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    OverviewComponent,
    TeamsComponent,
    SelectionsComponent,
    TeamDropdownComponent,
    SelectionItemComponent
  ],
  imports: [
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [AngularService, TeamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
